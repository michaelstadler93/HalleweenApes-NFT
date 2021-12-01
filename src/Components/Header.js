import React, {useState} from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
function Header(props) {

   const { social_btns } = props
   const [modalShow, setModalShow] = useState(false);
   const title_header = "Brainiac NFTs";
   const title_content = "A unique collection of 8888 algorithmically generated canvas style characters. Each NFT in the Brainiac Society collection will be used as a pass for holders to access private mastermind groups within our discord community. Each week the Brainiac Society will feature guest speakers ranging from NFT and Crypto experts to well-known influencers, and thought leaders within multiple industries in a fashion that would bring educational actionable value to the community of Brainiacs.";
   const title_date_header = "OFFICIAL LAUNCH DATE";
   const title_date_conten = "OCTOBER 23RD @ 2PM CST";

   return social_btns ? (
      <div className="sticky top-0 z-10">
         <div className="relative">
            <div className="absolute top-0 w-screen">
               <div className="flex justify-between px-12 py-6 text-white text-xl">
                  <div>
                     <a href="#"><FaDiscord className="inline mr-6 text-2xl bloodClick"/></a>
                     <a href="#"><FaTwitter className="inline mr-6 text-2xl bloodClick"  /></a>
                     <a href="#"><FaChartBar className="inline mr-6 text-2xl bloodClick" /></a>
                  </div>
                  <button className="bloodClick">Connect Wallet</button>
               </div>
            </div>
         </div>
      </div>
   ) : (null)
}

export default Header;
