import img1 from '../../assets/icon1.png';
import img2 from '../../assets/healthicons_i-training-class.png';
import img3 from '../../assets/mdi_trash-can-empty.png';
const Category = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-2xl text-base font-sm title-font mb-4 text-gray-900">Category</h1>
                        <p class="lg:w-2/3 mx-auto text-3xl leading-relaxed text-black font-semibold ">We Offer Best Service.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className=" p-8   md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">
                                <img className="lg:h-24 lg:h-24 w-auto mx-auto object-cover object-center" src={img1} alt="blog" />
                                <div className="p-6 text-center">
                                    <h1 className="tracking-widest text-1xl  font-bold text-black mb-1">Information & Education</h1>
                                    <h1 className="title-font text-sm font-medium text-gray-900 mb-3">Built Wicket longer <br /> admire do barton vanity itself do in it.</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" p-8   md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                                <img className="lg:h-24 lg:h-24 w-auto mx-auto object-cover object-center" src={img2} alt="blog" />
                                <div className="p-6 text-center">
                                    <h1 className="tracking-widest text-1xl  font-bold text-black mb-1">Course & Training</h1>
                                    <h1 className="title-font text-sm font-medium text-gray-900 mb-3">Built Wicket longer <br /> admire do barton vanity itself do in it.</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" p-8   md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                                <img className="lg:h-24 lg:h-24 w-auto mx-auto object-cover object-center" src={img3} alt="blog" />
                                <div className="p-6 text-center">
                                    <h1 className="tracking-widest text-1xl  font-bold text-black mb-1">Waste Recycling</h1>
                                    <h1 className="title-font text-sm font-medium text-gray-900 mb-3">Built Wicket longer <br /> admire do barton vanity itself do in it.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;