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
  decodeEventLog,
} from "viem";

class AmeComponent {
  constructor(_config, _contract) {
    this.abi = abi;
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

    var dataType = await this.getMethodReqAndRes(_methodName);
    var responseDataType = dataType.responseDataType;
    var decodeResult = this.decodeResponseData(responseDataType, result);
    return {
      response: decodeResult,
    };
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

    const receipt = await this.publicClient.waitForTransactionReceipt({
      hash,
    });

    var dataType = await this.getMethodReqAndRes(_methodName);
    var responseDataType = dataType.responseDataType;
    var resDataDecode = "";
    if (responseDataType.length > 0 && receipt.logs.length != 0) {
      const decodedEvent = decodeEventLog({
        abi: abi,
        data: receipt.logs[0].data,
        topics: receipt.logs[0].topics,
      });

      resDataDecode = decodeAbiParameters(
        responseDataType,
        decodedEvent.args._response
      );
    }

    return {
      txHash: hash,
      txReceipt: receipt,
      response: resDataDecode,
    };
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

    var requestDataTypeParsed = dataType[0].map(
      (num) => typesArray[Number(num)]
    );
    var responseDataTypeParsed = dataType[1].map(
      (num) => typesArray[Number(num)]
    );

    var requestDataType = [];
    var responseDataType = [];
    for (let item of requestDataTypeParsed) {
      requestDataType.push({
        type: item,
      });
    }

    for (let item of responseDataTypeParsed) {
      responseDataType.push({
        type: item,
      });
    }

    return {
      requestDataType: requestDataType,
      responseDataType: responseDataType,
    };
  }

  async getMethodInstruction(_methodName) {
    const methodInstruction = await this.publicClient.readContract({
      abi,
      address: this.contract,
      functionName: "getMethodInstruction",
      args: [_methodName],
    });
    return methodInstruction;
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
export default AmeComponent;
