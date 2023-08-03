import SectionTitle from "../../../components/Section Title/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}>
            </SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="mx-24 my-16 flex flex-col items-center">
                            <FontAwesomeIcon className="h-24" icon={faQuoteLeft} />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                   
                                <p className="pt-8"> {review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;