import React from 'react';

function Intro(Props) {

    const sentence1="What happens when you put a bunch of smart and well-connected Freaks who go Ape in one place?"
    const sentence2="5000 hand drawn and algorithmically generated Halloween Apes that live on the Ethereum Blockchain are finally coming out to play ad make this year count, so don't freak out!";
    const sentence3="It's the start of a new population of ape freaks who are empowered by the wisely selected variety of blue-chip treasures that come and join us in the DAO. These could include but are not limited to blue-chips like Kaiju Kings,Creature World. The Doge Pound and others like land in the Sandbox. The community will decide how the land is developed."
    const sentence4="Each Ape has a unuque, messed up DNA and grants you exclusive membership to the DAO community including certain voting rights. Your Ape also represents a FREE mint pass (excluding gas of course) to future Ape projects as decided by the community!"
    const sentence5="Over 20% of the minting funds will go directly to the DAO.";
    const sentence6="Over 50% of the secondary market royalties will be used in a variety of ways including but not limited to charitable donations, sweeping the floor, building the community, future initiatives and projects as voted upon by the community members.";
    const sentence7='We also strongly agree with the belief that "every child and adolescent with cancer - regardless of financial or social class, race or native origin - deserves access to the best possible treatment and medical care. "So, a further 20% of the secondary market royalties will go directly to World Wide Cancer.org for the first 3 months.';
    const sentence8="After that item the community members will decide which charity will benefit from this exclusive community.";
    const sentence9="For every Halloween Ape minted there will be One Tree planted. The location of the new born trees will be proposed and voted on by the community. Many peopel believe that this is one of the simplest and most effective ways to help fight climate change. Once 100% mint is completed 5000 Trees will be planted."
    const avatar=[
        "images/landing/Bat Wings Ape.png",
        "images/landing/Big Spider Ape.png",
        "images/landing/Pumpkin Ape.png",
        "images/landing/Transparent Ape.png",
        "images/landing/Website Ape 1.png",
        "images/landing/Website red 1.png",
    ]
    return (
        <div className=" mb-52">
            <div className="items-center bg-back text-white text-lg text-center p-28 ">
                <p >{sentence1}</p>
                <p>{sentence2}</p>
                <p>{sentence3}</p>
                <p>{sentence4}</p>
                <img src="images/landing/movie.gif" className="w-1/4 inline m-28"/>
                <p>{sentence5}</p>
                <p>{sentence6}</p>
                <p>{sentence7}</p>
                <p>{sentence8}</p>
                <p>{sentence9}</p>
            </div>
            <div className="flex flex-wrap fixed top-1/3 characters">
            {
                avatar.map(item=><img src= {item} className="w-1/6"/>)    
            }

            </div>
        </div>
    ) 
        
}

export default Intro;
