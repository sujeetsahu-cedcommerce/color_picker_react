import React, { useState } from "react";

function Color_Picker() {
  const [color_value, set_color_value] = useState("#");
  const [R,setR] = useState('');
  const [G,setG] = useState('');
  const [B,setB] = useState('');
  const get_R = (event) => {
    if(/^[0-9a-f]+$/.test(event.target.value) || event.target.value===''){
      setR(event.target.value.toString('hex'));
    }
  }

  const get_G = (event) => {
    if(/^[0-9a-f]+$/.test(event.target.value) || event.target.value==='') {
      setG(event.target.value.toString('hex'));
    }
  }

  const get_B = (event) => {
    if(/^[0-9a-f]+$/.test(event.target.value) || event.target.value===''){
      setB(event.target.value.toString('hex'));
    }
  }

  const get_RGB_Color = (event) => {
    set_color_value(`#${R}${G}${B}`)
  };
  console.log(color_value);

  const get_box_value = (event) => {
     set_color_value(event.target.value);
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw", backgroundColor: color_value }}>
      <input type="color" onChange={get_box_value} value={color_value} />
      <input type="text" placeholder="R" value={R} onChange={get_R} maxLength={2}/>
      <input type="text" placeholder="g" value={G} onChange={get_G} maxLength={2}/>
      <input type="text" placeholder="b" value={B} onChange={get_B} maxLength={2}/>
      <button onClick={get_RGB_Color}>Change Color</button>
    </div>
  );
}

export default Color_Picker;
