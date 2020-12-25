import React from "react"
import PropTypes from "prop-types"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';


/**
 * Todo:
 * proptypes
 * finish projects, links, project informatoin
 */

const cardStyle = {
    display: "block",
    flexBasis: "16rem",
    height: "auto",
    margin: "2rem",
    paddingBottom: "1.3rem"
}

const cardActionAreaStyle = {
    height: "17.5rem",
    width: "100%"
}

const cardMediaStyle = {
    height: "15rem",
    width: "100%"
}

const projectInformationStyle = {
    fontSize: "1.3rem",
    margin: ".8rem",
    fontWeight: "500"
}

const cardActionStyle = {
    justifyContent: "center"
}

class Project extends React.Component {
    render(){
        return (
            <Card style={cardStyle} key={this.props.key}>
                <CardActionArea style={cardActionAreaStyle}>
                    <CardMedia 
                        component = "img"
                        style= {cardMediaStyle}
                        image= {this.props.imageName}
                       
                    />
                    <h5 style={projectInformationStyle}>
                        {this.props.name}
                    </h5>
                </CardActionArea>
                <CardActions style={cardActionStyle}>
                    {this.props.gitHubLink ? <Button variant="outlined" href={this.props.gitHubLink} target="_blank"><GitHubIcon /></Button> : ""}
                    {this.props.otherLink ? <Button variant="outlined" color="primary" href={this.props.otherLink} target="_blank"><CallMadeIcon/></Button> : ""}
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