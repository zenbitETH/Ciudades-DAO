const { expect } = require("chai");
const { ethers } = require("hardhat");
const { abi: abiDai } = require("../artifacts/contracts/Dai.sol/Dai.json");
const fs = require("fs"); 

function mnemonic() {
  return fs.readFileSync("./test/mnemonic.txt").toString().trim();
}

//make sure you've switched defaultnetwork to Kovan and put a mnemonic.txt file in the test folder
describe("Cities-Protocol Governance v1", function () {
  let governance, taro, governanceAddress, taroAddress
  let main

  it("deploy/setup SKALE contracts", async () => {
    overrides = {
        gasLimit: ethers.BigNumber.from("10000000"),
      };

    provider = new ethers.providers.InfuraProvider("kovan", {
        projectId: "faefe1dcd6094fb388019173d2328d8f",
        projectSecret: "dffad28934914b97a5365fa0c2eb9de6"
      });

    main = ethers.Wallet.fromMnemonic(mnemonic()); 
    main = await main.connect(provider);
    
    taro = new ethers.Contract(
        "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", //set on deploy
        abiDai,
        main) 
    
    governance = new ethers.Contract(
      "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", //set on deploy
      abiComp,
      main) 
  })

  it("deploy governance and taro", async () => {
    const Dai = await ethers.getContractFactory(
       "Dai"
     );
     taro = await Dai.connect(main).deploy(ethers.BigNumber.from((10**24).toLocaleString('fullwide', {useGrouping:false}))); //1,000,000 taro, with 18 decimals. 
     await taro.deployed()
     console.log("taro Address: ", taro.address)
     taroAddress=taro.address

    const Governance = await ethers.getContractFactory(
      "Dai"
    );
    governance = await Governance.connect(main).deploy();  
    await governance.deployed()
    console.log("governance Address: ", governance.address)
    governanceAddress=governance.address
  });
  
}