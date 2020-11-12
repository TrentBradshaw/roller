import React from "react";
import Button from "./DockDropDownButton";
import DropDownCard from "./DockDropDownCard";
const sampleData = [
    'test'
]

//new Array(7).fill("item name");
const DockButtonWithDropDownCmp = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        flex: '1',
        flex: '1 0 auto',
        position: "relative",
        //margin: "16px",
        width: "auto",
        display: "inline-block"
      }}
    >
      <Button onClick={() =>  setOpen(open => !open)} />
      {open && <DropDownCard data={sampleData} setOpen={setOpen} />}
    </div>
  );
};

export default DockButtonWithDropDownCmp;