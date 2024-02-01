import { useRecoilState } from "recoil";
import { todoAtom } from "../../state/atoms/todoAtom";
import { useState } from "react";

export default function AddTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todo, setTodo] = useRecoilState(todoAtom);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {title, description}]);
    }

    return (
        <>
            <label htmlFor="title">Title</label>
            <input 
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label htmlFor="description">Description</label>
            <input 
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button 
                onClick={handleSubmit}
            >Add Todo</button>
        </>
    );
}