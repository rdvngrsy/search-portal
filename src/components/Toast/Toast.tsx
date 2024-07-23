import React, { useState } from "react";

type Props = {
  message: string | null;
  type: string;
};

const Toast = ({ type, message }: Props) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <div
          className={`fixed bottom-6 right-[17px] w-[375px] min-h-[123px] rounded-lg  text-white text-center ${
            type === "error" ? "bg-[#C4C4C4]" : "bg-[#C4C4C4]"
          }`}
        >
          <div
            onClick={() => setShow(false)}
            className="flex justify-end mt-[9px] me-[12px] cursor-pointer"
          >
            <img src="./assets/x-circle.png" alt="" />
          </div>

          <div className="flex -mt-3">
            <div className="text-start ms-[18px] mb-4">
              <div className="font-inter  text-[14px] leading-[36px] text-[#090A0A] font-bold pb-1">
                {type === "error"
                  ? "Error while adding link element"
                  : "Added link element"}
              </div>
              <p className="font-inter text-[13px] leading-[24px] text-[#090A0A] font-normal mb-[10px]">
                {message?.split(". ").map((sentence, index, array) =>
                  index < array.length - 1 ? (
                    <div key={index}>
                      {sentence}.{index < array.length - 1 ? <br /> : ""}
                    </div>
                  ) : (
                    sentence
                  )
                )}
              </p>
            </div>
            <div className="ms-[45px] mt-4">
              <button
                className={`flex justify-center items-center py-2 px-4  rounded-[48px] w-[70px] h-[32px]  font-inter text-[16px] leading-[16px] text-white font-medium ${
                  type === "error" ? "bg-[#FF4E78]" : "bg-green-600 w-[80px]"
                }`}
              >
                {type === "error" ? "Error" : "Success"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;
