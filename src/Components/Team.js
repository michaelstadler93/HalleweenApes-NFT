import React from 'react';


function Team(Props) {
    const title="The Team"
    return Props.teams ?  (
        <div className="text-center bg-back py-12"> 
            <img src="images/landing/spider.png"  className="w-28 inline"/>
            <span className="text-4xl redText">{title}</span>
            <img src="images/landing/spider.png"  className="w-28 inline"/>
            <div className="flex flex-wrap justify-around mt-20">
            {
                Props.teams.map(item=>(
                    <div className="text-center w-1/5 ">
                        <p className="text-3xl countText m-8">{item.name}</p>
                        <p className="text-xl text-white m-8">{item.position}</p>
                        <img src={item.avatar} className="w-full borderImg"/>

                    </div>
                ))  
            }
            </div>
        </div>
    ) : (null)
        
}

export default Team;
