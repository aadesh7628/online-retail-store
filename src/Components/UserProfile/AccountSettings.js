import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <div className='form'>
        <div className='input-container'>
          <input type='text' name='name' id='name' placeholder=" "  required/>
          <label htmlFor='name'>Your Name</label>
        </div>

        <div className='input-container'>
          <input type='text' name='phone' id='phone'placeholder=" "  required/>
          <label htmlFor='phone'>Phone/Mobile </label>
        </div>

        <div className='input-container'>
          <input type='email' name='email' id='email'placeholder=" "  required/>
          <label htmlFor='email'>Email </label>
        </div>

      
      </div>

      <button className='mainbutton1'>Save Changes</button>
    </div>
  )
}

export default AccountSettings