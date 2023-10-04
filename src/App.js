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
    const [curencys1, setcurency1] = useState([
        {id:1, name:'RUB'},
        {id:2, name:'EUR'},
        {id:3, name:'USD'},
        {id:4, name:'JPY'},
        {id:5, name:'GBP'},
        {id:6, name:'AUD'},
    ])

  return (
    <div className="App">
        <Convert curencys = {curencys1}/>
    </div>
  );
}

export default App;
