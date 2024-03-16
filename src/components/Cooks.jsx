import React from 'react';

import Cook from './Cook/Cook';

const Cooks = () => {
    return (
        <div>
            <h1 className='font-bold text-xl text-center mb-4'>Want to cook: {}</h1>
            <hr />

            <table>
                <tr className=''>
                    <th className='p-6'></th>
                    <th className='p-6'>Name</th>
                    <th className='p-6'>Time</th>
                    <th className='p-6'>Calories</th>
                    <th className='p-6'></th>
                </tr>
               <Cook ></Cook>
            </table>
        </div>
    );
};

export default Cooks;