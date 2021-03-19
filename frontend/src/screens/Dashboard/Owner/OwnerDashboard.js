import React, { Component } from "react";
import { MENU_OWNER } from "../dashboardMenu/ownerMenu";
import HeaderAdmins from '../HeaderAdmins'
import MainDashboard from '../MainDashboard'
import SidebarAdmins from '../SidebarAdmins'

export default class OwnerDashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          menu: MENU_OWNER,
        };
      }
    
  render() {
    return (
    

          <MainDashboard />
       
    );
  }
}
