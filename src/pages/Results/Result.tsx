import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import data from "../../mock/data.json";
import { Link, NavLink } from "react-router-dom";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../../store/slices/searchDataSlice";
import Pagination from "../../components/Pagination/Pagination";


const Result = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<(string | number)[][]>([]);
  const [sortOption, setSortOption] = useState("Name ascending");
  const [currentPage, setCurrentPage] = useState(1);
  
  const options = ['Name ascending', 'Name descending', 'Year ascending', 'Year descending'];
  const itemsPerPage = 5;

  const dispatch = useDispatch();
  const { searchData } = useSelector((state: any) => state.searchData);

  const ref = useRef<HTMLDivElement>(null);
  
  useClickAway(ref, () => {
    setFocus(false);
  });

  useEffect(() => {
    searchData && setQuery(searchData);
  }, [searchData]);

  useEffect(() => {
    if (query) {
      const filteredResults = data.data.filter((item) =>
        item.toString().toLowerCase().includes(query.toLowerCase())
      );

      const sortedResults = sortResults(filteredResults, sortOption);
      setResults(sortedResults);
    } else {
      setResults([]);
    }
  }, [query, sortOption]);

  const sortResults = (results: any[], option: string): any[] => {
    const sortedResults = [...results];
    switch (option) {
      case 'Name ascending':
        return sortedResults.sort((a: any, b: any) => a[1].localeCompare(b[1]));
      case 'Name descending':
        return sortedResults.sort((a: any, b: any) => b[1].localeCompare(a[1]));
      case 'Year ascending':
        return sortedResults.sort(
          (a: any, b: any) =>
            new Date(a[8]).getTime() - new Date(b[8]).getTime()
        );
      case 'Year descending':
        return sortedResults.sort(
          (a: any, b: any) =>
            new Date(b[8]).getTime() - new Date(a[8]).getTime()
        );
      default:
        return sortedResults;
    }
  };

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
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
              <label className="h-[48px] bg-white w-full rounded-lg group relative border-2 border-[#204080] focus-within:bg-white">
                <input
                  type="text"
                  className="w-full h-full bg-transparent rounded-full outline-none pl-[20px] text-[16px] placeholder-opacity-50 placeholder:text-[#71767b] font-inter leading-4 font-normal"
                  placeholder="Ara"
                  onFocus={() => setFocus(true)}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCurrentPage(1);
                    dispatch(setSearchData(e.target.value));
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
                    {paginatedResults.map((result, index) => (
                      <div key={index}>
                        <div className="w-[726px] h-[79px] pb-5 pt-[19px] pe-[13px] ps-[27px] mt-[13.3px] hover:bg-[#4F75C236] hover:rounded-lg cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                className="w-[24px] h-[24px] me-2"
                                src="./assets/Avatar.png"
                                alt=""
                              />
                              <li className="text-start">
                                <p className="font-inter text-[16px] leading-[20px] text-[#090A0A] font-normal">
                                  {result[1]}
                                </p>

                                <p className="font-inter text-[14px] leading-[16px] text-[#72777A] font-normal">{`${result[6]}, ${result[7]}`}</p>
                              </li>
                            </div>
                            <div className="text-center">
                              <p className="font-inter text-[16px] leading-[20px] text-[#484848] font-normal">
                                {result[2]}
                              </p>
                              <p className="font-inter text-[16px] leading-[16px] text-[#484848] font-medium mt-[4.5px]">
                                {result[8]}
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr className="border-[#7E7E7E] mx-3 mt-[11px]" />
                      </div>
                    ))}
                  </ul>
                  {results.length > 1 && (
                    <div className="absolute -top-10 -right-[220px]">
                    <CustomDropdown
                      options={options}
                      selectedOption={sortOption}
                      onOptionSelect={(option) => {
                        setSortOption(option);
                        setCurrentPage(1);
                      }}
                    />
                  </div>
                  )}
                  {results.length > itemsPerPage && (
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </div>
              </label>
            </div>

            <NavLink to={"/result"} className="flex justify-center items-center ms-[11.4px] mt-[32px] rounded-xl w-[138px] h-[46px] bg-[#204080] font-roboto text-[18px] leading-[21.09px] text-white font-bold duration-200 ease-in hover:bg-[#4F75C2]">
          Search
        </NavLink>
          </div>
        </div>
        <div className="h-[90px]  w-[285px]">
          <NavLink to={"/add-link-page"} className="flex justify-center items-center absolute rounded-xl w-[216px] h-[46px] bg-[#204080] right-[69px] top-9 font-roboto text-[18px] leading-[21.09px] text-white font-bold duration-200 ease-in hover:bg-[#4F75C2]">
            Add new record
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Result;
