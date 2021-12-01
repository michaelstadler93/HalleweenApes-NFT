import React from 'react';

function ProgressBar(Props) {

    return (
        
            <div className="relative mb-8">
                <div className={"progressbar1 absolute  top-0 left-0 "+Props.width}></div>
                <div className="progressbar2"></div>
            </div>
            
    ) 
        
}

export default ProgressBar;
