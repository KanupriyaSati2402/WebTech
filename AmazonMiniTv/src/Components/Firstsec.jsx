import React from "react";
import firstsec from "../Assets/firstsec.jpg";
import secimg2 from "../Assets/secimg2.jpg";
import secimg3 from "../Assets/secimg3.jpg";
import secimg4 from "../Assets/secimg4.jpg";
import secimg5 from "../Assets/secimg5.jpg";
import secimg6 from "../Assets/secimg6.jpg";
import secimg7 from "../Assets/secimg7.jpg";
import secimg8 from "../Assets/secimg8.jpg";
import secimg9 from "../Assets/secimg9.jpg";

const Firstsec = () => {
  let data = [
    firstsec,
    secimg2,
    secimg3,
    secimg4,
    secimg5,
    secimg6,
    secimg7,
    secimg8.secimg9,
  ];
  return (
    <section className="Firstsec">
      {data.map((ele, i) => {
        return (
          <div className="cards" key={i}>
            <img className="image" src={ele} />
          </div>
        );
      })}
    </section>
  );
};

export default Firstsec;
