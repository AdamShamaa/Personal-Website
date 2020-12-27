import React from "react"
import PropTypes from "prop-types"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "2rem",
    paddingBottom: "1.3rem",
    justifyContent: "space-between"
}

const cardActionAreaStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}

const cardMediaStyle = {
    height: "20rem",
    minWidth: "23rem"
}

const projectInformationStyle = {
    fontSize: "1.5rem",
    margin: ".8rem",
    fontWeight: "500"
}

const cardActionStyle = {
    justifyContent: "center"
}

const buttonStyle = {
    fontSize: "2rem",
    padding: ".5rem 1.5rem"
}

//Mobile Support
const cardStyleMobile = {...cardStyle}
cardStyleMobile.minWidth = "110%"

class Project extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Card style={this.props.isMobile ? cardStyleMobile : cardStyle} key={this.props.key}>
                <CardActionArea style={cardActionAreaStyle}>
                    <CardMedia>
                        <img 
                        src={this.props.imageName}
                        style={cardMediaStyle}
                        ></img>
                    </CardMedia>
                    <h5 style={projectInformationStyle}>
                        {this.props.name}
                    </h5>
                </CardActionArea>
                <CardActions style={cardActionStyle}>
                    {this.props.gitHubLink ? <Button variant="outlined" href={this.props.gitHubLink} target="_blank" fontSize="inherit" style={buttonStyle}><GitHubIcon fontSize="inherit"/></Button> : ""}
                    {this.props.otherLink ? <Button variant="outlined" color="primary" href={this.props.otherLink} target="_blank" fontSize="inherit" style={buttonStyle}><CallMadeIcon fontSize="inherit"/></Button> : ""}
                </CardActions>
            </Card>
        )
    }
}

Project.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    imageName: PropTypes.string,
    gitHubLink: PropTypes.string,
    otherLink: PropTypes.string
}


export default Project