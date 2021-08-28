import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function Userslist() {
    let [lists, setLists] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => setLists(...response.data));

    }, [])
    console.log(lists)
    return (
        <div>
            {lists.map((list)=><User list={list}/>
            )}
        </div>
    )
}

export default Userslist
