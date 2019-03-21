import React from 'react';
import { Link } from 'react-router-dom';

const GoalAttachedEntityItems = props => {
    if (!props.attachedItems
        || !props.attachedItems.length
        || !Object.keys(props.loadedItems).length) return null;
    
    const goalItems = props.attachedItems
        .map(itemId => props.loadedItems[itemId])
        .map(item => (
            <Link
                to={`${props.route}/${item.id}`}
                className='item'
                key={item.id}>
                {item.title}
            </Link>
        ));

    return (
        <div className='card'>
            <div className='content'>
                <h3 className='header'>{props.entity}</h3>
                <div className='ui bulleted list'>
                    {goalItems}
                </div>
            </div>
        </div>
    );
}

export default GoalAttachedEntityItems;