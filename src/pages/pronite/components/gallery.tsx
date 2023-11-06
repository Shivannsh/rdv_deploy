import './gallery.css';
import galleryImage from '../../../assets/img/image 2.jpg';
function GalleryPro() {
  return (
    <>
      {/*<div className="main-container">
    <div className="galleryHeading">Gallery</div>
      <div className="gallery-container">
        
        
          <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img
            className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img className="img" src={galleryImage}/>
        </div>
        <div className="box">
          <img className="img" src={galleryImage}/>
        </div>
      </div>
      </div>*/}
      <div className="main-container">
        <h1 className="galleryHeading">Gallery</h1>
        <div className="gallery-container">
          <img src={galleryImage} alt="" className="img" id="img1" />
          <img src={galleryImage} alt="" className="img" id="img2" />
          <img src={galleryImage} alt="" className="img" id="img3" />
          <img src={galleryImage} alt="" className="img" id="img4" />
        </div>
        <div className="gallery-container2">
          <img src={galleryImage} alt="" className="img" id="img5" />
        </div>
        <div className="gallery-container">
          <img src={galleryImage} alt="" className="img" id="img6" />
          <img src={galleryImage} alt="" className="img" id="img7" />
        </div>
      </div>

    </>
  );
}

export default GalleryPro;
