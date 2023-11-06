import "./Merchandise.css";
import merch from "./merch.png";
import mask from './merch-mask.png'
import SidebarNav from "../../components/SidebarNav/SidebarNav";

export default function Merchandise() {
  return (
    <div className="merchandise-container-boss">
      <SidebarNav />
      <div className="merchandise-container">
        <h1 className="merchandise-heading">Merchandise</h1>
      </div>
      <div className="merchandise-image">
        <img src={merch} alt="merchandise" className="merchandise-img" />
      </div>
      <div className="merchandise-text">
        <p className="merchandise-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor
          velit, blandit nec blandit ut, vestibulum id risus. Proin commodo
          tortor a tincidunt interdum. Curabitur quis diam tristique, placerat
          est id, rhoncus lorem. Maecenas congue nec est sit amet ullamcorper.
          Nunc laoreet ligula nec suscipit consectetur. Mauris laoreet mi et
          lorem fermentum tincidunt. Nullam convallis justo eget elit luctus
          aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor
          velit, blandit nec blandit ut, vestibulum id risus. Proin commodo
          tortor a tincidunt interdum. Curabitur quis diam tristique, placerat
          est id, rhoncus lorem. Maecenas congue nec est sit amet ullamcorper.
          Nunc laoreet ligula nec suscipit consectetur. Mauris laoreet mi et
          lorem fermentum tincidunt. Nullam convallis justo eget elit luctus
          aliquet.
        </p>
      </div>
      <div className="merchandise-button-boss">
        <img src={mask} alt="merchandise" className="merchandise-mask" />
        <button className="merchandise-button-2">BUY NOW</button>
      </div>
    </div>
  );
}
