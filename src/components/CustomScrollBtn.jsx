import React, { useEffect } from "react";
import { useState } from "react";

const CustomScrollBtn = ({ children }) => {
  console.log(children, 'children')
  const [page, setPage] = useState();
  useEffect(()=>{
    
  },[])
  return <a href="#about-section"><div className="scroll_outline">
    <div className="scroll_inline"></div>
  </div></a>;
};

export default CustomScrollBtn;
