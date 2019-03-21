import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const HabitsTable = ({ habits }) => {
    return (
        <table className='ui very basic table'>
            <thead>
                {renderTableHead()}
            </thead>
            <tbody>
                {renderHabitsItems(habits)}
            </tbody>
        </table>
    );
}

const renderTableHead = () => {
    const theadItems = [];
    for (let i = 0; i < 7; i++) {
        theadItems.push(<th key={i}>{getDayStr(-i)}</th>);
    }
    theadItems.reverse().unshift(<th key='empty'></th>);
    
    return (<tr>{theadItems}</tr>);
}

const renderHabitsItems = habits => {
    const rows = [];
    for (let p in habits) {
        let items = [ renderHabitTitleItem(habits[p]) ];
        for (let i = 0; i < 7; i++) items.push(renderHabitCheckBtn(i));
        rows.push(
            <tr key={habits[p].id}>{items}</tr>
        );
    }
    return rows;
}

const renderHabitTitleItem = habit => (
    <td key='title'>
        <Link to={`${routes.HABITS}/${habit.id}`}>
            {habit.title} {renderGoalLabel(!!habit.goal)}
        </Link>
    </td>
);

const renderHabitCheckBtn = counter => (
    <td key={counter}>
        <button className='circular ui icon button'>
            <i className='icon check'></i>
        </button>
    </td>
);

const renderGoalLabel = isAttached => isAttached ? (
    <span className="ui circular label">
        <i className="bullseye icon"></i>
    </span>
) : null;

const getDayStr = daysFromToday => {
    const today = new Date();
    const mlsecInDay = 1000 * 60 * 60 * 24;
    const daysNames = {
        0: 'sun',
        1: 'mon',
        2: 'tue',
        3: 'wed',
        4: 'thu',
        5: 'fri',
        6: 'sat'
    };
    const day = new Date(today.getTime() + daysFromToday * mlsecInDay);
    const weekDay= day.getDay();
    const date = day.getDate();

    return (`${daysNames[weekDay]}, ${date}`);
}

export default HabitsTable;