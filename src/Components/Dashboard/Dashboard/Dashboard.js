import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddNews from '../AddNews/AddNews';
import NewsList from '../NewsList/NewsList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    let { path, url} = useRouteMatch();
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="content">
                <Switch>
                    <Route path={`${path}/newsList`}>
                        <NewsList></NewsList>
                    </Route>
                    <Route path={`${path}/addNews`}>
                        <AddNews></AddNews>
                    </Route>
                    <Route path={`${path}/addAdmin`}>
                        <AddAdmin></AddAdmin>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;