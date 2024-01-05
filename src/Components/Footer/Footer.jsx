import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import img from '../../assets/Image2.png';

const Footer = () => {
    return (
        <div className="bg-orange-400 lg:px-40 mt-40">
            <div className=" flex justify-between">
                <div className='flex-1 pt-28'>
                    <div className='relative'>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered rounded-xl w-96 mx-auto lg:w-full lg:max-w-lg ml-5 lg:ml-0" />
                        <button className='flex items-center gap-2 bg-transparent lg:bg-orange-500 py-2 px-6 text-orange-500 lg:text-white rounded-xl absolute left-64 top-1 lg:left-[23rem] lg:top-[5px]'>Subscribe <FaArrowRight /> </button>
                        <div className='lg:hidden mt-12 text-center'>
                            <button className='btn rounded-full  text-white border-none bg-orange-500 mr-2'><FaGoogle /></button>
                            <button className='btn rounded-full  text-white border-none bg-orange-500 mr-2'><FaTwitter /></button>
                            <button className='btn rounded-full  text-white border-none bg-orange-500'><FaInstagram /></button>
                        </div>
                    </div>

                    <div className='lg:mt-32 mt-20'>
                        <p className='text-3xl font-bold text-center lg:text-left'>pti<span className='text-orange-600'>.</span></p>
                        <div className='flex justify-center items-center'>
                            <p className='mt-4 mb-32 lg:mb-0 lg:mr-32'>Copyright©Tripp.All right reserved</p>
                            <div className='hidden sm:hidden md:flex'>
                                <button className='btn rounded-full text-orange-500 mr-2'><FaGoogle /></button>
                                <button className='btn rounded-full text-orange-500 mr-2'><FaTwitter /></button>
                                <button className='btn rounded-full text-orange-500'><FaInstagram /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 pl-32 hidden sm:hidden md:flex'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;