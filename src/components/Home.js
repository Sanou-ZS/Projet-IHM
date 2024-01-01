import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { h1Element,logo,footer} from './import';

const Home = () => {
 
  return (
  <div className='HomeCss' >
      <nav>
        <div className='title'>
           {logo}
          <h1>{h1Element}</h1>
        </div>
          <ul>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>   
      </nav>

   <section className="blocks">
      <div class="block" > 
      <Link to="/home/books"> <h1>books</h1></Link>
       </div>

    <div class="block" >
       <Link to="/home/student"> <h1> students</h1></Link>
    </div>

    <div class="block">
    <Link to="/home/metaphors"> <h1>Metaphors</h1></Link>
    </div>
      </section>

      <footer>
        <div className="footer">
          <p>{footer}</p>
        </div>
      </footer>

  </div> 
   
  );
};

export default Home;
