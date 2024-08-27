import { useState } from "react";

export function CreateTodo(props) {
    const {title, setTitle} =useState("");
    const {description,setDescription} = useState("");
    return <div>
        <input id ="title" style={{
            padding: 10,
            margin: 10}}
            type="text" placeholder="title"></input> <br></br>
        <input id="desc" style={{
            padding: 10,
            margin: 10}} type="text" placeholder="description" onChange={function(e){
                const value =e.target.value;
                setDescription(e.target.value);
            }}></input> <br></br>

        <button style={{
            padding: 10,
            margin: 10}} onclick={function (){
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body:JSON.stringify( {
                        title:  title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async function(res) {
                    const json =await res.json();
                    alert("Todo added");
                })
            }} > Add a Todo</button>
    </div>
}