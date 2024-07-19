import React from "react";
import SearchPart from "../../components/SearchPart/SearchPart";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="">
      <div className="relative h-[110px] w-full">
        <button className="absolute rounded-xl w-[197.16px] h-[46px] bg-[#204080] top-16 right-[62.84px] font-roboto text-[18px] leading-[21.09px] text-white font-bold">
          Add new record
        </button>
      </div>

      <div className="mt-[73px] h-full w-full flex items-center flex-col">
        <img src="./assets/Tesodev Logo.png" alt="Tesodev Logo" />
        <p className="ms-[270px] font-roboto text-[14px] leading-[16.41px] text-[#484848] font-bold mt-[11.71px]">
          Search app
        </p>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div className="h-[54px] w-[740px] py-3 px-6">
          <h2 className="font-inter text-[32px] leading-[36px] text-[#090A0A] font-bold">
            Find in records
          </h2>
        </div>
        <SearchPart />
      </div>
    </div>
  );
};

export default Homepage;
