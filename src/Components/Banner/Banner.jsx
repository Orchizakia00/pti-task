import banner from "../../assets/Image1.png"

const Banner = () => {
    return (
        <div className="px-2">
            <div className="lg:bg-orange-400 flex flex-col lg:flex-row gap-2 p-2 lg:p-10 items-center my-20 rounded-2xl">
                <div className="flex-1">
                    <p className="text-4xl lg:text-5xl text-black lg:text-gray-100 text-center lg:text-left lg:ml-10">Deliver Food To Your Door Step!</p>
                    <p className="text-black lg:text-gray-100 ml-10 mt-6 mb-12">Authentic Food, Quick Service, Fast Delivery</p>
                </div>
                <div className="flex-1">
                    <div className=" bg-orange-300 h-[180px] lg:h-full lg:bg-transparent rounded-b-3xl">
                        <img src={banner} className="relative bottom-16 lg:bottom-0 lg:top-10" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;