import React, { useState, useEffect } from 'react';
import { Input } from '../../../Components';
import './index.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("all");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            const newData = {
                title: title,
                desc: desc,
                status: false
            }
            setTitle("")
            localStorage.setItem('todos', JSON.stringify(data));
            setDesc("")
            setData([...data, newData])
            localStorage.setItem('todos', JSON.stringify([...data, newData]));

        }
    }
    const deleteTodo = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };
    const handleFilter = (filter) => {
        setFilter(filter);
    };
    useEffect(() => {
        const savedData = localStorage.getItem('todos');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);
    return (
        <div className="containerData my-3">
            <div className='formContainer'>
                <h3 className='main-header'>Add Todo</h3>
                <form className='formData' onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        {/*<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" /> */}
                        <Input placeholder={"Add Task"} type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        {/* <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" /> */}
                        <Input placeholder={"Other"} type={"text"} value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div className='btnSubmit'>
                        <button type="submit" className="AddBtn">Add Todo</button>
                    </div>
                </form>
            </div>
            <div className='DataDetail'>
                <h1 className='dataHeader'>Todo List</h1>
                <div className="filterButtons">
                    <FormControl sx={{ m: 1, minWidth: 120, borderColor: "white" }} size="small">
                        <InputLabel id="demo-select-small-label" sx={{ color: "skyblue", borderColor: "white" }}>Status</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            // value="all"
                            label="Status"
                            sx={{ color: "#0d81d9", borderColor: "white" }}
                        // onChange=
                        >
                            <MenuItem value={"All"} onClick={() => handleFilter("all")}>All</MenuItem>
                            <MenuItem value={"Complete"} onClick={() => handleFilter("complete")}>Complete</MenuItem>
                            <MenuItem value={"Incomplete"} onClick={() => handleFilter("incomplete")}>Incomplete</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <table className='table w-50 text-white'>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Desc</th>
                            <th>st</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i, index) => {
                            if (
                                (filter === "complete" && !i.status) ||
                                (filter === "incomplete" && i.status)
                            ) {
                                return null;
                            }
                            return (
                                <tr key={index} className='mt-5 dataInfo'>
                                    <td><button className='btn btn-primary'
                                        // disabled={i.status}
                                        onClick={(e) => {
                                            const newData = data.map((task) => {
                                                return task.title === i.title
                                                    ? { ...task, status: !task.status }
                                                    : task;
                                            })
                                            setData(newData)
                                            localStorage.setItem('todos', JSON.stringify(newData));
                                        }}>{i.status ? "InComplete" : "Complete"}</button></td>
                                    <td className={i.status ? "statusOn" : "statusOff"}>{index + 1}</td>
                                    <td className={i.status ? "statusOn" : "statusOff"}>{i.title}</td>
                                    <td className={i.status ? "statusOn" : "statusOff"}>{i.desc}</td>
                                    <td className={i.status ? "statusOn" : "statusOff"}>{i.status ? "true" : "false"}</td>
                                    <td>
                                        <button className="deleteBtn" onClick={() => deleteTodo(index)} >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}