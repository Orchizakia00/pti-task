import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useForm } from "react-hook-form";
// import './styles.css';

const Recommended = () => {
    const [items, setItems] = useState([]);
    const { register, handleSubmit } = useForm();

    // const url = 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10';

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const items = data.Items;
                const recommendedItems = items.filter(item => item.IsRecommended === true);
                setItems(recommendedItems);
            })
    }, []);

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className="pl-3 my-10">
            <div className="flex justify-between mb-4">
                <p className="text-3xl">Recommended</p>
                <div className="flex items-center">
                    <button className="text-orange-500  hidden sm:hidden md:flex" onClick={() => document.getElementById('my_modal_2').showModal()}>AddMore</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Add New Item!</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        {...register('Name', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="flex gap-6">

                                    <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Popular?</span>
                                        </label>
                                        <select defaultValue="default" {...register('IsPopular', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Is Popular?</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Recommended?</span>
                                        </label>
                                        <select defaultValue="default" {...register('IsRecommended', { required: true })}
                                            className="select select-bordered w-full">
                                            <option disabled value="default">Is Recommended?</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>


                                </div>

                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        {...register('Price', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>

                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Image Url"
                                        {...register('ImageUrl', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>

                                <button className="btn bg-orange-500 text-white btn-block mt-4">
                                    Add Item
                                </button>
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
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