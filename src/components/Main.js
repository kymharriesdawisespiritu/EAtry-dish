import React, { useState, useEffect } from 'react';


function Main() {

  const [titles, setTitles] = useState([]);

  const [videos, setVideos] = useState([]);


  useEffect(() => {

    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU4oC0wpgm2ae-mEa8slguNQ&key=AIzaSyBc7zJJminNAm7h6EAcvZbZ4mV2NrsTPJ8')

      .then(response => response.json())

      .then(data => {

        data.items.forEach((item) => {

          setTitles((prevTitles) => [...prevTitles, item.snippet.title]);

          setVideos((prevVideos) => [...prevVideos, item.snippet.resourceId.videoId]);

        });

        console.log(data);

      })

      .catch(error => console.error(error));

  }, []);


  return (

    <div>

      {titles.map((title, index) => (

        <div key={index}>
          <h1>{titles[title]}</h1>

          <div href={`https://www.youtube.com/watch?v=${videos[index]}`}>
          <video className="h-80" controls>

            <source type="video/mp4" />
            
          </video>
          </div>
        </div>

      ))}

    </div>

  );

}


export default Main;