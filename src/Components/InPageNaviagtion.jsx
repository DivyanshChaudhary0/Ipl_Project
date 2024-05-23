import React, { useState } from "react";
import "./Inpage.css"

const InPageNaviagtion = ({ teams, children }) => {
  console.log(children);

  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="inPageContainer text-white">
        <div className="dets">
          {teams.map(function (value, i) {
            return <button onClick={() => setIndex(i)} className={"btn border border-slate-500 border-solid" + ( index===i ? "text-white" : "text-gray-500")} >
              {value}</button>;
          })}
          {children[index]}
        </div>  
      </div>
    </>
  );
};

export default InPageNaviagtion;
