import React ,{useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {useDataLayerValue} from "../DataLayer";
import {auth} from "../firebase";
import "../styles/Header.css";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Headerbottom from './Headerbottom';
>>>>>>> e06be3b9508ef699111af0f964d932ec1bb45b6a

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    // pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [{basket, user}, dispatch] = useDataLayerValue();
  const [inputValue, setinputValue] = useState("");

  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }

  // function send() {
  //     console.log('hi');
  // }

  const send = () => {
    console.log('hi')
  }
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

      <Link to={!user && "/login"} style={{color:"black",textDecoration: "none"}}>
      <MenuItem onClick={handleAuthentication}>{user ? 'Logout': 'Login'}</MenuItem>
      </Link>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/wishList" style={{color:"black",textDecoration: "none"}}>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
          <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p style={{marginBottom: "0"}}>Favorite</p>
      </MenuItem>
      </Link>
      

      <Link to="/checkout" style={{color:"black",textDecoration: "none"}}>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={basket?.length} color="secondary">
            <ShoppingBasketIcon />
            </Badge>
          </IconButton>
          <p style={{marginBottom: "0"}}>ShoppingBasket</p>
        </MenuItem>
      </Link>
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PermIdentityIcon />
        </IconButton>
        <p style={{marginBottom: "0"}}>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{backgroundColor: "#131921"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">
          <img className="header__logo" src="https://wallpaperaccess.com/full/203908.jpg" />  
          </Link>
          
          <Typography className={classes.title} variant="h6" noWrap>
          Anime | STUDIO
          </Typography>


          <div className={classes.grow} />
          <div className={classes.search}>

          
            <div className={classes.searchIcon} >
            {/* <Link to={`/searchResult/${inputValue}`} > */}
            <Link to={`/searchResult/${inputValue}`} style={{color:"White"}}>
              <SearchIcon />
              </Link>
            </div>
             

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              // value={inputValue}
              onChange={e => setinputValue(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <Link to="/wishList" style={{color:"White"}}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
              <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            </Link>


            <Link to="/checkout" style={{color:"White"}}>
             <IconButton aria-label="show 17 new notifications" color="inherit">
               <Badge badgeContent={basket?.length} color="secondary">
               <ShoppingBasketIcon />
               </Badge>
             </IconButton>
            </Link>
            
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <PermIdentityIcon />
              </IconButton>
            
          </div>
          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
<<<<<<< HEAD
=======
      
      <div>
        <AppBar position="fixed" className='appBar' style={{backgroundColor: "#222227"}}>
          <Toolbar >
            <ul className='header_Bottom_list'>
              <li>
                <WhatshotIcon />
                <p>Trending</p>
                </li>
                <li>
                <ShoppingBagIcon />
                <p>Accessories</p>
                </li>
                <li>
                <CheckroomIcon />
                <p>Clothing</p>
                </li>
                <li>
                <LiveTvIcon />
                <p>Series</p>
                </li>
                <li>
                <WhatshotIcon />
                <p>Trending</p>
                </li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
      

>>>>>>> e06be3b9508ef699111af0f964d932ec1bb45b6a
    </div>
  );
}
