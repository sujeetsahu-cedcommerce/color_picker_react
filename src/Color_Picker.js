import React, { useState } from 'react'

function Color_Picker() {
    const [color_value,set_color_value] = useState('');

    const get_Color = (event) => {
        console.log(event.target.value);
        set_color_value(event.target.value);
        console.log(color_value);
    }

    const get_box_value = (event) => {
        
        if(event.target.value.length === 7){
            set_color_value(event.target.value);
        }
    }

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:color_value}}>
         <h1>set Color </h1>
         enter hexa decimal color code : <input type="text" onKeyUp={get_box_value} /><br></br>
         <input type="color" onChange={get_Color} value={color_value}/>
    </div>

  )
}

export default Color_Picker