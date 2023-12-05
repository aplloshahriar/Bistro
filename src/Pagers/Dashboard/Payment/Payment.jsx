import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/Section Title/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pk);
const Payment = () => {

    const [cart] = useCart();
    console.log(cart);
    // calculating price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-2/3">
            <SectionTitle subHeading='Please Provide' heading="Payment"></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;