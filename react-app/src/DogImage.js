import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const DogImage = ({ onLove, onHate }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImageUrl(response.data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  const handleLove = () => {
    onLove(imageUrl);
    const fetchDogImage = async () => {
        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          setImageUrl(response.data.message);
        } catch (error) {
          console.error('Error fetching dog image:', error);
        }
      };
  
      fetchDogImage();
  };

  const handleHate = () => {
    onHate(imageUrl);
    const fetchDogImage = async () => {
        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          setImageUrl(response.data.message);
        } catch (error) {
          console.error('Error fetching dog image:', error);
        }
      };
  
      fetchDogImage();
  };

  return (
    <div className="centrify">
      <img className="smlimg" src={imageUrl} alt="Random Dog" onClick={handleLove} />
<br></br>
      <button className="btn" onClick={handleLove}>Love it</button>
      <button className="btn" onClick={handleHate}>Hate it</button>
    </div>
  );
};



export default DogImage;