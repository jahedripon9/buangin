import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Count from "../../Count/Count";
import Header from "../../Shared/Header/Header";
import TopSelling from "../../TopSelling/TopSelling";

const Home = () => {
    return (
        <div className=" ">

            <Banner />
            <Count />
            <Category />
            <TopSelling />
        </div>
    );
};

export default Home;