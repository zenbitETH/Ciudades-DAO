# 🗳️ VoTARO Ciudad DAO
A voting DApp that rewards users with $TARO when they validate their accounts or create DAO proposals on Querétaro City. Built on Spanish for Querétaro Reto Web3 2022, with English available.

## Contracts (deployed on Mumbai)

[📚 Queretaro Token TARO](https://mumbai.polygonscan.com/address/0x6fa2279228288F392CBd2f967D93d77F655D76B2#code)  

[📚 VoTARO Ciudad DAO GovernorAlpha](https://mumbai.polygonscan.com/address/0x23131cBc792aAdc67CFf8E4f636f6F9c89ed9456#code)
  
# 🧰 What do I need to get $ TARO? 
You need to do 4 activities to get TARO.  
1. 🦊 Download Metamask  
2. 🧅 Switch to Mumbai Testnet
3. ✔️ Get Validated  
5. 🗳️ Create and Vote on proposals  
  
VoTaro is an Ethereum application that uses a reward system to encourage residents of Querétaro City to propose and participate in activities that will improve their community. It was developed on the [Scaling Ethereum Hackathon 2021.](https://showcase.ethglobal.co/scaling/cities-protocol)  

The citizens of Querétaro who use VoTARO to propose, vote and solve the needs of their neighborhood in Querétaro City, will be rewarded with $TARO, an ERC20 token which give users voting power on these proposals and will work as an instrument to fund the costs necessary to solve them.  

Proposals are registered and managed in an automated way by the smart contract Governor Alpha a version of Compound's contract adapted to real-world interactions.  \

### Built with:

-React  

-Compound Governance Contracts  

-Surge


# Dev Environemnt

Working with Polygon Mumbai testnet contracts (further update to deploy your own contracts)

**1. Make `.env`**

```shell
touch .env
```  

**2. Add environment variables**
On .env:
```text
PRIVATE_KEY
POLYGONSCAN_API_KEY
```  

On hardhat.config.js:
```text
YOUR_NETWORK: {
  url: "https://YOUR_NODE_PROVIDER",
  accounts: [`0x${process.env.PRIVATE_KEY}`]
},
```  

**3. Install dependencies and deploy contracts**
```bash
npm install (on root)
npx hardhat run scripts/deploy.js --network YOUR_NETWORK
```  

**4. Install frontend**
```bash
cd frontend
npm install
```
  
**5. Start developmment**
on frontend:
```bash
npm start
```

**6. 📱 Open http://localhost:3000 to see the app**