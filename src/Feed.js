import "./Feed.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feed() {


  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [dataB, setData] = useState([]);
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/wel/')
      .then(response => {
       
    if(response.status===200){


        setData(response.data)
       
       console.log(response.data)
       debugger
        response.data.map(row=>{
          axios.get('http://127.0.0.1:8000/get_image/?image='+row.image)
          .then(function (response) {
            console.log(response.data);
            debugger
            console.log('http://127.0.0.1:8000/get_image/?image='+row.image)
            setImage(response.data)
          })
        })
      
    }
      }) 
    
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleImageChange =(event) => {
    setImageURL(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/create/', {
      username: username,
      text: text,
      image: imageURL
    }).then(function (response) {
      console.log(response);
    })
    setUsername('');
    setText('');
    setImageURL('')
    
  };

  return (
    <div className="feed">
    <form onSubmit={handleSubmit} className='usernameBox1'>
      <div className='feed__header'   style={{color: "white"}}>
        <div className="homeText">
        <h2>Home</h2>
        </div>
        <div className='usernameBox'>

          <label>
            <input placeholder="Enter Username" id='input' type="text" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <br />
        <label>
        
          <input placeholder="Enter Text" type="text" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <label>
          Upload:
          <input  type="file" value={imageURL} onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit" id="submitbtn">Submit</button>
      </div>
      <div className='flex2'>
        <table id='table'>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Text</th>
              <th>Timestamp</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>

            {console.log(dataB, "data", typeof dataB)}
            {dataB?.map(row => {
              const timestamp = new Date(row.timestamp);
              const now = new Date();
              const timeSinceCreated = Math.floor((((now - timestamp) / 1000)/60)/60);
              console.log(row.image)
              
              // axios.get('http://127.0.0.1:8000/get_image/?image='+row.image)
              // .then(function (response) {
              //   console.log(response);
              //   setImage(response['data'])
              // })
              console.log('http://127.0.0.1:8000/get_image/?image='+row.image);
              return (
                <tr key={row.id}>
                  <td>{row.username}</td>
                  <td>{row.text}</td>
                  <td>{timeSinceCreated} hrs</td>
                  <td><img src={image} alt="image"/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </form>
    </div>
  );
}

export default Feed