import React from 'react';
import './Player.css';
import {Tag} from 'antd'

function Player({ player }) {
    return (
        <div className="player-card">
            <h2>{player.PFName}</h2>  
            <img src={process.env.PUBLIC_URL +`/player-images/${player.Id}.jpg`} alt={player.PDName } className="player_image"/>
           <p> value :<b>{player.Value}</b>$</p>
            <p>
                UpComing Event 
              {player.UpComingMatchesList?.map(upevent => {
                    return (
                        <>
                           <Tag>{upevent.CCode}</Tag>
                           <Tag>{upevent.VsCCode}</Tag>
                           <Tag>{upevent.MDate}</Tag>
                        </>
                    )
              })}    
            </p> 
        </div>
    )
}

export default Player
