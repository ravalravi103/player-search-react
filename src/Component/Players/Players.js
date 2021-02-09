import React from 'react';
import Player from '../Player/Player';
import './Players.css';

function Players({Playerdata}) {
    return (
        <div>

             {/* <Teams temasData={data.teamsList}/> */}
             <div className="card-list">
                {Playerdata?.map((p,i) => {
                    return (
                        <Player key={i} player={p}/>
                    )
                })}
             </div>
             
        </div>
    )
}

export default Players
