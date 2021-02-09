import React,{useState,useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Players from './Component/Players/Players';
import MainHeader from './Component/MainHeader/MainHeader';

function App() {

  const [Playerdata,setPlayerData] = useState([]);
  const [searchText,setSearchText] = useState('');
  const URL = 'https://api.npoint.io/d6bd0efc05639084eb17/';
 


  useEffect(() => {
       fetch(URL)
       .then(res => res.json())
       .then(data => setPlayerData(data.playerList))
       .catch(err => console.log(err))
  },[searchText])


  function onClickhandler(){
      const temApp =  Playerdata?.filter(player => player.PFName.includes(searchText));
      setPlayerData(temApp)      
  }

  return (
    <div className="App">
         <MainHeader
            setSearchText={setSearchText} 
            onClickhandler={onClickhandler}/>
      
         <Players Playerdata={Playerdata}/>
    </div>
  );
}

export default App;
