import React from 'react'
import '../css/Searchbar.css'

const Searchbar = () => {
  return (
    <div className='main-container'>
      <div className='searchbar-container'>
        <div className='heading1'><p className='f-name'>Find businesses, </p><p className='s-name'> products or services</p> </div>
        <div className='heading2'>From restaurants to repair services - we've got it all</div>
        <div className='input-fields'>
            <input className='input1' type="text" placeholder='What are you Looking for?' />
            <input className='input2' type="text" placeholder='Location'/>
            <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
