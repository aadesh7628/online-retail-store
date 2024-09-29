import React from 'react'


const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Change Password</h1>

            <div className='form'>
                <div className='input-container'>
                    <input type="password" placeholder=" " />
                    <label htmlFor='oldpass'>Old Password</label>
                </div>

                <div className='input-container'>
                    <input type="password" placeholder=" " />
                    <label htmlFor='newpass'>New Password</label>
                </div>


            </div>

            <button className='mainbutton1'>Save Changes</button>
        </div>
    )
}

export default ChangePassword