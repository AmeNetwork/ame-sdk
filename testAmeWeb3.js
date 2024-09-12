import dotenv from 'dotenv/config'
import {AmeWeb3} from "./src/index"
async function ameTest(){

    const account="0xa0ee7a142d267c1f36714e4a8f75612f20a79720"
    const ameWorldAddress="0xe1Aa25618fA0c7A1CFDab5d6B456af611873b629"
    const componentAddress="0x6d014319E0F36651997697C98Da594c7Cf235fa4"

    //Initialize Ame World
    var ame=new AmeWeb3("http://127.0.0.1:8545",ameWorldAddress);

    //Check if an address is registered
    var isRegisteredAmeWorld=await ame.isRegistered(account);
    console.log("isRegisteredAmeWorld",isRegisteredAmeWorld)
    
    //Check if an address owns a component
    var isOwnComponent=await ame.hasComponent(account,componentAddress);
    console.log("isOwnComponent",isOwnComponent)

    //Query the details of a component
    var component=await ame.queryComponent(componentAddress);
    console.log("component",component)

    //Query the components owned by an address
    var components=await ame.queryAccount(account)
    console.log("components",components)

    //Encode request parameters
    var encode=ame.encodeRequestParams(['address'],[account]);
    console.log("encode",encode)

    //Send Get request
    var requestResult=await ame.sendGetRequest(componentAddress, "getUser", encode)
    console.log("requestResult",requestResult)

    //Decode response data
    var decode=ame.decodeResponseData(["string","uint256"],requestResult)
    console.log("decode",decode)

    //Send Post request
    var encodeSendParams=ame.encodeRequestParams(['string', 'uint256'],['alice', '100']);
    ame.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)
    var postResult=await ame.sendPostRequestWeb3js(componentAddress,"createUser",encodeSendParams,account,0);
    console.log("postResult",postResult)

    //Send Put request
    var encodePutParams=ame.encodeRequestParams(['address', 'string'],[account, 'Bob']);
    ame.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)
    var putResult=await ame.sendPutRequestWeb3js(componentAddress,"updateUserName",encodePutParams,account,0);
    console.log("putResult",putResult)

}

ameTest();