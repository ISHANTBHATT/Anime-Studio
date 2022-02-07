import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, useHistory } from 'react-router-dom';
function NavigatorTopBar(props) {
    return (
        <div className="SideBar__Navigation">
            <Link to= "/" className="SideBar__BackButton">
                <ArrowBackIcon className="Back__icon"/>
                <p>Back</p>
            </Link>
            <Link to="/" className="SideBar__Navigation" style={{textDecoration:"none"}}>
                <p style={{marginLeft:"20px",color:"black"}}>Home</p>
            </Link> 
                <p><ArrowForwardIosIcon className="forward__icon" /></p>
                <p>{props.page}</p>
        </div>
    )
}

export default NavigatorTopBar
