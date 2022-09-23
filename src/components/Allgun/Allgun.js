import React, { useEffect, useState } from 'react';
import Singlegun from '../Singlegun/Singlegun';

const Allgun = (props) => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`).then(res => res.json()).then(data => setGuns(data))
    }, [])
    return (
        <div className='w-[90%] mx-auto mt-3'>
            <h2 className='text-4xl text-center font-bold mt-6 mb-3'>Welcome to <span className='text-red-600'>Gun</span> Store!!</h2>
            <p className='text-center mb-4'>Welcome to the Internet's leading retailer for firearms, ammunition and accessories. Since 2002 we have sold and shipped over 2 million firearms ! Buying a firearm online is simple, safe and completely legal ! If you are not familiar with the process!!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    guns.map(gun => <Singlegun increase={props.increase} gun={gun}></Singlegun>)
                }
            </div>
        </div>
    );
};

export default Allgun;