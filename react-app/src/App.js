import React, { useState } from 'react';
import './Style.css';
import DogImage from './DogImage';
import SavedCollectionsModal from './SavedCollectionsModal';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [arrayLove, setArrayLove] = useState([]);
  const [arrayHate, setArrayHate] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleLove = (imageUrl) => {
    setArrayLove(prevArrayLove => [...prevArrayLove, imageUrl]);
  };

  const handleHate = (imageUrl) => {
    setArrayHate(prevArrayHate => [...prevArrayHate, imageUrl]);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  

  return (
    <div className="cont">
        <h1>Random dog</h1>
        <p>
        You can like or dislike dogs by clicking the buttons. Your choices will
        be saved. <br></br>If some pictures are missing, that means they unfortunately
        have been deleted.
      </p>

 
      <DogImage onLove={handleLove} onHate={handleHate} /> 
      <button className="svdb" onClick={toggleModal}>Show Saved Collection</button>

      <SavedCollectionsModal
        show={showModal}
        onClose={toggleModal}
        arrayLove={arrayLove}
        arrayHate={arrayHate}
      />
    </div>
  );
};

export default App;
