import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TagName = ({ allCourseTags }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: true,
  };

  return (
    <div className="px-12 gap-3 py-4 bg-gradient-to-b  from-emerald-300">
      <Slider {...settings}>
        {allCourseTags.map((tag, index) => (
          <Link
            to={"/course-list/" + tag.name}
            key={index}
            className="bg-white text-slate-950 rounded-md px-3 py-2 text-sm text-center hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {tag.name}
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default TagName;
