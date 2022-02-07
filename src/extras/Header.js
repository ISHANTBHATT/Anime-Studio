import React from 'react'
// import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Header() {
    return (
            <div className="header">
             {/* <Link to="/"> */}
               <img className="header__logo" src="https://wallpaperaccess.com/full/203908.jpg" />  
                 <h3 className="header__name" style={{color:"#fab818" , marginLeft:"5px"}}>Anime | STUDIO</h3> 
             {/* </Link> */}
             
             <div className="header__search">
                  <input className="header__searchInput" type="test"/>
                  <SearchIcon className="header__searchIcon" style={{height:"30px"}} />
             </div>

            <div className="header__nav">
              {/* <Link to={!user && "/login"}> */}
                   {/* <div onClick={handleAuthentication} className="header__option"> */}
                   <div className="header__option" style={{marginleft:'5px'}}>
                     <span className="header__optionLineOne">Hello, Guest</span>
                     <span className="header__optionLineTwo">Sign In</span>
                   </div>
              {/* </Link> */}
              
              <div className="header__option header__wishlist" style={{marginTop:'5px'}}>
                  <FavoriteBorderIcon />
              </div>

              <div className="header__option header__user" style={{marginRight: '15px', marginTop:'5px'}}>
                   <PermIdentityIcon />
              </div>
        
              {/* <Link to="/checkout"> */}
                  <div className="header__optionBasket">
                       <ShoppingBasketIcon />
                       <span className="header__optionLineTwo header__basketCount" >0</span>
                  </div>
               {/* </Link> */}
            </div>
            
        </div>  
    )
}

export default Header
