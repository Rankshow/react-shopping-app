import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";

const GallerySwipe = () => {
  return (
    <>
      <h1 className="text-center pb-3 text-primary">Our Delicious Recipe</h1>
      <div className="container pb-3">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        effect
        loop
        autoplay={{ delay: 1000}}
        navigation
        speed={900}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="mySwiper">
          <img style={{width: '100%', height: '100%', objectFit: 'cover',borderRadius: "50px 30px 30px"}}
            src="https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI="
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper" >
          <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: "50px 30px 30px"}}
            src="https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2020/10/07100847/Roasted-chicken-tiny.jpg"
            alt="Roasted chicken"
          />
        </SwiperSlide>
        <SwiperSlide className="myswiper w-100">
          <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: "50px 30px 30px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6ebUw50FWUTNgFyvNNyYFG-OEyXceTCUJknbFXKt9c6FGyrvaSWff25xsY-4sgJC5w4&usqp=CAU"
            alt="Beef chicken"
          />
        </SwiperSlide>
        <SwiperSlide  className="myswiper">
          <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: "50px 30px 30px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsqF3lgN5dVQBzvTlzMQcwlkWc--Ft4sq8w&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide  className="myswiper">
          <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: "50px 30px 20px"}}
            src="https://media.istockphoto.com/id/674851256/photo/grilled-chicken-legs-with-chips-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=pzNdTegKh7FjV8TiA-mQh1AKdMU2Yf_4hUZ_8jviv5w="
             alt="chicken chips"
          />
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  );
};
export default GallerySwipe;
