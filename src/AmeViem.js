import abi from "../abi/AmeComponent.json";
import typesArray from "./typesArray";
import {
  createWalletClient,
  createPublicClient,
  encodeAbiParameters,
  decodeAbiParameters,
  parseEther,
  http,
  defineChain,
} from "viem";

class AmeViem {
  constructor(_config, _contract) {
    this.contract = _contract;
    this.walletClient = createWalletClient({
      chain: defineChain(_config),
      transport: http(),
    });
    this.publicClient = createPublicClient({
      chain: _config,
      transport: http(),
    });
  }

  async sendGetRequest(_methodName, _params) {
    const result = await this.publicClient.readContract({
      abi,
      address: this.contract,
      functionName: "get",
      args: [_methodName, _params],
    });

    return result;
  }

  async sendPostAndPutRequest(
    _methodType,
    _methodName,
    _requestParams,
    _account,
    _value
  ) {
    const { request } = await this.publicClient.simulateContract({
      abi,
      address: this.contract,
      functionName: _methodType,
      args: [_methodName, _requestParams],
      account: _account,
      value: parseEther(_value),
    });

    const hash = await this.walletClient.writeContract(request);

    const transaction = await this.publicClient.waitForTransactionReceipt({
      hash,
    });

    return transaction;
  }

  async getComponentOptions() {
    const options = await this.publicClient.readContract({
      abi,
      address: this.contract,
      functionName: "options",
    });

    return options;
  }

  async getComponentMethods(_methodType) {
    const methodNames = await this.publicClient.readContract({
      abi,
      address: this.contract,
      functionName: "getMethods",
      args: [_methodType],
    });
    return methodNames;
  }

  async getMethodReqAndRes(_methodName) {
    var dataType = await this.publicClient.readContract({
      abi,
      address: this.contract,
      functionName: "getMethodReqAndRes",
      args: [_methodName],
    });
    dataType[0] = dataType[0].map((num) => typesArray[Number(num)]);
    dataType[1] = dataType[1].map((num) => typesArray[Number(num)]);
    return dataType;
  }



  //Encode request parameters
  encodeRequestParams(_methodRequestParamsType, _requestParamValue) {
    return encodeAbiParameters(_methodRequestParamsType, _requestParamValue);
  }

  //Decode response data
  decodeResponseData(_methodResponseType, _resDataEncode) {
    return decodeAbiParameters(_methodResponseType, _resDataEncode);
  }
}
export default AmeViem;
