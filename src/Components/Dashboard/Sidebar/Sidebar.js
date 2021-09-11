import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div class="sidebar">
            <Link class="active" to="/"><h4><b>Daily News</b></h4></Link>
            <Link to="/dashboard/newsList"> <b>News List</b></Link>
            <Link to="/dashboard/addNews"> <b>Add News</b></Link>
            <Link to="/dashboard/addAdmin"> <b>Add Admin</b></Link>
        </div>
    );
};

export default Sidebar;