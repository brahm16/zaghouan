import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';import { createPopper } from "@popperjs/core";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserDropdown = ({name,role}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  let his = useHistory();

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt={name}
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <NavLink
          to={`${role}`}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          
        >
          Home
        </NavLink>
        <NavLink
          to={`${role}/me`}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
         
        >
          Profile
          </NavLink>
          <NavLink
          to=""
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Orders
          </NavLink>

        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => {
            signout(() => {
              toast.error('Signout Successfully');
              his.push("/login")
            });
          }}
        >
          Logout
          
          </a>
      </div>
    </>
  );
};

export default UserDropdown;
