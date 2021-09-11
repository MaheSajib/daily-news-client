import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddNews = () => {
    
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData ={
            title: data.title,
            description: data.description,
            author: data.author,
            category: data.category,
            imageURL: imageURL
        };
        const url = `http://localhost:5500/addNews`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side responce', res))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '70ba2cebd82dcad56d0ec6fbcd9134cf')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div>
            <h1>Adding new News Post.</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '450px', borderRadius: '10px' }} className="container m-5 w-75 justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <h5>News Title</h5>
                            <input type="text" className="form-control" placeholder="Enter Title" {...register("title")} />
                        </div>
                        <div className="col">
                            <h5>Image</h5>
                            <input type="File" placeholder="Upload Image" onChange={handleImageUpload} />
                        </div>
                    </div>
                    <br />
                    <div className="col">
                        <h5>Description</h5>
                        <textarea className="form-control" placeholder="Enter Description" {...register("description", { required: true })} />
                    </div>
                    <br/>
                    <div className="col">
                        <h5>Author</h5>
                        <input className="form-control" placeholder="Enter Author" {...register("author", { required: true })} />
                    </div>
                    <br />
                    <div className="col">
                        <h5>Category</h5>
                        <input className="form-control" placeholder="Enter Category" {...register("category", { required: true })} />
                    </div>
                    <br/>
                    <div className="text-right mx-5">
                        <input type="submit" className="btn-success"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNews;