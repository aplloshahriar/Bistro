import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('Access-Token')
    const [axiosSecure] = useAxiosSecure();
    // tanStack/react query applied
    const { refetch, data: cart = [], } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization:`bearer ${token}`
        //         }})
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok')
        //     }
        //     return response.json()
        // },

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [cart, refetch]
};

export default useCart;