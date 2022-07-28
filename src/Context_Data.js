import React, { useState } from 'react'
import { createContext } from 'react';
export const my_context = createContext();
function Context_Data(props) {
    const [my_color,set_my_color] = useState([]);
  return (
      <my_context.Provider value={[my_color,set_my_color]}>
          {props.children}
      </my_context.Provider>
  )
}

export default Context_Data