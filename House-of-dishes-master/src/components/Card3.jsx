import { useState, useEffect } from "react";
import Card2 from "./Card2";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { dishesSeeMorePath } from "../Data/SeeMorePathUrl";
const Card3 = ({ title, famousDish,  }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    pauseOnHover: true,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        setSlidesToShow(4);
      } else if (screenWidth >= 992) {
        setSlidesToShow(3);
      } else if (screenWidth >= 768) {
        setSlidesToShow(2);
      } else if (screenWidth >= 576) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <div className="mx-12">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex font-bold text-xl sm:text-2xl md:text-4xl items-baseline mt-12 ">{title} </div>
        {dishesSeeMorePath.map((path, index) => (
          title === path.title && (
            <Link key={index} to={path.pathUrl}>
              <button className="relative ml-12 font-bold px-2 mt-12 h-7 ">
                <div className="flex flex-row items-center justify-center "onClick={() => window.scrollTo(0, 0)}>
                  <p className="mb-[0.25rem] text-lg sm:text-xl md:text-2xl">See More</p>
                  <FaAngleRight />
                </div>
              </button>
            </Link>
          )
        ))}
      </div>

      <div className="">
        <Slider {...settings}>
          {famousDish.map((dish, index) => (
             <div key={index}>
              <Card2 title={dish.dishName} imageUrl={dish.dishImage} time={60} rating={4.5} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card3;
