import { Blocks } from "../../data/HomePageData";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlockContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="flex justify-between mb-4 w-[75%]">
        <p className="font-bold text-lg">Blocks</p>
        {/* <p className="flex items-center cursor-pointer">
          More <IoIosArrowForward />
        </p> */}
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {Blocks.map((block, idx) => (
            <div key={idx} className="w-full shadow-lg rounded-2xl py-4 px-8 mx-0 md:mx-4 my-4 bg-white over">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">#{block?.HashValue}</p>
                <p className="text-light-gray border-light-gray border-[1px] py-1 px-4 rounded-md">{"Block Producer..  >"}</p>
              </div>
              <div className="flex flex-row justify-between pb-6">
                <p className="text-light-gray text-base">{block?.timing} secs ago</p>
                <p className="font-semibold">{block?.Txns} Txns</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-light-gray">Reward</p>
                  <p className="font-semibold">{block?.Reward} TRX</p>
                </div>
                <p className="font-semibold">🔥 {block?.TRX} TRX</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlockContainer;
