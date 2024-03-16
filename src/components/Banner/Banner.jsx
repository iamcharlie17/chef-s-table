import React, { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-hero-pattern rounded-xl bg-blend-darken">
        <div className="hero-content text-center">
          <div className=" space-y-8 p-16">
            <h1 className="text-5xl p-16 font-bold text-white ">{banner.title}</h1>
            <p className=" text-white">{banner.description}</p>
            <div className="">
              <button className="btn bg-green-400 rounded-full mr-4 border-none">
                Explore NOW
              </button>
              <button className="btn rounded-full text-white border-white bg-transparent">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
