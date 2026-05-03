import classes from '../style/About.module.css'
import lalitkaim from '../lalitkaim.jpg'
import lalit from '../lalitk.jpeg'
import Projects from './Projects';
import Education from './Education';
import Language from './Language';
import Extra from './Extra';
import Experience from './Experience';
import Contact from './Contact';
import Skill from './Skill';
import Blog from './Blog';
import React from "react";

function About(props){
    const a = [95,70,80,70,80,70,90];

    if(props.isDark){
        document.body.style.color = "white"
        let x = document.getElementsByClassName("myBlock")
        for(let i=0;i<x.length;i++)
            x[i].style.backgroundColor="#2d2d2d"
    }
    else{
        document.body.style.color = "black";
        let x = document.getElementsByClassName("myBlock")
        for(let i=0;i<x.length;i++)
            x[i].style.backgroundColor="white"
    }
    return <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12 col-12 mb-4">
                    <div className="section p-4 myBlock" id="about">
                        {/* <h2>Lalit</h2> */}
                        {/* <h4>Software Engineer</h4> */}
                        <p><span className={classes.firstLetter} style={{color:"#e31b6d"}}>H</span>ello, and welcome to my Software Engineer <span style={{color:"#e31b6d"}}>Portfolio</span>! My name is Lalit, 
                            and I am a passionate and dedicated software engineer with a strong background 
                            in designing and developing innovative software solutions. Here, you will find a 
                            collection of projects and experiences that showcase my technical skills, problem-solving abilities, 
                            and enthusiasm for creating cutting-edge applications. I invite you to explore my work and get to 
                            know more about my journey as a software engineer.</p>
                        <div id="resume">
                            <a className="btn" style={{backgroundColor:"#e31b6d", color:"white"}} href="#">View Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="section myBlock p-4">
                        <img src={lalit} className="img-fluid"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <div className="section myBlock p-4">
                        <h2>What I do?</h2>
                        <p>I am a software engineer with over <b style={{color:"#e31b6d"}}>3+ years</b> of experience and holds Master's degree in Computer Science, 
                            currently working at <a href="https://www.qualcomm.com/" target="_blank" style={{textDecoration:"none"}}><b style={{color:"#e31b6d"}}>Qualcomm</b></a>, Hyderabad on GSM technology. My journey in software development began with a love for 
                            solving puzzles and a fascination for technology. Over the years, I have honed my skills in various
                             programming languages, web technologies, and software development methodologies, allowing me to
                              approach challenges with creativity and efficiency.</p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className={"col-lg-7 col-md-8 col-sm-12 "+classes.aboutMe}>
                    <div className="section p-4 myBlock">
                        <h2>About Me</h2>
                        <div>
                            <p><b>Languages : </b>Java, C</p>
                            <p><b>Frameworks : </b>Spring Boot, Bootstrap</p>
                            <p><b>Libraries : </b>ReactJs</p>
                            <p><b>Tools : </b>Git, Perforce</p>
                            <p><b>Editors : </b>VS Code, Source Insight, Eclipse, IntelliJ etc.</p>
                            <p><b>Operating System : </b>Windows, Linux</p>
                        </div>
                        {/* <h5>Experience</h5> */}
                        <hr/>
                        <div>
                            <p><b>Total Experience : </b> 3+ Years</p>
                            <p><b>Current Employer : </b> <a href="https://www.qualcomm.com/" target="_blank" style={{textDecoration:"none",color:"#e31b6d"}}>Qualcomm</a></p>
                        </div>
                    </div>
                    <br/>
                    <Projects/>
                    <br/>
                    <Experience/>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12" id="skills">
                    <div className="section p-4 myBlock">
                        <h2>Skills</h2>
                        <Skill name="Java" width={a[0]}/>
                        <Skill name="Spring Boot" width={a[1]}/>
                        <Skill name="C" width={a[2]}/>
                        <Skill name="ReactJs" width={a[3]}/>
                        <Skill name="BootStrap" width={a[4]}/>
                        <Skill name="Javascript" width={a[5]}/>
                        <Skill name="HTML & CSS" width={a[6]}/>
                    </div>
                    <br/>
                    <div className="section">
                        <Education/>
                        <br/>
                        <Language/>
                        <br/>
                        <Extra/>
                        <br/>
                        <Blog/>
                        <br/>
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About;