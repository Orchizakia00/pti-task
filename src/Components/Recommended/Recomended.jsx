import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';

const Recommended = () => {
    const [items, setItems] = useState([]);

    const url = 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const items = data.Items;
                const recommendedItems = items.filter(item => item.IsRecommended === true);
                setItems(recommendedItems);
            })
    }, [url])

    return (
        <div className="pl-3 my-10">
            <div className="flex justify-between mb-4">
                <p className="text-3xl">Recommended</p>
                <div className="flex items-center">
                    <button className="text-orange-500  hidden sm:hidden md:flex">AddMore</button>
                    <div className="flex">
                        <button className=" hidden sm:hidden md:flex"><FaAngleLeft color="gray" /></button>
                        <button><FaAngleRight /></button>
                    </div>
                </div>
            </div>
            <div className="flex">


                <Swiper
                    slidesPerView={3}
                    spaceBetween={12}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {
                        items.map(item => <SwiperSlide key={item.Id}>
                            <div className="">
                                <img src={item.ImageUrl} className="w-[150px] h-[200px] lg:w-[250px] lg:h-[300px] rounded-xl" alt="" />
                                <p className="text-center mb-3">{item.Name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>


            </div>
        </div>
    );
};

export default Recommended;