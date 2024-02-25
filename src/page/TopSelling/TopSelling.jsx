import MagoboxminiFullset from '../../assets/Magobox-mini-Fullset.png';
import ComposingTools from '../../assets/Composting-tools-2.png';
import ComposterFullPack from '../../assets/Composting-Ecobali.png';
import WasteSorters from '../../assets/Mesin-Conveyor-Belt.png';
import BiogasStove from '../../assets/Home-Biogas.png';
import WasteBin from '../../assets/Flip-2in1-1.png';
const TopSelling = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-black tracking-widest font-sm title-font mb-1">Top Selling</h2>
                        <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900">Waste Processing Product</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={MagoboxminiFullset} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">Magokits Pack</h2>
                                <p className="mt-1 text-white">Rp. 150.000</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ComposingTools} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">ComposingTools</h2>
                                <p className="mt-1 text-white">Rp. 1.550.000</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ComposterFullPack} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">Composter Full Pack</h2>
                                <p className="mt-1 text-white">Rp. 300.000</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={WasteSorters} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">Waste Sorters</h2>
                                <p className="mt-1 text-white">Rp. 15.000.000</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={BiogasStove} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">Biogas Stove</h2>
                                <p className="mt-1 text-white">Rp. 4.000.000</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a className="block relative md:w-56  md:h-52 mx-auto w-auto rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={WasteBin} />
                            </a>
                            <div className="mt-4 bg-emerald-700 rounded-b-2xl p-3">

                                <h2 className="text-white title-font text-lg font-medium">Waste Bin 2in1</h2>
                                <p className="mt-1 text-white">Rp. 300.000</p>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default TopSelling;