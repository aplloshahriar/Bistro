import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=['dessert','pizza','salad','soup','drinks'];
    const {category}=useParams();
    const initialIndex=categories.indexOf(category);

    const [tabIndex,setTabIndex]=useState(initialIndex);
    const[menu]=useMenu();

    console.log(category);
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={"Order Food"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Desserts</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={pizzas}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={salads}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={soups}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;