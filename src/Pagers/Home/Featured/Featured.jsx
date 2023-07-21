import SectionTitle from "../../../components/Section Title/SectionTitle";
import featured_img from '../../../assets/home/featured.jpg';
import '../Featured/Featured.css';


const Featured = () => {
    return (
        <section className="featured-item text-yellow-700 pt-8">
            <SectionTitle
                heading={'Featured Item'}
                subHeading={'Check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featured_img} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>March 20, 2023</p>
                    <p className="uppercase mt-2 mb-2">
                        WHERE CAN I GET SOME?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-2">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;