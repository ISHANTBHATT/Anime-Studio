import React from 'react'
import "../styles/Sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import NavigatorTopBar from './NavigatorTopBar';

function SideBar() {
    return (
        <div className="sideBar">
            <NavigatorTopBar page="Display Product"/>

            <div className="SideBar__Item">
                <p style={{marginBottom: "10px"}}>REFINE BY</p>
                <button className="ViewAll__button">view all</button>
            </div>

            <div className="SideBar__Item">
                <p style={{marginBottom: "10px"}}>SERIES</p>
                <AddIcon className="Add__icon" />
            </div>
            
        </div>
    )
}

export default SideBar
