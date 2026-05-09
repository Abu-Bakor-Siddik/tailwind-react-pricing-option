import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='md:mr-10 px-4 py-1 hover:bg-amber-500'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;