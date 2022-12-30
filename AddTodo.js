
import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [time, setTime] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and or description cannot be blank! Please fill in the blank")
        }
        else{
            addTodo(title, desc, time);
            setTitle("");
            setDesc("");
            setTime("");
        }
        

    }
    return (
        <div className="container my-3">
            <h3> Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label"> Title </label>
                    <input type="text" value = {title} onChange ={(e) => {setTitle(e.target.value)}} 
                    className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="time" className="form-label"> Date and Time </label>
                    <input type="text" value = {time} onChange ={(e) => {setTime(e.target.value)}}
                    className="form-control" id="time"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"> Add Note </label>
                    <input type="text" value = {desc} onChange ={(e) => {setDesc(e.target.value)}}
                    className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Done</button>
            </form>
        </div>
    )
}
