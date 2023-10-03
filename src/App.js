import React, {useState} from "react";
import './styles/App.css'
import './styles/Convert.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Convert from "./components/Convert";
import axios from "axios";
function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'клоп', body:'писечки'},
        {id:2, title:'шлёк', body:'впрврвар'},
        {id:3, title:'попочки', body:'писечки'},
    ])
    const [curencys, setcurency] = useState([
        {id:1, name:'RUB'},
        {id:2, name:'EUR'},
        {id:3, name:'USD'},
    ])
    const [resp, setResp] = useState();
    async function changeCurency(){
        const responce = await axios.get('')
        console.log(responce.data)
    }

  return (
    <div className="App">
        <Convert curencys = {curencys}/>
    </div>
  );
}

export default App;
