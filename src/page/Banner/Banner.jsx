import banner from '../../assets/Component 3.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mx-auto px-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg " />
                    <div>
                        <p className='text-2xl font-bold text-white'>Hi, Folks!</p>
                        <h1 className="text-5xl font-bold text-yellow-200">Inovation Dedication <br />
                            and Sustainable Solution</h1>
                        <p className="py-6 text-white">
                            Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra <br /> ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean <br /> posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.</p>
                        <button className="btn  btn-outline rounded-btn text-white"> View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;