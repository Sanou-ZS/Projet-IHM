import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { h1Element,logo,getRandomColor, footer } from './import';
import './Student.css';

const Student = () => {
  
  const generateTableRows = () => {
    const rows = [];
    for (let i = 1; i <= 100; i++) {
      rows.push(
        <tr >
          <td>Le nom {i}</td>
          <td>Le prénom {i}</td>
          <td>Le matricule {i}</td>
          <td>Niveau {i}</td> 
          <td>specialty {i}</td>
          <td><button style={{width: '20px', height: '3vh',borderRadius:'100%',backgroundColor:getRandomColor()}} />
          </td>
          <td>
          <button style={{ marginRight:'5px'}} onClick={openBlock}><FontAwesomeIcon icon={faPen} className='ButIcon' /></button>
          <button style={{  marginLeft:'5px'}}><FontAwesomeIcon icon={faTrash} className='ButIcon'  /></button>
          </td>
        </tr>
      );
    }    
    return rows;
  };

  const [showBlock, setShowBlock] = useState(false);

  const openBlock = () => {
    setShowBlock(true);
    disableScroll();
  };

  const closeBlock = () => {
    setShowBlock(false);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className='StudentCss all'>


{showBlock && (
<div className="blockOverlay">
  <div className='showBlock '>
    <button className='off' onClick={closeBlock} > &times; </button>
    <form style={{ textAlign: 'center' }} action="#">
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Student's information</h1>
      <input type="text" placeholder="Name" className='input' />
      <input type="text" placeholder="Family Name" className='input' />
      <input type="text" placeholder="Level" className='input'/>
      <input type="text" placeholder="Specialty" className='input' />
      <input type="text" placeholder="Matricule" className='input' />
      <button className='input'   onClick={closeBlock} style={{backgroundColor: '#333',color: '#fff',cursor: 'pointer',}}> OK</button>
    </form>
    </div>
  </div>
)}
     
       <nav>
          <div className='title'>
             {logo}
             <h1>{h1Element}</h1>  
           </div>
           <ul>
             <li><a href="/home">Home</a></li>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>
       </nav>

       <button  className='add' onClick={openBlock} >add</button>
      
       <table>
         <thead>
          <tr>
            <th>Name</th>
            <th>Familly name</th>
            <th> matricule</th>
            <th>Level</th>
            <th>specialty</th>
            <th>Metaphor</th>
            <th>modification</th>
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>

        <div className='footer'>
          <p>{footer}</p>
        </div>

</div>

  );
};

export default Student;