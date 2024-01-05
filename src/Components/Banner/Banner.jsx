import banner from "../../assets/Image1.png"

const Banner = () => {
    return (
        <div className="bg-orange-400 flex gap-2 p-10 items-center my-20 rounded-2xl">
            <div className="flex-1">
                <p className="text-5xl text-gray-100 ml-10">Deliver Food To Your Door Step!</p>
                <p className="text-gray-100 ml-10 mt-6">Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className="flex-1">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;