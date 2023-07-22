import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PpopularMenu from "../PopularMenu/PpopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PpopularMenu></PpopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;