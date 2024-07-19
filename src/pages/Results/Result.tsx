import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import data from "../../mock/data.json";
import { Link, NavLink } from "react-router-dom";
type Props = {};

const Result = (props: Props) => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<(string | number)[][]>([]);

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocus(false);
  });

  useEffect(() => {
    if (query) {
      const filteredResults = data.data.filter((item) =>
        item.toString().toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img
          className="w-[149px] h-[63px] ms-[37px] mt-[27px]"
          src="./assets/Tesodev Logo.png"
          alt="Tesodev Logo"
        />
      </Link>

      <div className="flex justify-center flex-col items-start">
        <div className="flex justify-center items-center grow">
          <div
            ref={ref}
            className=" mt-[35px] h-[46px] w-[509px] min-h-8 flex items-center "
          >
            <label className="h-[48px] bg-white w-full rounded-lg group relative border border-[#204080] focus-within:bg-white focus-within:border-[#204080] focus-within:border-2">
              <input
                type="text"
                className="w-full h-full bg-transparent rounded-full outline-none pl-[20px] text-[16px] placeholder-opacity-50 placeholder:text-[#71767b] font-inter leading-4 font-normal"
                placeholder="Ara"
                onFocus={() => setFocus(true)}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              {query && focus && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                  }}
                  className="right-3 w-[22px] h-[22px] flex justify-center items-center rounded-full  text-black min-w-[22px] absolute top-1/2 -translate-y-1/2"
                >
                  <svg viewBox="0 0 15 15" width={10} height={10}>
                    <path
                      fill="currentColor"
                      d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
                    ></path>
                  </svg>
                </button>
              )}

              <div className="absolute w-[726px] h-[506px] mt-[81px] -left-12">
                <ul>
                  {results.map((result, index) => (
                    <div className="flex items-center ms-[34.5px] my-6 pb-[30px]  hover:bg-[#4F75C2]">
                      <img
                        className="w-[24px] h-[24px] me-2"
                        src="./assets/Avatar.png"
                        alt=""
                      />
                      <li key={index} className=" text-start">
                        <p className="font-inter text-[16px] leading-[20px] text-[#090A0A] font-normal">
                          {result[1]}
                        </p>

                        <p className="font-inter text-[14px] leading-[16px] text-[#72777A] font-normal">{`${result[6]}, ${result[7]}`}</p>
                      </li>
                      
                    </div>
                  ))}
                </ul>
              </div>
            </label>
          </div>

          <button className="ms-[11.4px] mt-[32px] rounded-xl w-[138px] h-[46px] bg-[#204080] font-roboto text-[18px] leading-[21.09px] text-white font-bold">
            Search
          </button>
        </div>
      </div>
      <div className="h-[90px]  w-[285px]">
        <button className="absolute rounded-xl w-[216px] h-[46px] bg-[#204080] right-[69px] top-9 font-roboto text-[18px] leading-[21.09px] text-white font-bold">
          Add new record
        </button>
      </div>
    </div>
  );
};

export default Result;
