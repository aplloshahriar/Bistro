import  { useEffect, useState } from 'react';
import SectionTitle from '../../../components/Section Title/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PpopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            >
            </SectionTitle>

            <div  className='grid md:grid-cols-2 gap-4 mt-12'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PpopularMenu;