import React, { useState, useEffect,Component } from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';
import { NavLink } from 'react-router-dom';
import UserDropdown from "./UserDropdown.js";

export default function Navbar({history}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role:''
  });
  const loadUser = () => {

    const token = getCookie('token');
    if(token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { role, name, email } = res.data;
        setFormData({ ...formData, role, name, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });

    }
    
   
  }; 
  useEffect(() => {
    loadUser();
  }, []);
  const { name, email,  role } = formData;
  let his = useHistory();
  return (
    <>
      {/* Navbar */}
      <div className=" bg-gray-300 lg:w-10/12">
      <nav className="absolute top-0 left-0  z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className=" mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
          </a>
          {/* Form */}
         
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown name={name} role={role} />
          </ul>
        </div>
      </nav>
      </div>
      {/* End Navbar */}
    </>
  );
}
