const { expect } = require("chai");
const { ethers } = require("hardhat");
const { abi: abiComp } = require("../artifacts/contracts/Comp.sol/Comp.json");
const { abi: abiGov } = require("../artifacts/contracts/GovernorAlpha.sol/GovernorAlpha.json");
const { abi: abiGreeter } = require("../artifacts/contracts/Greeter.sol/Greeter.json");
const fs = require("fs"); 

//make sure you've switched defaultnetwork to Kovan and put a mnemonic.txt file in the test folder
describe("Cities-Protocol Governance v1", function () {
  let governance, taro, timelock, governanceAddress, taroAddress, timelockAddress
  let main, user1, user2;

  //temp
  let greeter,greeterAddress

  xit("setup SKALE", async () => {
    overrides = {
        gasLimit: ethers.BigNumber.from("10000000"),
      };
    
    // Define Variables
    const privateKey = '0x2c9aac9e06153f0507f60f8f138adc2af20d4035dff44c597decceff3998466d';

    // Define Provider
    const provider = new ethers.providers.JsonRpcProvider('http://eth-global-10.skalenodes.com:10323/');

    // Create Wallet
    main = new ethers.Wallet(privateKey, provider);
    
    taro = new ethers.Contract(
        "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", //set on deploy
        abiComp,
        main) 
    
    governance = new ethers.Contract(
      "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", //set on deploy
      abiComp,
      main) 
  })

  it("setup localhost", async () => {
    [main, user1, user2] = await ethers.getSigners(); //jsonrpc signers from default 20 accounts with 10000 ETH each
    //was there anything else to setup here? lol

    // console.log(ethers.utils.parseUnits("100",18).toString())

    const Igreeter = new ethers.utils.Interface(abiGreeter)
    console.log(Igreeter.functions)

    const calldata = Igreeter.functions.greet.encode()
    console.log(calldata)

    //need to get sig too, then fine. 
  })

  xit("deploy governance and taro", async () => {
    const Taro = await ethers.getContractFactory(
       "Comp"
     );
    taro = await Taro.connect(main).deploy(main.getAddress()); //mints full supply to deployer
    await taro.deployed()
    console.log("taro Address: ", taro.address)
    taroAddress=taro.address

    // tx = await taro.connect(main).approve(user1.getAddress(),ethers.BigNumber.from("1000"))
    // console.log(tx)

    const Timelock = await ethers.getContractFactory(
      "Timelock"
    );
    timelock = await Timelock.connect(main).deploy(main.getAddress(), ethers.BigNumber.from("0")); //minimum delay is 0
    await timelock.deployed()
    console.log("timelock Address: ", timelock.address)
    timelockAddress=timelock.address
  
    const Governance = await ethers.getContractFactory(
      "GovernorAlpha"
    );
    governance = await Governance.connect(main).deploy(timelock.address,taro.address,main.getAddress());  
    await governance.deployed()
    console.log("governance Address: ", governance.address)
    governanceAddress=governance.address

    //this is contract we want to execute transaction on
    const Greeter = await ethers.getContractFactory(
      "Greeter"
    );
    greeter = await Greeter.connect(main).deploy("hello world")
    await greeter.deployed()
    console.log("greeter Address: ", greeter.address)
    greeterAddress=greeter.address
  });

  xit("give taro to other users", async () => {
    await taro.connect(main).transfer(user1.getAddress(),ethers.utils.parseUnits("10",18))
    await taro.connect(main).transfer(user2.getAddress(),ethers.utils.parseUnits("10",18))

    const balance = await taro.balanceOf(user1.getAddress())
    console.log("user1 balance: ", balance.toString())
  })
  

  xit("propose greeter change",async () => {
    console.log(abiGreeter["abi"])
    const Igreeter = new ethers.utils.Interface(abiGreeter["abi"])
    const calldata = Igreeter.functions.setGreeting.encode(["goodbye world"])
    console.log(calldata)

    // await governance.connect(user1).propose(
    //   greeter.address,
    //   ethers.BigNumber.from("0"),
    //   sig,
    //   calldata,
    //   "change greeter function to say 'goodbye world'");
    //may need to push forward by 1 block after
  })

  xit("user 2 and user 1 vote", async () => {
    //understand how taro is used for votes
    await governance.connect(user2).castVote(ethers.BigNumber.from("0"),"true");

    //need to move time forward 3 blocks
    //understand governance.queue(ethers.BigNumber.from("1"))
  })

  xit("execute proposal to change greeter",async () => {
    await governance.connect(main).execute(ethers.BigNumber.from("1"))

    const greeting = greeter.greet()
    console.log("new greeting: ", greeting)
  })
});