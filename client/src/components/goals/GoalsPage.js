import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const GoalsPage = () => (
    <div>
        <h1>Goals</h1>
        <Link to={routes.NEW_GOAL} className='ui labeled icon button primary'>
            <i className='icon plus' />
            Create new Goal
        </Link>
    </div>
);

export default GoalsPage;