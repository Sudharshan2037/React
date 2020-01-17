import React from 'react'

function Namelist() {
    const names=["sud","2037"]
    return (
        <div>
            {
names.map((n,index)=><button>{index}-{n}</button>)
            }
        </div>
    )
}

export default Namelist
