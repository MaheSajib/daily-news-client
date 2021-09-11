import React, { useEffect, useState } from 'react';
import HeroSection from '../Header/HeroSection/HeroSection';
import AppLayout from '../AppLayout/AppLayout';
import LatestNews from './LatestNews/LatestNews';
import Bangladesh from './Bangladesh/Bangladesh';
import Coronavirus from './Coronavirus/Coronavirus';
import Sports from './Sports/Sports';
import Entertainment from './Entertainment/Entertainment';

const Home = () => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://infinite-sands-56335.herokuapp.com/news')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    return (
        <AppLayout>
            <HeroSection></HeroSection>
            <LatestNews newsData={news}></LatestNews>
            <Bangladesh newsData={news}></Bangladesh>
            <Coronavirus newsData={news}></Coronavirus>
            <Sports newsData={news}></Sports>
            <Entertainment newsData={news}></Entertainment>
        </AppLayout>
    );
};

export default Home;