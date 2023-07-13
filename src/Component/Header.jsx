import React from "react";

function Header(props) {
  function getYear(year) {
    return year != 0 ? `ประจำปี ค.ศ. ${year}` : "" ;
  }
  return (
    <div className="p-5">
      <div className="bg-yellow-400 h-40 flex justify-center items-center text-black text-3xl">
        Nobel Prize <br></br>
         {getYear(props.year)}
      </div>
    </div>
  );
}

export default Header;
