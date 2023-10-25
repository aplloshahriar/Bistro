import Swal from "sweetalert2";
import SectionTitle from "../../../components/Section Title/SectionTitle";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if(data.data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })
    };




    return (

        <div className="w-full px-8">

            <SectionTitle subHeading=" What's New" heading='Add An Item'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">

                    {/* recipe name */}
                    <label className="label">
                        <span className="label-text font-semibold"> Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name"
                        {...register(" name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                {/* category and price */}
                <div className=" flex mb-4">

                    {/* price  */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One"
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Soup Potter</option>
                            <option>Salad</option>
                            <option>Desert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full px-4">
                        <label className="label">
                            <span className="label-text font-semibold"> Price*</span>
                        </label>
                        <input type="number"
                            {...register("price", { required: true })}
                            placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* Recipe Details */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>

                {/* Item Image */}
                <div className="form-control w-full max-w-xs mb-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>

                    </label>

                    <input type="file"  {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />
                </div>
                {/* submit btn */}
                <input className="btn btn-outline btn-success btn-sm  mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );

};


export default AddItem;