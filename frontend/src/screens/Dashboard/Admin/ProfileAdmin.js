import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';
import UploadImg from '../Main/UploadImg';
const  ProfileAdmin=({history}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio:'',
    pic:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    password1: '',
    textChange: 'Update',
    role: ''
  });
  let pics=formData.pic;

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { role, name, email,bio } = res.data;
       
        setFormData({ ...formData, role, name, email,bio });
        console.log("bio"+formData.bio);
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });
  };
  const { name, email,bio ,pic,password1, textChange, role } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    const token = getCookie('token');
    console.log(token);
    e.preventDefault();
    setFormData({ ...formData, textChange: 'Submitting' });
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/update`,
        {
          name,
          email,
          bio,
          pics,
          password: password1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        updateUser(res, () => {
          toast.success('Profile Updated Successfully');
          setFormData({ ...formData, textChange: 'Update' }); 
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  {/**
  
   const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        pics=reader.result;
      }
    }
    console.log(e.target.files[0].name);
    const formData1 = new FormData();
    const dest= "./upload/profil/"+e.target.files[0]

    formData1.append('file',e.target.files[0]);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      const token = getCookie('token');

      axios.post(`${process.env.REACT_APP_API_URL}/upload`,formData1,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
              alert(error);
      });
      axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/update`,
        {
          name,
          email,
          bio,
          pic:"./upload/profil/"+e.target.files[0],
          password: password1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        updateUser(res, () => {
          toast.success('Profile Updated Successfully');
          setFormData({ ...formData, textChange: 'Update' }); 
        });
      })
      .catch(err => {
        console.log(err.response);
      });
 
    reader.readAsDataURL(e.target.files[0])
  };
  
  */}
 

 
   
      return (
        <div className=" bg-gray-300 lg:w-9/10">
        <div className="relative bg-gray-300	 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
      
           



        
    
    
            
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white mt-12  shadow sm:rounded-lg '>
        <div className='lg:w-full xl:w-9/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
             Update
            </h1>
                    <UploadImg /> 
            {
              /**
               *    <div className="mycontainer">
                      <h1 className="myheading">Add your Image</h1>
                      <div className="myimg-holder">
                          <img src={pics} alt="" id="img" className="img" />
                      </div>
                      <input type="file" accept="image/*"  name="image-upload" id="input" onChange={imageHandler} />
                      <div className="mylabel">
            <label className="myimage-upload" htmlFor="input">
                          Choose your Photo
                      </label>
            </div>
                  </div>
               * 
               */
            }
      

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-full relative '>
                <input
                  disabled
                  className='w-full px-2 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Role'
                  value={role}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='email'
                  placeholder='Email'
                  disabled
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='Name'
                  onChange={handleChange('name')}
                  value={name}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='Biographie'
                  onChange={handleChange('bio')}
                  value={bio}
                />

                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange('password1')}
                  value={password1}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{textChange}</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Go To Home
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/'
                  target='_self'
                >
                  <i className='fas fa-home fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-4'>Home</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        
      
                
          
              </div>
            
          </div>
          </div>
          </div>
            
             
              
           
           
    
            
           
    )
    
}
export default ProfileAdmin;
