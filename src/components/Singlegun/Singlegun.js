import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Singlegun = (props) => {
    const [modalData, setModalData] = useState({})
    console.log(modalData)
    const { gun, increase } = props
    const { name, bullet, price, capacity, img } = gun
    return (
        <div>
            {modalData && <Modal data={modalData} setModalData={setModalData}></Modal>}
            <div className="card w-full h-full shadow-xl bg-slate-50">
                <figure><img className='h-48 w-96 p-3 ' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{capacity}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline">{bullet}</div>
                        <div className="badge badge-outline">{price}</div>
                        <div className='mt-3'>
                            <button onClick={increase} className="btn btn-danger mr-3">Add to cart</button>
                            <label onClick={() => { setModalData(gun) }} htmlFor="my-modal" className="btn modal-button btn-success">Details</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlegun;