import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Musicians, Analytics, Notes, Music, Login} from './pages';
import {Header, Sidebar} from './components';
import connect from './pages/Login/connect';
import './App.css';

const App = (props) => (
        <Router>
            <Header userName={props.userName}/>
            <main>
                <Sidebar/>
                <Route path="/login" exact component={Login}/>
                <Route path="/musicians" exact component={Musicians}/>
                <Route path="/analytics" exact component={Analytics}/>
                <Route path="/notes" exact component={Notes}/>
                <Route path="/music" exact component={Music}/>
                <Route path="/" exact component={Login}/>
            </main>
        </Router>
);

App.propTypes = {
    userName: PropTypes.string.isRequired
};

export default connect(App);