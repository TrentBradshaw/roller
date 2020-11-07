import React from "react";
import ProfileDropDownButton from "./ProfileDropDownButton";
import ProfileDropDownCard from "./ProfileDropDownCard";
const sampleData = [
    'Profile',
    'Settings',
    'Log Out',
    'Night Mode',
]

//new Array(7).fill("item name");
const ProfileButtonWithDropDownCmp = () => {
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
        flex: '1 0 auto',
        flex: '1',
        position: "relative",
        //margin: "16px",
        width: "auto",
        display: "inline-block"
      }}
    >
      <ProfileDropDownButton onClick={() => setOpen(open => !open)} />
      {open && <ProfileDropDownCard data={sampleData} setOpen={setOpen} />}
    </div>
  );
};

export default ProfileButtonWithDropDownCmp;
