import merchandiseImage from "../../../../assets/img/aboutus/merchandise_image.png";
import { useNavigate } from "react-router-dom";
import "./merchandise.css";
const Merchandise = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/merchandise");
  };
  return (
    <div className="merchandise-home">
      <div
        className=" w-100 d-flex justify-content-center container align-items-center"
        style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}
      >
        <img
          alt="merchandise-image"
          src={merchandiseImage}
          className="gallery-img mb-0"
        />
        <div className="merchandise-text-container px-md-5 px-3 my-3">
          <p className="merchandise-title h3">Merchandise</p>
          <p className="merchandise-text text-white py-3">
            Step into a world where every t-shirt, hoodie, and accessory carries
            a piece of the Rendezvous experience. Whether you're a dedicated
            fan, a first-time attendee, or simply someone who wants to embody
            the fest's infectious enthusiasm, this is your go-to destination.
            Our merchandise isn't just clothing; it's a piece of the fest's
            magic that you can take home. From trendy apparel that'll make you
            stand out to collectibles that commemorate the unforgettable
            moments, we've got it all. So, dive into our virtual aisles, explore
            vibrant designs, and get ready to own a part of the Rendezvous
            experience. It's more than merch it's a piece of fest history you
            can wear proudly, and it's all just a click away.
          </p>
          <button className="merchandise-button btn my-3" onClick={handleClick}>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
