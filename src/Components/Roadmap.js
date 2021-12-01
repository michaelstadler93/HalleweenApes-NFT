import React ,{useRef,useEffect}from 'react';
import ProgressBar from './ProgressBar';
function Roadmap(Props) {
    // const executeScroll = () => scrollToRef(myRef)
    const title="Halloween Apes Public Minting % Roadmap";
    const sentence1=[
        "The initial blue-chip inhabitants of the DAO will begin to be carefully seletecd to thaek their palce in the community DAO."
    ];
    const sentence2=[
        "At this stage the DAO will already have a selection of its first carefully selected new inhabitants all settled in.",
        "A further $10.000 USD donation will be made to a charity of the community's choice through a community vote.",
        "The community members will also be voting on the mext selections of blue-chip inhabitants to move into the DAO."
    ];
    const sentence3=[
        "At this stage the community will be voting on the initial Sandbox Land purchase to move into the DAO.",
        "The community members will also vote on what environmental initiative/charity should benefit from a further $15,000 USD donation.",
        "As more inhabitants move into the community DAO the members will continure to select each one through voting."
    ];
    const sentence4=[
        "A gurther $33,000 will be allocated for the members to vote on which charity and or worthwhile initiative deserves this donation.",
        "The community members will also vote on the stages of the next road map including but not limited to how to develop the Sandbox Land and which community members will be appointed to certain roles within the DAO community.",

    ]
    const sentence5=[
        "The members will propose and vote on the location of the 5000 trees to be planted as part of the community's initiatives to give back to nature."
    ]
     
    return (
        <div  className="text-center bg-back text-white p-28 text-lg btn "  >
            <img src="images/landing/spider.png"  className="w-28 inline"/>
            <span className="text-4xl redText">{title}</span>
            <img src="images/landing/spider.png"  className="w-28 inline"/>
            <p className="text-3xl  countText mt-8">33%</p>
            <ProgressBar width={"w-1/3"} />
            {
                sentence1.map(item=><p>{item}</p>)
            }

            <p className="text-3xl  countText mt-8">55%</p>
            <ProgressBar width={"w-1/2"} />
            {
                sentence2.map(item=><p>{item}</p>)
            }

            <p className="text-3xl  countText mt-8">88%</p>
            <ProgressBar width={"w-4/5"} />
            {
                sentence3.map(item=><p>{item}</p>)
            }

            <p className="text-3xl  countText mt-8">100%</p>
            <ProgressBar width={"w-full"} />
            {
                sentence4.map(item=><p>{item}</p>)
            }

            {
                sentence5.map(item=><p className="mt-20">{item}</p>)
            }
        </div>
    ) 
        
}

export default Roadmap;
