import mask from './mask.svg'
import data from './about-data.svg'
// import './Aboutus.css'
import React from 'react'

export default function Aboutus() {
    return (
        <div className="aboutus-container-boss">
            <div className='aboutus-mask-boss'>
            <img src={mask} alt="mask" className='aboutus-mask'/>
            </div>
            <div className='aboutus-text'>
                <h1 className='aboutus-heading'>About Us</h1>
                <h2 className='aboutus-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor velit, blandit nec blandit ut, vestibulum id risus. Proin commodo tortor a tincidunt interdum. Curabitur quis diam tristique, placerat est id, rhoncus lorem. Maecenas congue nec est sit amet ullamcorper. Nunc laoreet ligula nec suscipit consectetur. Mauris laoreet mi et lorem fermentum tincidunt. Nullam convallis justo eget elit luctus aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor velit, blandit nec blandit ut, vestibulum id risus. Proin commodo tortor a tincidunt interdum. Curabitur quis diam tristique, placerat est id, rhoncus lorem. Maecenas congue nec est sit amet ullamcorper.
                 Nunc laoreet ligula nec suscipit consectetur. Mauris laoreet mi et lorem fermentum tincidunt.</h2>   
            </div>
            <div className='aboutus-data'>
            <img src={data} alt="data" className='aboutus-data'/>
            </div>
            
            

        </div> 
    )
}