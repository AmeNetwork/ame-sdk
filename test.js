// Import AmeComponent from local src/index
import { AmeComponent } from "./src/index";
// Import function to convert private key to account
import { privateKeyToAccount } from "viem/accounts";
// Load environment variables from .env file
import dotenv from "dotenv/config";

// Define local test network configuration
const localhost = {
  id: 31337,
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
};
// Instantiate AmeComponent with network and contract address
const component = new AmeComponent(
  localhost,
  "0x0E2b5cF475D1BAe57C6C41BbDDD3D99ae6Ea59c7"
);

// Create account object from private key in environment variables
var account = privateKeyToAccount(process.env.PRIVATE_KEY);

// Query all supported methods and their details from the contract
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

// Send a GET request to fetch user information
async function sendGetRequest() {
  var encode = component.encodeRequestParams(
    [{ type: "address" }],
    [account.address]
  );
  const getResponse = await component.sendGetRequest("getUser", encode);
  console.log("getResponse:", getResponse);
}

// Send a POST request to create a new user
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

// Send a PUT request to update user's name
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

// Run all test functions sequentially
async function test(){
  await getComponentMethods();
  await sendGetRequest();
  await sendPostRequest();
  await sendPutRequest();
}

// Execute test and log when done
test().then(()=>{
  console.log("test done");
})