import React, { Component } from 'react'
import HeaderAdmins from '../HeaderAdmins'
import MainDashboard from '../MainDashboard'
import SidebarAdmins from '../SidebarAdmins'
import {MENU_USER} from "../dashboardMenu/userMenu"
import { Route, Switch } from 'react-router'
import ProfileAdmin from './ProfileAdmin'
import { MENU_ADMIN } from '../dashboardMenu/adminMenu'

export default class DashboardAdmin extends Component {
    
      
    render() {
        return (
           
               



                <MainDashboard />

              
        )
    }
}
