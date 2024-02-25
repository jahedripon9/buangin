import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Count from "../../Count/Count";
import Header from "../../Shared/Header/Header";
import TopSelling from "../../TopSelling/TopSelling";
import Logo from "../../logo/logo";

const Home = () => {
    return (
        <div className=" ">

            <Banner />
            <Count />
            <Category />
            <TopSelling />
            <Logo />
        </div>
    );
};

export default Home;