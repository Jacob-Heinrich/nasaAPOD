import React from 'react';
import { useState,useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { NavLinks } from './nasaPhotoElements';
import Fade from 'react-reveal';


const apiKey = process.env.REACT_APP_NASA_KEY;


function NasaPhoto(){

  // Sends date to NasaPhoto API
  const queryParams = new URLSearchParams(window.location.search);
  const dates = queryParams.get("date");

  // Sets Photo Data
  const [photoData,setPhotoData] = useState(null);
  useEffect(()=>{
    fetchPhoto();

    // Fetches Photo
    async function fetchPhoto(){
      const photo = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dates}`
      );
      const data = await photo.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;
  return(
    <>
    <div className = "mainPhoto">
    <div className = "nav">
    <Link to = "/" className = "links" id="linkHome">Home</Link>
    <NavLinks to = "title" className = "links" smooth={true}>Title</NavLinks>
    <NavLinks to = "copyright" className = "links" smooth={true}>Author</NavLinks>
    <NavLinks to = "explanation" className = "links"smooth={true}>Explanation</NavLinks>
    </div>
    <div>
    <img
      src={photoData.url}
      alt={photoData.title}
      className="photo"
      />
    </div>
    <Fade bottom>
    <section id = "title">
    <div className = "photoTitle" >
    <h1 className="photoDetails">{photoData.title || "No Title"}</h1>
    </div>
    </section>
    </Fade>
    <Fade bottom>
    <section id = "copyright">
    <div className = "details">
    <h1 className="photoDetails">{photoData.copyright || "No Author"}</h1>
    <a href = {"https://www.google.com/search?q=" + photoData.copyright}>See more from {photoData.copyright}</a>
    </div>
    </section>
    </Fade>
    <Fade bottom>
    <section id = "explanation">
    <div className = "photoExplanation">
    <h2 className="photoDetails">{photoData.explanation || "No Details"}</h2>
    </div>
    </section>
    </Fade>
    </div>
    </>
  )
}

export default NasaPhoto;
