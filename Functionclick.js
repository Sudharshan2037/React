import React from 'react'

function Functionclick() {
    function call()
    {
        console.log('button is clicked')
    }
    return (
        <div>
            <button onClick={()=>call()}>func</button>
            
        </div>
    )
}

export default Functionclick
