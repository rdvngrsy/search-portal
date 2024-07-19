import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import data from "../../mock/data.json";
type Props = {};

const SearchPart = (props: Props) => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<(string | number)[][]>([]);
  const [showAll, setShowAll] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocus(false);
  });

  useEffect(() => {
    if (query) {
      const filteredResults = data.data.filter(item =>
        item.toString().toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const displayedResults = showAll ? results : results.slice(0, 3);


  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[54px] w-[740px] py-3 px-6">
        <h2 className="font-inter text-[32px] leading-[36px] text-[#090A0A] font-bold">
          Find in records
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <div
          ref={ref}
          className="ms-[120px] mt-[6.14px] h-[53px] w-[646px] min-h-8 flex items-center "
        >
          <label className="h-[48px] bg-white w-full rounded-lg group relative border border-[#204080] focus-within:bg-white focus-within:border-[#204080] focus-within:border-2">
            <div className="w-[48px] h-full flex justify-center items-center absolute top-0 left-0 pointer-events-none">
              <svg
                height={24}
                width={24}
                viewBox="0 0 24 24"
                fill="none"
                className="min-w-[32px]"
              >
                <path
                  d="M21.5 21.8569L17.15 17.5069M19.5 11.8569C19.5 16.2752 15.9183 19.8569 11.5 19.8569C7.08172 19.8569 3.5 16.2752 3.5 11.8569C3.5 7.43862 7.08172 3.8569 11.5 3.8569C15.9183 3.8569 19.5 7.43862 19.5 11.8569Z"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full h-full bg-transparent rounded-full outline-none pl-[48px] text-[16px] placeholder-opacity-50 placeholder:text-[#71767b] font-inter leading-4 font-normal"
              placeholder="Ara"
              onFocus={() => setFocus(true)}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                query && setShowAll(false)
              }}
            />
            {query && focus && (
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setShowAll(false)}
                }

                className="right-3 w-[22px] h-[22px] flex justify-center items-center rounded-full bg-[#1d9bf0] text-black min-w-[22px] absolute top-1/2 -translate-y-1/2"
              >
                <svg viewBox="0 0 15 15" width={10} height={10}>
                  <path
                    fill="currentColor"
                    d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
                  ></path>
                </svg>
              </button>
            )}
            {focus && query && (
              <div className="absolute top-full w-[717.84px] -left-[34.5px] translate-y-[16.71px] border border-black max-h-[calc(-53px + 80vh)] rounded-3xl text-center min-h-[100px] bg-white">
                {displayedResults.length > 0 ? (
                  <ul>
                    {displayedResults.map((result, index) => (
                      <li key={index} className="p-2">
                        {result[1]}
                        <li>
                          <p>{`${result[6]}, ${result[7]}`}</p>
                        </li>
                      </li>
                      
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#71767b] pt-5 p-3 leading-5">No results found</p>
                )}
                {results.length > 3 && !showAll && (
                  <button
                    className="text-blue-500 p-2"
                    onClick={() => setShowAll(true)}
                  >
                    Show More
                  </button>
                )}
              </div>
            )}
          </label>
        </div>

        <button className="ms-[11.4px] mt-[6.14px] rounded-xl w-[138px] h-[46px] bg-[#204080] font-roboto text-[18px] leading-[21.09px] text-white font-bold">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPart;