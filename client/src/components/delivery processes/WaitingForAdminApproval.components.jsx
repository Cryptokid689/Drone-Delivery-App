import React from 'react';


function WaitingForAdminApproval(props) {
    const completed = true

    return (
        <div className='approval-waiting'>
            <h1>Waiting for the confirmation of the Administrator</h1>
            {completed && <button onClick={() => props.goToElement(props.index+1)} type="button" className="btn btn-outline-success mb-3">Proceed</button>}
        </div>
    )
}


export default WaitingForAdminApproval