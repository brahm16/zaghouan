import React, { useState, useEffect,Component } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';
import { NavLink } from 'react-router-dom';

import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";

export default function Sidebar({menu,history}) {
  const mymenu = menu.map((m) => {
    return (
      <li key={m.id} className="items-center">
                <Link
                  className="text-blue-800 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                  to={`${m.url}`}
                >
                  <i className={`${m.icon} opacity-75 mr-2 text-sm`}></i> {m.title}
                </Link>
              </li>
      
    );
  });
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
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blue-900  mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            {name}
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    {name}
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/**chat?name=brahim&room=zaghouan */}
              <li  className="items-center">
                <Link
                  className="text-blue-800 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                  to={`/chat?name=${name}&room=zaghouan`}
                >
                  <i className="opacity-75 mr-2 text-sm"></i> Inbox
                </Link>
              </li>

             {mymenu}
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
          
            {/* Navigation */}
          
          </div>
        </div>
      </nav>
    </>
  );
}
