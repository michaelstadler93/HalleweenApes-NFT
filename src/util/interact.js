import { pinFileToIPFS } from "./pinata.js"
import { ethers } from 'ethers'
import { contractAddress } from '../constants/address'
import { chainId } from '../constants/address'
require("dotenv").config()

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const chain = await window.ethereum.request({ method: 'eth_chainId' })
      console.log(chain, parseInt(chain, 16), chainId, parseInt(chain, 16) === chainId)
      if (parseInt(chain, 16) === parseInt(chainId, 16)) {
        const addressArray = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 You are ready to mint!",
          }
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          }
        }
      } else {
        window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId:chainId }],
        })
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        }
      }
      
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      })
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 You can mint new pack now.",
        }
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask and choose the Ethereum Mainnet using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}



export const upload = async() => {
  const reader = new FileReader()
  console.log('sdfsdf')
  reader.onloadend = function() {
    console.log(reader.result)

    // const buf = buffer.Buffer(reader.result) // Convert data into buffer
  }
  const sdf = await pinFileToIPFS('nft.png')
  console.log(sdf)
  // const photo = document.getElementById("photo")
  // reader.readAsArrayBuffer(photo.files[0]) // Read Provided File
}

export const getContract = (walletAddress) => {
  const contractABI = require("../constants/contract.json")
  var contract

  if(walletAddress === null || walletAddress === '' || walletAddress === undefined) {
    contract = new ethers.Contract(contractAddress, contractABI, ethers.getDefaultProvider('rinkeby'))
  } else {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer)
  }

  return contract
}
