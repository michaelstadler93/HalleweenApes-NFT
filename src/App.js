
import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers'
import { connectWallet, getCurrentWalletConnected, getContract} from './util/interact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Claim from './Components/Claim';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Team from './Components/Team';
import Faq from './Components/Faq';
import Intro from './Components/Intro';
import Roadmap from './Components/Roadmap';
import Footer from './Components/Footer';
import './App.css';
const faqs = [
  {'title': "How many NFTs can I mint?", 'content': "5 per transaction"},
  {'title': "Which wallet can I connect?", 'content': "Meta Mask Wallet"},
  {'title': "What is the minting price?", 'content': "Each Halloween Ape is 0.05 ETH (+ gas fee)"},
  {'title': "On what Market Place will my Halloween Apes find a home?", 'content': "The largest marketplaces including Open Sea"},
]
const teams = [
  {'avatar': "images/landing/ruken.png", "name": "Ruken", "position": "Founder and a Major Freak"},
  {'avatar': "images/landing/medici.png", "name": "Medici", "position": "IT Manager and Alfa Freak"},
  {'avatar': "images/landing/vitaliy.png", "name": "Vitaliy", "position": "Developer"},
]
const social_btns = [
  {'link': "https://discord.gg/Vkzv4VRYAk", 'text': "DISCORD", 'text1': "DISCORD"},
  {'link': "https://twitter.com/brainiacnfts", 'text': "TWITTER", 'text1': "TWITTER"},
  // {'link': "https://www.instagram.com/brainiacnfts", 'text': "BRAINIAC INSTAGRAM", 'text1': "INSTAGRAM"},
]

function App() {

  const [walletAddress, setWalletAddress] = useState();
  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false)
  const [tokenPrice, setTokenPrice] = useState(null);
  const [maxTokens, setMaxTokens] = useState(0);
  const [maxTokenPurchase, setMaxTokenPurchase] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleIsActive, setSaleIsActive] = useState(false);
  const [state,setState]=useState({opacity:"0"});
  // const [maxTokenPerWallet, setMaxTokenPerWallet] = useState(0);

  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  useEffect(() => {
    ( async () => {
        let contract = getContract(walletAddress)
        let mtb = await contract.MAX_TOKENS()
        let mtp = await contract.maxTokenPurchase()
        let ts = await contract.totalSupply()
        let tp = await contract.tokenPrice()
        let sia = await contract.saleIsActive()
        setMaxTokens( parseInt(BigNumber.from(mtb).toString()) )
        setMaxTokenPurchase( parseInt(BigNumber.from(mtp).toString()) )
        setTotalSupply(BigNumber.from(ts).toString())
        setTokenPrice( (BigNumber.from(tp).div(BigNumber.from(1e9).mul(BigNumber.from(1e4))).toString() ) )  // original value * 1e5
        setSaleIsActive(sia)
    })();
  }, [loading, walletAddress])

  useEffect(() => {
    (async () => { 
      const { address, status } = await getCurrentWalletConnected()
      setWalletAddress(address)
      setStatus(status)
    })();
  }, [])

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status, notify])

  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }

  // useEffect(()=>{
  //   if(typeof window !=="underfined"){
  //     window.onscroll=()=>{
  //       let currentScrollPos=window.pageYOffset;
  //       let maxScroll=document.body.scrollHeight-window.innerHeight;
  //       console.log(currentScrollPos);
  //       if(currentScrollPos>0 && currentScrollPos<maxScroll){
  //         setState({opacity:"1"})
  //       }
  //       else{
  //         setState({opacity:"0"})
  //       }
  //     }
  //   }
  // },[])
 
  

  
  return (
    <div className="App">
      <Header social_btns={social_btns} />
      <Claim maxTokenPurchase={maxTokenPurchase} maxTokens={maxTokens} tokenPrice={tokenPrice} setStatus={setStatus} 
          loading={loading} walletAddress={walletAddress} totalSupply={totalSupply} setMintLoading={setMintLoading} saleIsActive={saleIsActive} 
          onClickDisconnectWallet={onClickDisconnectWallet} onClickConnectWallet={onClickConnectWallet} />
      <Intro />
      <Roadmap/>
      <Faq faqs={faqs}/>
      <Team teams={teams}/>
      <Footer/>
    </div>
  );
}

export default App;
