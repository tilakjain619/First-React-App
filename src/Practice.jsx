import React, { useState } from 'react'

const Practice = () => {

    const [isToggled, setIsToggled] = useState(false);
    function handleToggle(){
        setIsToggled(!isToggled)
    }
    return (
        <div className='min-h-[67.7vh]'>
            Checkbox here bro: 
            <input type="checkbox" onChange={handleToggle}/>
            <p>{isToggled ?"On" : "Off"}</p>
        </div>
    )
}

export default Practice
