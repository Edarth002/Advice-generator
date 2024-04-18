import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import diceImage from "../../public/images/icon-dice.svg";
import desktopImg from "../../public/images/pattern-divider-desktop.svg";

export const Component = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://api.adviceslip.com/advice");
  //       const jsonData = await response.json();
  //       setData(jsonData.slip);
  //     } catch (error) {
  //       console.error("error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        setData(jsonData.slip);
      } catch (error) {
        console.error("The reason for this error is:", error);
      }
    };
    fetchData();
  }, []);

  const handleAPI = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const jsonData = await response.json();
      setData(jsonData.slip);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  return (
    <div>
      {data ? (
        <div className="shadow-GrayishBlue relative shadow-sm bg-DarkGrayishBlue rounded-lg md:w-[30%] w-[90%] pb-28 mx-auto flex flex-col justify-center align-middle p-10 my-40">
          <p className="text-NeonGreen text-center">ADVICE #{data.id}</p>
          <p className="text-2xl p-5 mx-auto flex tracking-wide text-center">
            {data.advice}
          </p>
          <div className="">
            <Image
              src={desktopImg}
              alt="pattern-divider-desktop image"
              className="absolute bottom-14 transform_50 w-full left-1/2 px-5"
              priority
            />
          </div>

          <button className="bg-NeonGreen rounded-full hover:shadow-NeonGreen shadow-lg cursor-pointer p-2 w-14 h-14 absolute transform_50 -bottom-14 left-1/2">
            <Image
              src={diceImage}
              alt="DiceImage"
              className="mx-auto"
              onClick={handleAPI}
              priority
            />
          </button>
        </div>
      ) : (
        <div className="border-NeonGreen rounded-full animate-spin w-40 h-40 border border-r-0 p-10 mx-auto flex mt-96"></div>
      )}
    </div>
  );
};

export default Component;
