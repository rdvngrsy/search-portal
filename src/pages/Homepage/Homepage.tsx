import SearchPart from "../../components/SearchPart/SearchPart";
import { NavLink } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";


const Homepage = () => {
  return (
    <div className="">
      <div className="relative h-[110px] w-full">
        <NavLink
          to={"/add-link-page"}
          className="flex justify-center items-center absolute rounded-xl w-[197.16px] h-[46px]  bg-[#204080] top-16 right-[62.84px] font-roboto text-[18px] leading-[21.09px] text-white font-bold duration-200 ease-in hover:bg-[#4F75C2]"
        >
          Add new record
        </NavLink>
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

      <div className="mt-[345px] w-full pb-10 ">
        <Carousel />
      </div>
    </div>
  );
};

export default Homepage;
