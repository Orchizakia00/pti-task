import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';

const Popular = () => {
    const [items, setItems] = useState([]);

    const url = 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const items = data.Items;
                const popularItems = items.filter(item => item.IsPopular === true);
                setItems(popularItems);
            })
    }, [url])

    return (
        <div>
            <div className="flex justify-between mb-4">
                <p className="text-3xl">Popular</p>
                <div className="flex items-center">
                    <button className="text-orange-500">AddMore</button>
                    <div className="flex">
                        <button><FaAngleLeft color="gray" /></button>
                        <button><FaAngleRight /></button>
                    </div>
                </div>
            </div>
            <div className="flex">
                

                        <Swiper
                            slidesPerView={5}
                            spaceBetween={12}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {
                                items.map(item => <SwiperSlide key={item.Id}>
                                    <div className="">
                                        <img src={item.ImageUrl} className="w-[250px] h-[300px] rounded-xl" alt="" />
                                        <p className="text-center mb-3">{item.Name}</p>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    
                
            </div>
        </div>
    );
};

export default Popular;