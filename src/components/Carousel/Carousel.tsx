import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  timestamp: string;
  author: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Everyone Loves",
    description: "1h ago - by Troy Corlson",
    imageUrl: "./assets/bus-terminal.png",
    timestamp: "1h ago",
    author: "Troy Corlson",
  },
  {
    id: 2,
    title: "A Plan to ",
    description: "1h ago - by Troy Corlson",
    imageUrl: "./assets/bus-terminal.png",
    timestamp: "1h ago",
    author: "Troy Corlson",
  },
  {
    id: 3,
    title: " Terminal Everyone Loves to Hate",
    description: "1h ago - by Troy Corlson",
    imageUrl: "./assets/bus-terminal.png",
    timestamp: "1h ago",
    author: "Troy Corlson",
  },
  {
    id: 4,
    title: "Terminal ",
    description: "1h ago - by Troy Corlson",
    imageUrl: "./assets/bus-terminal.png",
    timestamp: "1h ago",
    author: "Troy Corlson",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getItemsToDisplay = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(newsItems[(currentIndex + i) % newsItems.length]);
    }
    return items;
  };

  return (
    <div className="relative w-full flex  justify-center items-center ">
      <div className="flex flex-col">
        <p className=" font-inter text-[32px] leading-[36px] text-[#090A0A] font-bold mb-[49px] ms-[47px]">
          Top News
        </p>
        <div className="flex">
          <button onClick={handlePrev} className="me-4">
            <img src="./assets/left-icon.png" alt="" />
          </button>
          <div className="flex overflow-hidden space-x-6">
            {getItemsToDisplay().map((item, index) => (
              <div
                key={item.id}
                className={`transition-transform duration-300 ${
                  index === 0 ? "ml-0" : ""
                }`}
                style={{ flex: "0 0 33.33%" }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-[327px] h-[195px]"
                />
                <div>
                  <h3 className="font-inter text-[16px] leading-[24px] text-[#090A0A] font-bold mt-3">{item.title}</h3>
                  <p className="font-inter text-[12px] leading-[16px] text-[#6C7072] font-normal mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="rotate-180 ms-4">
            <img src="./assets/left-icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
