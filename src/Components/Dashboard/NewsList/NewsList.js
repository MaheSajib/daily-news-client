import React, { useEffect, useState } from 'react';

const NewsList = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        fetch('https://infinite-sands-56335.herokuapp.com/newsList')
        .then(res => res.json())
        .then(data => setList(data))

    }, [])

    const handleStatus = (event, id) => {
        const status = event.target.value;
        const url = `https://infinite-sands-56335.herokuapp.com/newsList/processStatus?status=${status}&id=${id}`;
        fetch(url , {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <h1>This is News List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(list =>
                            <tr>
                                <td>{list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.service}</td>
                                <td>{list.category}</td>
                                <td> <select onChange={(event) => handleStatus(event , list._id)} id="inputState" class="form-control">
                                    <option selected>{list.status}</option>
                                    <option>Pending</option>
                                    <option>On Going</option>
                                    <option>Done</option>
                                </select></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;