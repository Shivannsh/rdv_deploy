// import "./Merchandise.css"
import mech_img from "../../../assets/img/mech_2.png"
import merch_mask from "../../../assets/img/Mechandise_page/mask_merch.png"

function Merchandise() {

    return (
        <div className="merchandise-container-boss">
            <img src={merch_mask} alt="merchandise" className="merchandise-mask" />

        <div className="merchandise-container">
            <div className="merchandise-container-img">
                <img src={mech_img} alt="merchandise" className="merchandise-img" />
            </div>

            <div className="merchandise-container-text">
                <div className="merchandise-text">
                    <h1>Merchandise</h1>
                    <div className="merchandise-text-para">
                        <p >
                            Welcome to the official Rendezvous merchandise store, your gateway to the heart and soul of the most exhilarating fest of the year. Rendezvous, a name synonymous with boundless energy, excitement, and unforgettable memories, is back in full swing. And now, you can not only be a part of the fest but also wear your Rendezvous spirit with pride.
                        </p>
                        <p>
                            Step into a world where every t-shirt, hoodie, and accessory carries a piece of the Rendezvous experience. Whether you're a dedicated fan, a first-time attendee, or simply someone who wants to embody the fest's infectious enthusiasm, this is your go-to destination. Our merchandise isn't just clothing; it's a piece of the fest's magic that you can take home. From trendy apparel that'll make you stand out to collectibles that commemorate the unforgettable moments, we've got it all. So, dive into our virtual aisles, explore vibrant designs, and get ready to own a part of the Rendezvous experience. It's more than merch it's a piece of fest history you can wear proudly, and it's all just a click away.
                        </p>
                    </div>
                <div className="merchandise-text-button">
                    <button className="merchandise-button">See All Merch</button>
                </div>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Merchandise;