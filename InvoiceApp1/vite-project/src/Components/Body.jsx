import React, { useState } from 'react'
import imag from '../assets/pls.png'
import Modal from 'react-modal'
import Invoices from './Invoices'
import Form from './Form'



function Body() {

    const [popForm, setPopForm] = useState(false)

  return (
    <div className='wrapp'>
        <div className='body-main'>
            <div className='wrap'>
                <div className='invoice'>
                    <h1>Invoices</h1>

                </div>
                <div className='filters'>

                    <div className='btn'>
                        
                        <div className='modal'>
                           
                            <Form/>
                        </div>
                    </div>

                    
                </div>
                </div>   
                <Invoices/>
        </div>
        
    </div>
  )
}

export default Body
