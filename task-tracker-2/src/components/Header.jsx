import React from 'react';
import Button from './Button';

function Header() {

    const handleClick = () => {
        console.log('first');
    };
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button
                color = "purple" 
                text = "Show Add Task Bar"
                handleClick = {handleClick}
            />
        </div>
    );
}

export default Header;