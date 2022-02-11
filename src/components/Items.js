import React from 'react'
import { Link} from 'react-router-dom';


function Items(props) {
    return (
        <div>
      <div className="item">

        <Link to={`/displayProduct/${props.id}`}>
          <div className="content">
            <img className="img" src={props.img}  />
          </div>
        </Link>
        
       
       <div className="previews">
         <div className="preview-image">
           <img style={{width:"100%", height:"100%"}} src={props.img2} />
         </div>
         <div className="preview-image">
           <img style={{width:"100%", height:"100%"}} className="img" src={props.img3} />
         </div>
         <div className="preview-image">
           <img style={{width:"100%", height:"100%"}} className="img" src={props.img4} />
         </div>
         <div className="preview-image">
           <img style={{width:"100%", height:"100%"}} className="img" src={props.img5} />
         </div>
         <div className="preview-image">
           <img style={{width:"100%", height:"100%"}} className="img" src={props.img6} />
         </div>
       </div>
     </div>
        </div>
    )
}

export default Items
