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

import SimpleReactLightbox from 'simple-react-lightbox'
import { useLightbox } from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import "../components/layout.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: "25px 96px 0 96px",
  fontFamily: 'Open Sans'
}

const introductoryHeadingStyle = {
  fontSize: "2rem",
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
  marginTop: "15rem"
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
  width: "90%",
  justifyContent: "center",
  minHeight: "90vh",
  margin: "2.5rem 0"
}

const projectsBarStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-between"
}

const markStyle = {
  display: "inline-block",
  lineHeight: "0em",
  paddingBottom: "0.5em",
  position: "relative",
  backgroundColor: "#15f4ee",
  wrap: "wrap",
  backgroundColor: "white"
}

//data
const attributes = ["Student", "Software Developer"]
const navElements = ["Homepage", "Projects", "About Me", "Contact Me"]
const projects = [
  {
    name: "Food Service Comparison",
    description: "",
    imageName: "FoodServiceComparison.png",
    gitHubLink: "https://github.com/AdamShamaa/Food-Service-Comparison-Frontend"
  },{
    name: "Slider Puzzle Solver",
    description: "",
    imageName: "SliderPuzzle.png",
    gitHubLink: "https://github.com/AdamShamaa/SliderPuzzle"
},{
    name: "Amancom Security Systems",
    description: "",
    imageName: "Amancom-Website-Demo.png",
    gitHubLink: "https://github.com/AdamShamaa/Amancom-Security-Systems",
    otherLink: "https://amancom.ca/"
},{
    name: "Sorting Vizualizer",
    description: "",
    imageName: "SortingVisualizer.png",
    gitHubLink: "https://github.com/AdamShamaa/Sorting-Visualizer-Stats"
},{
    name: "Smart Image Resizer",
    description: "",
    imageName: "ImageResizer.gif",
    gitHubLink: "https://github.com/AdamShamaa/Smart-Image-Resizing"
}]


//Page Elements
const HomePage = () => {
  return (
    <div style = {sectionStyle} id="section0">
      <h1 style = {introductoryHeadingStyle}>Hey There!</h1>  
      <div>
        <h2 style={nameHeadingStyle}>I'm Adam Shamaa, </h2>
        <AttributeComponent attributes={attributes} style={attributeStyle} delayMS={2500}/>
      </div>
      <div style={iconBarStyle}>
          <IconButton href="mailto:adamshamaa@gmail.com" target="_blank" style={iconButtonStyle} children={<MailOutlineIcon style={iconStyle}/>}/>
          <IconButton href="https://github.com/AdamShamaa" target="_blank" style={iconButtonStyle} children={<GitHubIcon style={iconStyle} />}/>
          <IconButton href="https://www.linkedin.com/in/AdamShamaa/" target="_blank" style={iconButtonStyle} children={<LinkedInIcon style={iconStyle} />}/>
      </div>
    </div>
  )
}

const AboutMe = () => {
    const { openLightbox, closeLightbox } = useLightbox()
    return (
      <div style = {sectionStyle} id="section1">
        <br/>
        <h1 style = {introductoryHeadingStyle}>Here's a little bit about me</h1>  
        <h2>I'm currently studying <mark style={markStyle}>Computer Engineering</mark> at the University of Waterloo. Two of my favorite things are learning + coffee and I have a passion for programming and working on projects whenever I get the chance (AKA whenever I'm not working on a school assignment!).</h2>
        <h2>I've also had the chance to do some cool things such as leading my schools robotics club, <a onClick={() => openLightbox(0)} style={{color: "#0066CC", textDecoration: "underline", cursor: "pointer"}}>(check out the arm we built during my time there, which is one component of the entire open-sourced robot)</a>.</h2>
        <h2>Whenever possible, I try to get involved in my community. I've had the opportunity of volunteer throughout my community with over 310 hours in areas such as STEM summer camps, my local city library and local city hospital.</h2>
        <br/>
        <h2>But enough about me... Let's get in touch!</h2>
        <h2>If you're a student, I'd love to <mark style={markStyle}> work on a project and/or connect!</mark></h2>
        <h2>If you're a recruiter, I'd love to <mark style={markStyle}>learn about your company and possible roles!</mark></h2>
        <SRLWrapper
          options = {{
            buttons: {
              showAutoplayButton: false,
              showThumbnailsButton: false,
            }
          }}
         >
          <div style={{display: "none"}}>
            <img src="robotic3.jpg"></img>
            <img src="robotic4.jpg"></img>
            <img src="robotic1.jpg"></img>
            <img src="robotic2.jpg"></img>
          </div>
        </SRLWrapper>
      </div>
    )
}

const Projects = () => {
  return (
    <div style = {sectionStyle} id="section2">
      <h1 style = {introductoryHeadingStyle}> Feel free to check out a few of my projects</h1> 
      <div style={projectsBarStyle}>
        {projects.map((project, index) => {
          return (
            <Project name={project.name} key={index} description={project.description} imageName={project.imageName} gitHubLink={project.gitHubLink} otherLink={project.otherLink}/>
          )
        })}
      </div>
    </div>
  )
}

const ContactMe = () => {
  return (
    <div style = {sectionStyle} id="section3">
      <h1 style = {introductoryHeadingStyle}> Let's talk!</h1> 
      <br /><br />
      <div style={{display: "flex", justifyContent: "center"}}>
        <Form />
      </div>
    
    </div>
  )
}

const sections =[HomePage, Projects, AboutMe, ContactMe];

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
      }
    }
    
    this.onSectionEnter = this.onSectionEnter.bind(this);
    this.onSectionExit = this.onSectionExit.bind(this);
    this.highlightSection = this.highlightSection.bind(this);
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
        <main style={pageStyles}>
          <title>Adam Shamaa</title>
          <SimpleReactLightbox>
            <NavBar menuItems={navElements} selected={this.state.currentSectionNumber}/>
            {sections.map((SingleSection, index) => {
              return (
                <Fade in={this.state.inView[`section${index}`]} timeout={{enter: 1000, exit: 500}} key={index}>
                  <InView onChange={(inView, entry) => {
                    if (inView) this.onSectionEnter(index)
                    else this.onSectionExit(index)
                    }}>
                      <InView threshold={0.3} onChange={(inView, entry) => {
                        if (inView) this.highlightSection(index)
                        }}>
                          {<SingleSection />}   
                      </InView>
                  </InView>
                </Fade>
              )
            })}
          </SimpleReactLightbox>
        </main>
    )
  }
}


export default IndexPage
