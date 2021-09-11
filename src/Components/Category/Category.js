import React, { useEffect, useState } from 'react';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage';

const Category = () => {

    const [newsData, setNewsData] = useState('');

    useEffect(()=>{
        fetch('http://localhost:5500/news')
        .then(res => res.json())
        .then(data => setNewsData(data))
    }, [])

    return (
        <div>
            {
                newsData.map(pd => <CategoryDetailPage pd={pd}></CategoryDetailPage>)
            }
        </div>
    );
};

export default Category;