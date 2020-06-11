import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x34250a7a1e04e7134AfC88a0E81F68cAa00A6294';
//use the ABI from your contract
const abi = [
  {
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
export default new web3.eth.Contract(abi, address);