import * as React from "react"

import AttributeComponent from "../components/AttributeComponent";
import NavBar from "../components/NavBar";
import Form from "../components/Form";

import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Project from "../components/Project"
import { InView } from 'react-intersection-observer';
import "@fontsource/open-sans" 
import "@fontsource/open-sans/600.css" // Weight 500.

import "../components/layout.css"


// styles
const pageStyle = {
  color: "#232129",
  fontFamily: 'Open Sans, sans-serif',
  overflowX: "hidden",
  maxWidth: "100%",
  padding: "36px 96px 0 96px",
  fontWeight: "500"
}

const introductoryDivStyle = {
  position: "relative",
  top: "5vh",
  marginLeft: "1rem",
  overflow: "hidden"
}

const introductoryHeadingStyle = {
  fontSize: "1.9rem",
  fontWeight: "bold"
}

const nameHeadingStyle = {
  fontSize: "1.8rem",
  marginLeft: "2rem",
  display: "inline"
}

const attributeStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  display: "inline"
}

const iconBarStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "29vh"
}

const iconStyle = {
  color: "black",
  fontSize: "2.7rem",
  padding: "1rem"
}

const iconButtonStyle = {
  padding: ".2rem",
  margin: "1.5rem",
  backgroundColor: "lightgrey",
  color: "black"
}

const sectionStyle = {
  maxWidth: "100%",
  justifyContent: "center",
  minHeight: "70vh",
  margin: "10vh 0",
  paddingRight: "100px"
}

const contactSectionStyle = {
  maxWidth: "100%",
  justifyContent: "center",
  margin: "10vh 0",
  paddingRight: "100px"
}


const projectsBarStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around",
  minWidth: "100%"
}

//Mobile Styles
const sectionStyleMobile = {...sectionStyle}
sectionStyleMobile.paddingRight = "0px"

const contactSectionStyleMobile = {...contactSectionStyle}
contactSectionStyleMobile.paddingRight = "0px"
contactSectionStyleMobile.minHeight = "30vh"

const pageStyleMobile = {...pageStyle}
pageStyleMobile.padding = "0 5%"
pageStyleMobile.minWidth = "80%"

const nameHeadingStyleMobile = {...nameHeadingStyle}
nameHeadingStyleMobile.marginLeft= "0"

//data
const attributes = ["Student", "Software Developer"]
const navElements = ["Homepage", "Projects", "About / Contact"]
const projects = [
  {
    name: "Food Service Comparison",
    description: "",
    imageName: "FoodServiceComparison.png",
    gitHubLink: "https://github.com/AdamShamaa/Food-Service-Comparison-Frontend"
  },{
    name: "Smart Image Resizer",
    description: "",
    imageName: "ImageResizer.gif",
    gitHubLink: "https://github.com/AdamShamaa/Smart-Image-Resizing"
},{
  name: "Sorting Vizualizer",
  description: "",
  imageName: "SortingVisualizer.png",
  gitHubLink: "https://github.com/AdamShamaa/Sorting-Visualizer-Stats"
},{
  name: "Slider Puzzle Solver",
  description: "",
  imageName: "SliderPuzzle.png",
  gitHubLink: "https://github.com/AdamShamaa/Slider-Puzzle"
}]

//Page Elements
const HomePage = (props) => {
  return (
    <div>
      <div style = {introductoryDivStyle}>
        <h1 style = {introductoryHeadingStyle}>Hey There!</h1> 
        <h2 style={props.isMobile ? nameHeadingStyleMobile: nameHeadingStyle}>I'm Adam Shamaa, </h2>
        {props.isMobile ? <br /> : null}
       <AttributeComponent attributes={attributes} style={attributeStyle} delayMS={1500}/>
      </div>
      <div style={iconBarStyle}>
          <IconButton href="mailto:adamshamaa@gmail.com" target="_blank" style={iconButtonStyle} children={<MailOutlineIcon style={iconStyle}/>}/>
          <IconButton href="https://github.com/AdamShamaa" target="_blank" style={iconButtonStyle} children={<GitHubIcon style={iconStyle} />}/>
          <IconButton href="https://www.linkedin.com/in/AdamShamaa/" target="_blank" style={iconButtonStyle} children={<LinkedInIcon style={iconStyle} />}/>
      </div>
    </div>
  )
}

const Projects = (props) => {
  return (
    <div >
      <h1 style = {introductoryHeadingStyle}> Since you're here... <br/> Feel free to check out a few of my projects!</h1> 
      <div style={projectsBarStyle}>
        {projects.map((project, index) => {
          return (
            <Project isMobile={props.isMobile} name={project.name} key={index} description={project.description} imageName={project.imageName} gitHubLink={project.gitHubLink} otherLink={project.otherLink}/>
          )
        })}
      </div>
    </div>
  )
}

const AboutMe = (props) => {
  return (
    <div>
        <br/>
        <h1 style = {introductoryHeadingStyle}>Here's a little bit about me</h1>  
        <h2>I'm currently studying Computer Engineering at the University of Waterloo. 
          <br/>My two favorite things? Learning + Coffee.
          <br/>I also enjoy working on projects whenever I get the chance (AKA whenever I'm not working on a school assignment!).
        </h2>
        <h2>
          But enough about me...
        </h2>
        <br /><br /><br /><br />
        <h1 style = {introductoryHeadingStyle}> Let's talk!</h1> 
        <br /><br />
        <div style={{display: "flex", justifyContent: "center"}}>
          <Form isMobile={props.isMobile}/>
        </div>
    </div>
  )
}

const ContactMe = (props) => {
  return (
    <div>
      <h1 style = {introductoryHeadingStyle}> Let's talk!</h1> 
      <br /><br />
      <div style={{display: "flex", justifyContent: "center"}}>
        <Form isMobile={props.isMobile}/>
      </div>
    </div>
  )
}

const sections =[HomePage, Projects, AboutMe];


// markup
class IndexPage extends React.Component  {
  constructor(props){
    super(props);

    this.state = {
      currentSectionNumber: 0,
      inView: {
        section0: false,
        section1: false,
        section2: false,
        section3: false
      },
      isMobile: true,
      width: 0,
    }
    
    this.onSectionEnter = this.onSectionEnter.bind(this);
    this.onSectionExit = this.onSectionExit.bind(this);
    this.highlightSection = this.highlightSection.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  }

  handleResize = (e) => {
    this.setState({isMobile: window.innerWidth <= 550, width: window.innerWidth})
  }

  highlightSection = (sectionNumber) => {
    this.setState({
      currentSectionNumber: sectionNumber,
    })
  }

  onSectionEnter = (sectionNumber) => {
    let inView = this.state.inView;
    inView[`section${sectionNumber}`] = true;
    this.setState({
      inView
    })
  }

  onSectionExit = (sectionNumber) => {
    let inView = this.state.inView;
    inView[`section${sectionNumber}`] = false;
    this.setState({
      inView
    })
  }

  render(){
    return (
        <main style={(this.state.isMobile) ?  pageStyleMobile : pageStyle}>
          <title>Adam Shamaa</title>
              {this.state.width <= 650 ? null : <NavBar menuItems={navElements} selected={this.state.currentSectionNumber}/> }
                {sections.map((SingleSection, index) => {
                  return (
                    <Fade in={this.state.inView[`section${index}`]} timeout={{enter: 1000, exit: 500}} key={index}>
                      <InView threshold={0.1} onChange={(inView, entry) => {
                        if (inView) this.onSectionEnter(index)
                        else this.onSectionExit(index)
                        }}>
                          <InView threshold={0.3} onChange={(inView, entry) => {
                            if (inView) this.highlightSection(index)
                            }}>
                              <div style={(this.state.width <= 650) ? sectionStyleMobile : sectionStyle} id={`section${index}`}>
                                {<SingleSection isMobile={this.state.isMobile}/>}  
                              </div>
                          </InView>
                      </InView>
                    </Fade>
                  )
                })} 
          </main>
    )
  }
}


export default IndexPage
