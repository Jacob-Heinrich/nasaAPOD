import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { BiSearchAlt } from 'react-icons/bi';
import Zoom from 'react-reveal/Zoom';




function Home(){

  // Sets date data
  const [date,setDate] = useState('YYYY-MM-DD');

  return(
    <>
    <div className="dateForm">
    <Zoom>
      <header>
        <form className = "form">
            <legend className = "legend"></legend>
            <label className = "label">
              <input type="text" value={date}
                onChange={e => setDate(e.target.value)} className = "input" />
                <BiSearchAlt size = "25px" className = "biSearch"/>
                <Link to={
                  {
                    pathname:'/nasaphoto',
                    search:`date=${date}`
                  }
                } className="nasaLink">Search</Link>
            </label>
        </form>
      </header>
      </Zoom>
    </div>
    </>
  )
}

export default Home;
