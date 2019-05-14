import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
// ReactStrap Imports 
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
Dropdown } from 'reactstrap';












export default class Navlink extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
<section> 


 <div className="hideonmobile"> 
        <Nav center>
      
          <NavItem>
          <NavLink color="#black;" to='/Home'>  <Link to='/'><h4>Home</h4></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='/Data_Visuals'>  <Link to='/Data_Visuals'><h4>Data Visuals</h4></Link></NavLink>
          </NavItem>
          <NavItem>
       
          <NavLink to='Contact'>  <Link to='/Contact'><h4>Contact</h4></Link></NavLink>
          </NavItem>
        </Nav>
</div> 
        <Navbar color="faded" light>
         
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <h2> Welcome </h2>
          <Collapse isOpen={!this.state.collapsed} navbar>
         
            <Nav navbar>
              <NavItem>
              <NavLink color="#black;" to='/Home'>  <Link to='/'><h4>Home</h4></Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink to='/Data_Visuals'>  <Link to='/Data_Visuals'><h4>Data Visuals</h4></Link></NavLink>
              </NavItem>
              <NavItem>
               <NavLink to='Contact'>  <Link to='/Contact'><h4>Contact</h4></Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
         
        </Navbar>
      
      </section> 
    );
  }
}


