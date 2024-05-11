import React from 'react';


function WaitingForRecipientApproval(props) {
    const recipient = "tupac shakur"
    const completed = true

    return (
        <div className='approval-waiting'>
            <h1>Waiting for the confirmation of {recipient}</h1>
            {completed && <button onClick={() => props.goToElement(props.index+1)} type="button" className="btn btn-outline-success mb-3">Proceed</button>}
        </div>
    )
}


export default WaitingForRecipientApproval