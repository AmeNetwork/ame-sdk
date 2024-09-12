import { AmeViem } from "./src/index";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv/config";
async function testAmeViem() {
  const localhost = {
    id: 31337,
    rpcUrls: {
      default: { http: ["http://127.0.0.1:8545"] },
    },
  };

  const ameViem = new AmeViem(
    localhost,
    "0xF6a9ADA5eB198aFac770D6828b2d3C15FF07c5cE"
  );

  //component options, method names, data types
  const options = await ameViem.getComponentOptions();
  var methods = [];
  for (var methodType of options) {
    methodType = parseInt(methodType);
    var methodNames = await ameViem.getComponentMethods(methodType);
    console.log("methodNames", methodNames);
    for (var methodName of methodNames) {
      var dataType = await ameViem.getMethodReqAndRes(methodName);
      methods.push({
        methodName: methodName,
        methodType: methodType,
        dataType: dataType,
      });
    }
  }

  //get request
  var encode = ameViem.encodeRequestParams(
    [{ name: "address", type: "address" }],
    ["0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"]
  );
  const getReqRes = await ameViem.sendGetRequest("getUser", encode);

  var account = privateKeyToAccount(process.env.PRIVATE_KEY);

  var postReqEncode = ameViem.encodeRequestParams(
    [
      { name: "username", type: "string" },
      { name: "age", type: "uint256" },
    ],
    ["alice2", "20"]
  );

  //post request
  const postReqRes = await ameViem.sendPostAndPutRequest(
    "post",
    "createUser",
    postReqEncode,
    account,
    "0"
  );

  //put request
  var putReqEncode = ameViem.encodeRequestParams(
    [
      { name: "from", type: "address" },
      { name: "name", type: "string" },
    ],
    [account.address, "bob"]
  );
  const putReqRes = await ameViem.sendPostAndPutRequest(
    "put",
    "updateUserName",
    putReqEncode,
    account,
    "0"
  );
}

testAmeViem();
