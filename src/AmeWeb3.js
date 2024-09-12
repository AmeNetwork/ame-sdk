import Web3 from "web3";
import AmeWorldABI from "../abi/AmeWorld.json";
import AmeComponentABI from "../abi/AmeComponent.json";
import typesArray from "./typesArray";
class AmeWeb3 {
  constructor(provider, ameAddress) {
    this.web3 = new Web3(provider);
    this.AmeWorld = new this.web3.eth.Contract(AmeWorldABI, ameAddress);
  }

  //Query the details of a component
  async queryComponent(_componentAddress) {
    var componentContract = new this.web3.eth.Contract(
      AmeComponentABI,
      _componentAddress
    );
    const options = await componentContract.methods.options().call();

    var componentObj = {
      address: _componentAddress,
      methods: [],
    };
    for (var methodType of options) {
      methodType = parseInt(methodType);
      var methodNames = await componentContract.methods
        .getMethods(methodType)
        .call();

      for (var methodName of methodNames) {
        var dataType = await componentContract.methods
          .getMethodReqAndRes(methodName)
          .call();
        dataType[0] = dataType[0].map((num) => typesArray[Number(num)]);
        dataType[1] = dataType[1].map((num) => typesArray[Number(num)]);

        componentObj.methods.push({
          methodName: methodName,
          methodType: methodType,
          dataType: dataType,
        });
      }
    }

    return componentObj;
  }

  //Query the components owned by an address
  async queryAccount(_accountAddress) {
    var components = await this.AmeWorld.methods
      .getComponents(_accountAddress)
      .call();
    var componentObjs = [];
    for (var componentItem of components) {
      var componentObj = await this.queryComponent(componentItem);
      componentObjs.push(componentObj);
    }

    return componentObjs;
  }

  //Send Get request
  async sendGetRequest(_componentAddress, _methodName, _requestParams) {
    var componentContract = new this.web3.eth.Contract(
      AmeComponentABI,
      _componentAddress
    );
    var responseData = await componentContract.methods
      .get(_methodName, _requestParams)
      .call();
    return responseData;
  }

  //Send Post request
  async sendPostRequestWeb3js(
    _componentAddress,
    _methodName,
    _requestParams,
    _from,
    _value
  ) {
    var componentContract = new this.web3.eth.Contract(
      AmeComponentABI,
      _componentAddress
    );

    const gasPrice = await this.web3.eth.getGasPrice();
    const gas = await componentContract.methods
      .post(_methodName, _requestParams)
      .estimateGas({ from: _from , value: _value});

    var txResult = await componentContract.methods
      .post(_methodName, _requestParams)
      .send({ from: _from, gasPrice, gas, value: _value })
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {
        return receipt;
      });

    return txResult;
  }

  //Send Put request
  async sendPutRequestWeb3js(
    _componentAddress,
    _methodName,
    _requestParams,
    _from,
    _value
  ) {
    var componentContract = new this.web3.eth.Contract(
      AmeComponentABI,
      _componentAddress
    );
    const gasPrice = await this.web3.eth.getGasPrice();
    const gas = await componentContract.methods
      .put(_methodName, _requestParams)
      .estimateGas({ from: _from , value: _value});

    var txResult = await componentContract.methods
      .put(_methodName, _requestParams)
      .send({ from: _from, gasPrice, gas ,value: _value})
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {
        return receipt;
      });

    return txResult;
  }

  //Check if an address is registered
  async isRegistered(_from) {
    var isRegistered = await this.AmeWorld.methods.isRegistered(_from).call();
    return isRegistered;
  }

  //Check if an address owns a component
  async hasComponent(_from, _componentAddress) {
    var hasComponent = await this.AmeWorld.methods
      .hasComponent(_from, _componentAddress)
      .call();
    return hasComponent;
  }

  //Register to an Ame World
  async registerAmeWorld(_from) {
    console.log(_from);
    var txResult = await this.AmeWorld.methods
      .register()
      .send({ from: _from })
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {
        return receipt;
      });

    return txResult;
  }

  //Add some components
  async addComponents(_from, _componentsAddress) {
    var txResult = await this.AmeWorld.methods
      .addComponents(_componentsAddress)
      .send({ from: _from })
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {
        return receipt;
      });

    return txResult;
  }

  //Remove some components
  async removeComponents(_from, _componentsAddress) {
    var txResult = await this.AmeWorld.methods
      .removeComponents(_componentsAddress)
      .send({ from: _from })
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {
        return receipt;
      });

    return txResult;
  }

  //Encode request parameters
  encodeRequestParams(_methodRequestParamsType, _requestParamValue) {
    var reqParamsEncode = this.web3.eth.abi.encodeParameters(
      _methodRequestParamsType,
      _requestParamValue
    );
    return reqParamsEncode;
  }

  //Decode response data
  decodeResponseData(_methodResponseType, _resDataEncode) {
    var resDataDecode = this.web3.eth.abi.decodeParameters(
      _methodResponseType,
      _resDataEncode
    );

    return resDataDecode;
  }
}

export default AmeWeb3;
