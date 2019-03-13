import './__styles__/Layout.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = props => (
    <div className='layout'>
        {renderHeader()}
        {renderSidebar()}
        <div className='content'>
            {props.children}
        </div>
    </div>
);

const renderHeader = () => (
    <div className='header'>
         <div className='links'>
            <span className='ui button'>About</span>
            <span className='ui button'>Log In / Log Out</span>
        </div>
    </div>
);

const renderSidebar = () => (
    <div className='sidebar'>
        <Link to='/today' className='logo'>
            <h2>GTH Manager</h2>
        </Link>
        <nav className='nav'>
            <Link to='/today' className='ui inverted teal basic button'>Today</Link>
            <Link to='/goals' className='ui inverted teal basic button'>Goals</Link>
            <Link to='/tasks' className='ui inverted teal basic button'>Tasks</Link>
            <Link to='/habits' className='ui inverted teal basic button'>Habits</Link>
        </nav>
    </div>
);

export default Layout;