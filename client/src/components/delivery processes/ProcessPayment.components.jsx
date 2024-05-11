import React from 'react';
import itemPic from "../../assets/img/products/img-5.png"


function ProcessPayment(props) {


    return (
        <div className='payment-div'>
            <h2>Make payment to this bank</h2>
            <div className='payment-info'>
                <img width={200} height={200} src={itemPic} alt='bank logo'></img>
                <div>
                    <p>BANK: <span style={{ color: "black" }}>United Bank For Africa</span></p>
                    <p>Account Number: <span style={{ color: "black" }}>United Bank For Africa</span></p>
                    <p>Account Name: <span style={{ color: "black" }}>United Bank For Africa</span></p>
                </div>
            </div>
            <button onClick={() => props.goToElement(props.index+1)} type="button" className="btn btn-outline-success mb-3">Confirm Payment</button>
        </div>
    )
}


export default ProcessPayment