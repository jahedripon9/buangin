import logo1 from '../../assets/logo_master.png';
import logo2 from '../../assets/15636900098394-20230620111943 1.png';
import logo3 from '../../assets/Jogja_Istimewa_Wordmark (1) 1.png';
const Logo = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">

                    <div className=" -m-4 ">
                        <div className="flex p-4 md:w-2/4 sm:w-1/5 w-full text-center mx-auto">
                            <div className=" flex px-4 py-6 rounded-lg">
                                <img src={logo1} className='md:w-60 w-auto' alt="" />
                            </div>
                            <div className="flex px-4 py-6 rounded-lg">
                                <img src={logo2} className='md:w-80 w-auto' alt="" />
                            </div>
                            <div className="flex px-4 py-6 rounded-lg">
                                <img src={logo3} className='md:w-60 w-auto' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Logo;