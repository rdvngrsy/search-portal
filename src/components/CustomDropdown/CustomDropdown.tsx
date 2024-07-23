import React, { useState } from "react";

interface CustomDropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="w-[200px] bg-white flex items-center border border-[#414141] rounded-lg h-[30px] font-roboto text-[18px] leading-[21px] text-[#484848] font-medium cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          outline: "none",
          paddingLeft: "40px",
          paddingRight: "10px",
          backgroundPositionX: "3%",
          backgroundImage: "url(./assets/sort-icon.png)",
          backgroundRepeat: "no-repeat",
          appearance: "none",
        }}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className="absolute bg-white border border-[#8F8F8F] rounded-lg mt-[15.3px] w-full z-10 ">
          {options.map((option, index) => (
            <div
              key={index}
              className="my-2 mx-[8px] px-[9px] py-1.5 cursor-pointer hover:px-[9px] hover:font-bold hover:py-1.5 hover:rounded-lg hover:bg-[#B3B3B3] hover:text-white font-roboto text-[14px] leading-[16.4px] text-black font-medium"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
