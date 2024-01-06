import { useState } from "react";
import { useEffect } from "react";

const CustomScrollBtn = ({ type }) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    switch (type) {
      case "down":
        setPage("#skill-section")
        break;

      case "up":
        setPage("/new-portfolio")
        break;
      default:
        break;
    }
  }, [])
  
  return <a href={page} className={"scroll_container"}>
    <div className={type === "down" ? "scroll_outline":"scroll_up_outline"}>
      <div className={type === "down" ? "scroll_inline":"scroll_up_inline"}></div>
      <span className={type === "down" ? "scroll_typo":"scroll_up_typo"}>{type === "down" ? "스킬섹션으로":"첫화면으로"}<br />바로가기</span>
    </div>
  </a>;
};

export default CustomScrollBtn;
