// Books.js
import React, { useState } from 'react';
import './Books.css'
import { h1Element,logo,getRandomColor, footer } from './import';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


  const Books = () => {
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

// State to store the list of books
const [books, setBooks] = useState([]);

// State to store the title of the current book being added
const [title, setTitle] = useState('');

// State to store the image URL of the current book being added
const [image, setImage] = useState('');
const [selectedImages, setSelectedImages] = useState([]);
const [selectedImageIndex, setSelectedImageIndex] = useState(null);
const [popupImageIndex, setPopupImageIndex] = useState(0);

// State to store the ID of the current book being added
const [bookId, setBookId] = useState('');

// Function to handle changes in the book title input
const handleTitleChange = (e) => {
  setTitle(e.target.value);
};

const [popupImage, setPopupImage] = useState(null);

// Function to handle changes in the book cover image input
const handleImageChange = (e) => {
  // Get the selected image file
  const file = e.target.files[0];

  // Update the image state with the URL of the selected image file
  setImage(file ? URL.createObjectURL(file) : '');
};

const handleBookImageClick = (book) => {
  setPopupImage(book.image);
  setSelectedImages(book.selectedImages);
  disableScroll();
};

// Function to handle changes in the book cover image input
const handleImageChanges = (e) => {
  const files = e.target.files;
  const imagesArray = Array.from(files);
  setSelectedImages(imagesArray);
  setSelectedImageIndex(0);
};




// Function to handle changes in the book ID input
const handleBookIdChange = (e) => {
  setBookId(e.target.value);
};

const closePopup = () => {
  setPopupImage(null);
  enableScroll();
}

const addBook = () => {
  // Check if title, image, and bookId are provided
  if (title && image && bookId && selectedImages) {
    // Update the books state with the new book
    setBooks([...books, { title, image, bookId  , selectedImages }]);
    
    // Clear the title, image, and bookId states for the next book
    setTitle('');
    setImage('');
    setBookId('');
    setSelectedImages([]);
  }
};

const goToNextImage = () => {
  if (selectedImages.length > 0) {
    setPopupImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedImages.length
    );
    setPopupImage(selectedImages[popupImageIndex].src);
  }
};

const goToPrevImage = () => {
  if (selectedImages.length > 0) {
    setPopupImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedImages.length) % selectedImages.length
    );
    setPopupImage(selectedImages[popupImageIndex].src);
  }
};

// close images (multiple)
// const handleImageClose = (index) => {
//   // Filter out the closed image
//   const updatedImages = [...selectedImages];
//   updatedImages.splice(index,1);
//   setSelectedImages(updatedImages);
// };

   return (
       <div className='BookCss all'>
        
{showBlock && (
<div className="blockOverlay">
  <div className='showBlock'>

    <button className='off' onClick={closeBlock} > &times; </button>

    <form style={{ textAlign: 'center' }} action="#">
      <h1>Book informations</h1>
      <section style={{ display: 'flex' , margin:'3px'}}>
      <form style={{ textAlign: 'center', backgroundColor: 'white', width: '135px', height: '160px', position: 'relative', border: 'dashed 2px #800000', borderRadius: '15px', padding: '9px' ,display: 'inline-block', marginRight:'5px' }} action="#">
      {image && <img src={image} alt={title} className="show-imgC" />}
    </form>

    <form style={{ textAlign: 'center', backgroundColor: 'white', width: '330px', height: '160px', position: 'relative', border: 'dashed 2px #800000', borderRadius: '15px', padding: '9px' ,display: 'inline-block',overflowX: 'auto', whiteSpace: 'nowrap'}} action="#">
    {selectedImages.map((image, index) => (
    <div>
    <img
    key={index}
    src={URL.createObjectURL(image)}
    alt={`Selected Image ${index + 1}`}
    className="show-imgC2"
    style={{
      position: 'absolute',
      top: '50%',
      left: `${index * 125}px`, // Adjust the spacing between images 
      transform: 'translateY(-50%)',
    }}
  />
          {/* <button
            style={{ position: 'absolute', top: '5px', right: '5px' }}
            onClick={() => handleImageClose(index)}>
            Close
           </button> */}
  </div>
  ))}
    </form>
  </section>

  <section style={{ margin: '12px' }}>
    <label className='custom-file-upload'>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <i className='fa fa-cloud-upload'></i> Book Cover
    </label>

    <label className='custom-file-upload'>
      <input type="file" onChange={handleImageChanges} accept="image/*" multiple />
      <i className='fa fa-cloud-upload'></i> Book Content
    </label>
  </section>

  <section style={{ marginBottom: '15px', padding: '10px' }}> 
        <label htmlFor="title">Book Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} className='input' />
        <label htmlFor="bookId">Book ID:</label>
        <input type="text" id="bookId" value={bookId} onChange={handleBookIdChange} className='input' />
     
        <button className='input,add-book-btn' onClick={addBook} style={{backgroundColor: 'black',color: '#fff',cursor: 'pointer',width:'30%',fontSize:'larger',height:'40px',borderRadius:'20px',position:'fixed',bottom: '8%', left: '50%',transform: 'translate(-50%, 50%)'}} > Add Book</button>
     
   </section>
      
    </form>
    </div>
  </div>
)}

  
         <nav>
           <div className='title'>
             {logo}
             <h1 className='headerTitle'>{h1Element}</h1>  
           </div>
           <ul>
             <li><a href="/home">Home</a></li>
             <li><a href="/home/Profile">Profile</a></li>
             <li><a href="/">Logout</a></li>
           </ul>
         </nav>

         <button  className='add' onClick={openBlock} >add</button>

{/* Display the list of books in a flexbox layout */}

          <div className="book-gallery-container">
          {books.map((book, index) => (
            <div key={index} className="book-container">
              <div className={`book-point ${book.color}`}></div>
              <img src={book.image} alt={book.title} className="book-image" onClick={() => handleBookImageClick(book)} />
              <p className="text"><div className='t'>Title :</div> {book.title}</p>
              <section className='modify'>
              <button style={{width: '20px', height: '3vh',borderRadius:'100%',backgroundColor:getRandomColor(),position: 'relative',float:'left',top: '50%' , left: '5px',transform: 'translateY(-50%)'}} />
              <button style={{ float:'right',marginRight:'5px'}} onClick={openBlock}><FontAwesomeIcon icon={faPen} className='ButIcon' /></button>
              <button style={{ float:'right' , marginRight:'5px'}}><FontAwesomeIcon icon={faTrash} className='ButIcon'  /></button>
              </section>
            </div>
            
          ))}

        </div>
      <div className='popup-container'>
        {popupImage && (
        <div className="popup-image">
          {/* <button className="nav-btnL" onClick={goToPrevImage}>
            &lt; Prev
          </button> */}
          <span onClick={closePopup}>&times;</span>
          <img src={popupImage} alt="Popup Image"  />
          {/* <button className="nav-btnR" onClick={goToNextImage}>
            Next &gt;
          </button> */}
        </div>
        )}
      </div>
        
  <div className='footer'>
    <p>{footer}</p>
  </div>

</div>
       
      );
   };

export default Books;