import React from 'react'
import { BsTrash } from "react-icons/bs"
import { BiEditAlt } from "react-icons/bi"
import { baseURL } from "../utils/constant"
import axios from 'axios';

const List = ({ id, task, setUpdateUI, updateMode }) => {
    
    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        })
    }
    
    return (
        <li>
            {task}
            <div>
                <BiEditAlt  className="icon" onClick={() => updateMode(id, task)}/>
                <BsTrash className="icon" onClick={removeTask} />
            </div>
        </li>
    )
}

export default List