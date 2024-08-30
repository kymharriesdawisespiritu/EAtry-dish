import React, { useState, useEffect } from 'react';


function Main() {

  const [titles, setTitles] = useState([]);

  const [videos, setVideos] = useState([]);

  const [descriptions, setDescriptions] = useState([]);


  useEffect(() => {

    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU4oC0wpgm2ae-mEa8slguNQ&key=AIzaSyBc7zJJminNAm7h6EAcvZbZ4mV2NrsTPJ8')

      .then(response => response.json())

      .then(data => {

        data.items.forEach((item) => {

          setTitles((prevTitles) => [...prevTitles, item.snippet.title]);

          setVideos((prevVideos) => [...prevVideos, item.snippet.resourceId.videoId]);

      setDescriptions((prevDescriptions) => [...prevDescriptions, item.snippet.description]);

        }, 
        
      
      );
        console.log(data);

      })

      .catch(error => console.error(error));

  }, []);


  return (

    <div>

      {titles.map((title, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <h1>{descriptions}</h1>
          <div href={`https://www.youtube.com/watch?v=${videos[index]}`}>
          <video className="h-80" controls>
            <source type="video/mp4" />
          </video>
          </div>
        </div>
      ))}
      {descriptions.map((description,index) => (
        <div>{descriptions}</div>
      ))}
      <div></div>
    </div>

  );

}


export default Main;