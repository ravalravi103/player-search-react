import React from 'react';
import './MainHeader.css';


function MainHeader({setSearchText, onClickhandler}) {

    return (
        <div className="main-header">
             
             <input type="text" placeholder="Search" className="serach__input-box" onChange={(e) => setSearchText(e.target.value)}/>
             <button type="primary" className="search-btn" onClick={onClickhandler}>Search</button>
        </div>
    )
}

export default MainHeader
