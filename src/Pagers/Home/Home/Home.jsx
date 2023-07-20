import Banner from "../Banner/Banner";
import PpopularMenu from "../PopularMenu/PpopularMenu";
import Category from "../category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PpopularMenu></PpopularMenu>
        </div>
    );
};

export default Home;