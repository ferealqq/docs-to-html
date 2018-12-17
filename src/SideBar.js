import React, { Component } from 'react';
import { NavLink,Nav,NavItem,Container,
    Navbar, NavbarBrand, NavbarToggler,Collapse,

} from 'reactstrap';
import { map } from 'lodash';

class SideBar extends Component{
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false,
        };
    }

    toggleNavbar() {
        this.setState({
         collapsed: !this.state.collapsed
        });
    }

    render(){
        let { titles } = this.props;
        return(
            <Nav className="flex-column w-25 h-100 mh-100" pills={true} fill={true} vertical>
                { 
                    map(titles,(title)=>{
                        return <NavTitle key={title.title} title={title.title}/>
                    })
                }
            </Nav>
        );
    }
}
const NavTitle = (props) => (
    <NavItem>
        <NavLink href={props.href}> {props.title} </NavLink>
    </NavItem>    
);

export default SideBar;