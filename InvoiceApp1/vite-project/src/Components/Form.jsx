import React, { useState } from 'react';
import Modal from './Modal';
import pls from '../assets/pls.png' 

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="buto" onClick={openModal}>  <img src={pls} alt='img' /><h1>New Invoice</h1></button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
       
        <h2>New Invoice</h2>
        <form>
      
            <label for="fname">Name</label><br/>
            <input type="text" id="fname" required/><br/>
            <label for="lname">Amount</label><br/>
            <input type="number" id="num" amount="amount"/><br/>
            <label for="fname">Data</label><br/>
            <input type="text" id="data" name="data" required/><br/>
            <h4>Status</h4>
            <select>
                <option className='paid'>paid</option>
                <option className='pend'>pending</option>
                <option className='ver'>Verse-versa</option>
            </select>
            <div className='btns'>
                <button className='cancel' onClick={closeModal}>Cancel</button>
                <button className='save'>Save change</button>
            </div>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
