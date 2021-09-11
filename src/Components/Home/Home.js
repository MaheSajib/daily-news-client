import React from 'react';
import HeroSection from '../Header/HeroSection/HeroSection';
import AppLayout from '../AppLayout/AppLayout';
import LatestNews from './LatestNews/LatestNews';
import Bangladesh from './Bangladesh/Bangladesh';
import Coronavirus from './Coronavirus/Coronavirus';
import Sports from './Sports/Sports';
import Entertainment from './Entertainment/Entertainment';

const Home = () => {
    return (
        <AppLayout>
            <HeroSection></HeroSection>
            <LatestNews></LatestNews>
            <Bangladesh></Bangladesh>
            <Coronavirus></Coronavirus>
            <Sports></Sports>
            <Entertainment></Entertainment>
        </AppLayout>
    );
};

export default Home;