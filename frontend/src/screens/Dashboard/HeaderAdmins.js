import React, { useState, useEffect,Component } from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../helpers/auth';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
const Main = styled("div")`
  font-family: sans-serif;
  height: 2rem;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  color: white;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  box-sizing: border-box;
  color: #3faffa;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const HeaderAdmins=({history})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    
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
            <nav class="bg-gray-800 pt-2 md:pt-1 pb-1  mt-0 h-auto fixed  w-full	 z-20 top-0">

            <div class="flex flex-wrap items-center">
              
                
    
                <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                {
                      name ? (
                        <Main >
                        <DropDownContainer>
                          <DropDownHeader onClick={toggling}> Hi {name}        {isOpen? (<ArrowDropUp style={{color:"white"}} fontSize="small" />): (<ArrowDropDown style={{color:"white"}} fontSize="small" />) }</DropDownHeader>
                          {isOpen && (
                            <DropDownListContainer>
                              <DropDownList>
                              {role==='subscriber'? (<ListItem><a>Orders</a></ListItem>):(<ListItem></ListItem>)}
                                <ListItem><NavLink to={`${role}/me`} >Profile</NavLink></ListItem>
                                <ListItem><a onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      his.push("/login")
                    });
                  }} >Logout</a></ListItem>
                              </DropDownList>
                            </DropDownListContainer>
                          )}
                        </DropDownContainer>
                      </Main>
                      
                       ): (<NavLink to="/login">  <span>Login</span></NavLink>) 
                    }
                </div>
            </div>
    
        </nav>
        )
    
}
export default (HeaderAdmins);
