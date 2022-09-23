import React from 'react';

const Modal = (props) => {
    return (
        <div className='mx-auto'>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl my-2">{props.data.name}</h3>
                    <p className='text-xl'><small className='text-success'>{props.data.price}</small> || <small className='text-success'>{props.data.capacity}</small> || <small className='text-success'>{props.data.action}</small></p>
                    <p className="py-4 h-[50%] w-[80%] mx-auto" ><img src={props.data.img} alt='' /> </p>
                    <div className="modal-action">
                        <label onClick={() => props.setModalData(null)} htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;