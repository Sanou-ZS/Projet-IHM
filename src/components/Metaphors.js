import React, { useState } from 'react';
import './Metaphor.css';
import { getRandomColor, h1Element, logo,footer} from './import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';

const Metaphors = () => {
  
  const [showTable, setShowTable] = useState(true);
  const [currentColor, setCurrentColor] = useState('random');

  const handleClick = (color) => {
    setCurrentColor(color);
  };

  const Tab = (props) => {
    var currentDate = null;
    const rows = []; 

    for (let i = 1; i <= 400; i++) {
      currentDate = new Date().toLocaleString();

      const Ran = (props) => { 
        if (props.color === 'random') {
          return getRandomColor();
        }
        return props.color;
      };
      rows.push(
        <tr key={i}>
          <td>Le nom {i}</td>
          <td>Le prénom {i}</td>
          <td>Le matricule {i}</td>
          <td>id {i}</td>
          <td>titre {i}</td>
          <td>{currentDate}</td>
          <td>
            <button style={{ width: '20px', height: '3vh', borderRadius: '100%', backgroundColor:Ran(props)}} />
          </td>
          <td>
            <button style={{ marginRight: '5px' }} onClick={openBlock}><FontAwesomeIcon icon={faPen} className="ButIcon" /> </button>
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
    <div className='MetaphorCss all' >
      <nav>
          <div className="title">
             {logo}
             <h1>{h1Element}</h1>
          </div>
          <ul>
             <li> <a href="/home">Home</a></li>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>
        </nav>

        <div className="colors">
          <button onClick={() => handleClick('red')} className="ButColor" style={{ backgroundColor: 'red' }}>Taked</button> 
          <button onClick={() => handleClick('yellow')} className="ButColor" style={{ backgroundColor: 'yellow'} }>booked</button>
          <button onClick={() => handleClick('green')} className="ButColor" style={{ backgroundColor: 'green' }}>Freed</button>
          <button onClick={() => handleClick('random')} className="ButColor" style={{ backgroundColor: 'white'}}>By default</button>
       </div> 
       
{/* ********************************************************************* */}
        {showTable && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Family name</th>
                <th>Matricule</th>
                <th>ID book</th>
                <th>Title</th>
                <th>Date metaphor</th>
                <th>Metaphor</th>
                <th>Modification</th>
              </tr>
            </thead>
            <tbody>
            <Tab color={currentColor} />
            </tbody>
          </table>
        )}
{/* ****************************************************************************  */}

{showBlock && (
<div className="blockOverlay">
  <div className='showBlock '>
    <button className='off' onClick={closeBlock} > &times; </button>
    <form style={{ textAlign: 'center' }} action="#">
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Student's metaphor information</h1>
      <input type="text" placeholder="ID book" className='input' />
      <input type="text" placeholder="Title" className='input' />
     
      <div>
         <input type="submit" value="Taked" className="ButColor" style={{ backgroundColor: 'red' }}/>
         <input type="submit" value="Reserved" className="ButColor" style={{ backgroundColor: 'yellow',margin:'10px' }}/>
         <input type="submit" value="Freed" className="ButColor" style={{ backgroundColor: 'green' }}/>
      </div>
      <button className='input'   onClick={closeBlock} style={{backgroundColor: '#333',color: '#fff',cursor: 'pointer',}}> OK</button>   
   
    </form>
    </div>
  </div>
)}

        <div className='footer'>
          <p>{footer}</p>
        </div>

    </div>

  );
};
export default Metaphors;