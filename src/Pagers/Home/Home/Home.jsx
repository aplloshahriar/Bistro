import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PpopularMenu from "../PopularMenu/PpopularMenu";
import Category from "../category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PpopularMenu></PpopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;