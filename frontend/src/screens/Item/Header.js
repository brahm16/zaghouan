import React, { useState, useEffect,Component } from 'react';
import authSvg from '../../assests/update.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../../helpers/auth';
import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";

import { useHistory } from "react-router-dom";

import { NavLink, Redirect  } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import LanguageSelect from "../LanguageSelect";
import { Button } from 'reactstrap';
const Main = styled("div")`
  font-family: sans-serif;
  height: 100vh;
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

const Header=({history})=> {
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
      <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
            
              <div className="email" >
                <div >
                <LanguageSelect />

                </div>
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
              <div class="logo">
                <NavLink to="/home">
                  {" "}
                  <span className="my-title">Zaghouan</span>
                </NavLink>
              </div>
              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li className="dropdown_li">
                        <a href="#" class="active"> Home</a> 
                      </li>
                      <li className="dropdown_li">
                       <a href="#"> About</a>
                      </li>
                      <li className="dropdown_li">
                        <a>Services</a>
                      </li>
                      <li className="dropdown_li">
                       <a href="#">Places</a>
                      </li>
                      <li className="dropdown_li">
                       <a href="#">Contact</a>
                      </li>
                    
                      <li className="dropdown_li">
              
                    {
                      name ? (
                        <Main style={{marginTop:"1rem"}}>
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
                                                 
                        
                      {/*  {
                          user.name ?
                          (""):
                          (
                            <NavLink to="/login">  <span>{t('login')}</span></NavLink>

                             
                          )
                        }
                           */}               </li>
                     
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div  className="links">
                        <a href="#" style={{color:"white"}} ><i style={{color:"white"}} class="fab fa-facebook-f"></i></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="search_link" id="search_link"></div>

              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default (Header);
