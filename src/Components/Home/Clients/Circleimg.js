import React from "react";

function Circleimg({ profile }) {
  return (
    <div>
      <img
        className="w-[110px] h-[110px] rounded-[55px]"
        src={"http://localhost:8080/" + profile}
        alt="logo"
      />
    </div>
  );
}

export default Circleimg;
