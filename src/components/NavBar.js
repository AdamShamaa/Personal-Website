import React from "react"
import PropTypes from "prop-types"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fade from '@material-ui/core/Fade';

import { Link } from 'react-scroll'

  const navBarStyle = {
    position: "fixed",
    display: "flex",
    right: "2rem",
    top: "35%",
    borderRadius: ".55rem"
  }
  
  const navElementsStyle = {
    color: "black",
    backgroundColor: "rgba(194, 194, 194, 0.7)",
    padding: "1rem 0rem",
    opacity: ".6",
    fontSize: ".9rem",
    fontWeight: "600"
  }
  
  const selectedNavElementStyle = {
    color: "black",
    backgroundColor: "rgba(179, 177, 177, 1)",
    padding: "1rem 0rem",
    opacity: ".6",
    fontSize: ".9rem",
    fontWeight: "600"
  }

class NavBar extends React.Component {
    render(){
        return (
            <Fade in={true} timeout={{enter: 3500}}>
              <Tabs orientation="vertical" style={navBarStyle}>
                  {this.props.menuItems.map((menuItem,index) => {
                      return (
                      <Link to={`section${index}`} offset={-150} smooth={true}>
                          <Tab 
                              key = {index} 
                              label={menuItem} 
                              style={(this.props.selected == index) ? selectedNavElementStyle : navElementsStyle} 
                          />
                      </Link>
                  )})}
              </Tabs>
            </Fade>
        )
    }
}

NavBar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    navBarStyle: PropTypes.object.isRequired,
    navElementsStyle: PropTypes.object.isRequired,
    selected: PropTypes.number.isRequired
}

export default NavBar;