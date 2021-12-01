import React, { useEffect, useState } from 'react';
import { BigNumber } from 'ethers'
import { getContract } from '../util/interact';
import ConnectWallet from './ConnectWallet';

const lbl_claim_title = 'CLAIM YOUR BRAIN!';
const lbl_start_minting = 'PRESALE BEGINS OCTOBER 15TH!';
const View_brain = 'VIEW YOUR BRAIN ON OPENSEA AFTER MINTING!';

function Claim(props) {

   const { maxTokenPurchase, maxTokens, tokenPrice, setStatus, loading, walletAddress, totalSupply, setMintLoading, onClickConnectWallet, onClickDisconnectWallet, saleIsActive } = props
   const [mintCount, setMintCount] = useState(1);
   const [modalShow, setModalShow] = useState(false);
   const [mintBtnName, setMintBtnName] = useState('');

   useEffect(() => {
      setMintBtnName(saleIsActive ? 'MINT' : 'MINT PRESALE')
      console.log(mintBtnName)
   }, [saleIsActive])

   async function onMint(event) {
      event.preventDefault()

      if (!walletAddress) {
          setStatus('Please connect with Metamask')
          return
      }
      if (mintCount === 0) {
         setStatus(`Please input the number of Brains.`)
         return          
      }
      if (mintCount > maxTokenPurchase) {
         setStatus(`You can mint maximum up to 20 Brain.`)
         return 
      }

      setMintLoading(true)
      const contract = getContract(walletAddress)
      if(saleIsActive) {      //if saleIsActive is true, Mint Token
         try {
            let tx = await contract.mintToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: walletAddress })
            let res = await tx.wait()
            if (res.transactionHash) {
               setStatus(`You minted ${mintCount} BRAIN Successfully`)
               setMintLoading(false)
            }
         } catch (err) {
            let errorContainer =  (err.error && err.error.message)  ? err.error.message : ''
            let errorBody = errorContainer.substr(errorContainer.indexOf(":")+1)
            let status = "Transaction failed because you have insufficient funds or sales not started"
            errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
            setMintLoading(false)
         }
      } else {               //if saleIsActive is false, Presale Token
         try {
            let tx = await contract.preSaleToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: walletAddress })
            let res = await tx.wait()
            if (res.transactionHash) {
               setStatus(`You presaled ${mintCount} BRAIN Successfully`)
               setMintLoading(false)
            }
         } catch (err) {
            let errorContainer =  (err.error && err.error.message)  ? err.error.message : ''
            let errorBody = errorContainer.substr(errorContainer.indexOf(":")+1)
            let status = "Transaction failed because you have insufficient funds or sales not started"
            errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
            setMintLoading(false)
         }


      }
     
   }

   function onChangeMintCount(isIncrea) {
      let newCount = isIncrea? mintCount + 1 : mintCount - 1
      if ( newCount > 20 ) newCount = 20
      if ( newCount < 0 ) newCount = 0
      setMintCount(newCount)
   }

   return (
      <div className="relative top-0">
         <img src="images/landing/back.jpg" className="w-screen h-auto"/>
         <div className="absolute top-0 px-28 py-20 flex flex-col ">
            <div className="w-3/5 m-auto mb-12  relative ">
               <img src="images/landing/title.png" className="novisi"/>
               <div className="  ani">
                  <img src="images/landing/title.png" />
               </div>
               
            </div>
            <img src="images/landing/characters.png" className="cha_ani" />
            <div className="relative ">
               <img src="images/landing/box.png" className=" m-auto"/>
               <div className="absolute p-8 top-0 left-0  w-full text-center text-white  h-full flex flex-col flex-wrap justify-around items-center">
                  <p className="countText"> 0 / {maxTokens} </p>
               
                  <div className="flex justify-around w-full">
                     <div className="w-1/3">{maxTokenPurchase} MINT MAX</div>
                     <div className="w-1/3">
                        <button className="decremnet" onClick={() => onChangeMintCount(false)}> - </button>
                        <input type="number" readOnly value={mintCount} className="number" />   
                        <button className="increment" onClick={() => onChangeMintCount(true)}> + </button>
                     </div>
                     <div className="w-1/3">1 Brain = {parseFloat(tokenPrice/100000)} ETH</div>      
                  </div >


                  <div className="w-full flex justify-around " >
                   
                     {
                        walletAddress ? 
                           <a  className="myButton" onClick={e => onClickDisconnectWallet(e)}><div >{ walletAddress.slice(0, 11) }...</div></a>
                           :
                           <a  className="myButton" onClick={() => setModalShow(true)}><div >CONNECT METAMASK</div></a>
                     }
                    {
                        loading ?
                        <a  href="#" className="myButton" onClick={e => e.preventDefault()}>
                           Minting
                        </a>
                        :
                        <a  href="#" className="myButton" onClick={e => onMint(e)}>
                           {mintBtnName} 
                        </a>
                    }
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   )
}

export default Claim;
