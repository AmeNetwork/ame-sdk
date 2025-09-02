import { AmeComponent } from "./src/index";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv/config";

const localhost = {
  id: 31337,
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
};
const component = new AmeComponent(
  localhost,
  "0x0E2b5cF475D1BAe57C6C41BbDDD3D99ae6Ea59c7"
);

var account = privateKeyToAccount(process.env.PRIVATE_KEY);


async function getComponentMethods() {
  const options = await component.getComponentOptions();
  console.log("support methods:", options);
  var methods = [];
  for (var methodType of options) {
    methodType = parseInt(methodType);
    var methodNames = await component.getComponentMethods(methodType);
    for (var methodName of methodNames) {
      var dataType = await component.getMethodReqAndRes(methodName);
      var methodInstruction = await component.getMethodInstruction(methodName);
      methods.push({
        methodName: methodName,
        methodInstruction: methodInstruction,
        methodType: methodType,
        dataType: dataType,
      });
    }
  }
  console.log("methods:", methods);
}

async function sendGetRequest() {
  var encode = component.encodeRequestParams(
    [{ type: "address" }],
    [account.address]
  );
  const getResponse = await component.sendGetRequest("getUser", encode);
  console.log("getResponse:", getResponse);
}

async function sendPostRequest() {
  var postReqEncode = component.encodeRequestParams(
    [{ type: "string" }, { type: "uint256" }],
    ["alice", "20"]
  );
  const postResponse = await component.sendPostAndPutRequest(
    "post",
    "createUser",
    postReqEncode,
    account,
    "0"
  );
  console.log("postResponse:", postResponse);
}

async function sendPutRequest() {
  var putReqEncode = component.encodeRequestParams(
    [
      { name: "from", type: "address" },
      { name: "name", type: "string" },
    ],
    [account.address, "bob"]
  );
  const putResponse = await component.sendPostAndPutRequest(
    "put",
    "updateUserName",
    putReqEncode,
    account,
    "0"
  );
  console.log("putResponse:", putResponse);
}

async function test(){
  await getComponentMethods();
  await sendGetRequest();
  await sendPostRequest();
  await sendPutRequest();
}

test().then(()=>{
  console.log("test done");
})

