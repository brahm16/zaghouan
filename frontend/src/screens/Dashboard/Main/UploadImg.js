import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';

export default class UploadImg extends Component {
    state={
      profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          this.setState({profileImg: reader.result})
        }
      }
      console.log(e.target.files[0].name);
      const formData = new FormData();

      formData.append('file',e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(`${process.env.REACT_APP_API_URL}/upload`,formData,config)
            .then((response) => {
                toast.success("image uploaded successfully")
            }).catch((error) => {
                toast.error("error something wrong")
        });
      reader.readAsDataURL(e.target.files[0])
    };
      render() {
      const { profileImg} = this.state
          return (
                  <div className="mycontainer">
                      <h1 className="myheading">Add your Image</h1>
                      <div className="myimg-holder">
                          <img src={profileImg} alt="" id="img" className="img" />
                      </div>
                      <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                      <div className="mylabel">
            <label className="myimage-upload" htmlFor="input">
                          Choose your Photo
                      </label>
            </div>
                  </div>
          );
      }
  }