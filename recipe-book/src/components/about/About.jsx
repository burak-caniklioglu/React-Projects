import React from 'react'
import styled from 'styled-components'
import ReactLogo from '../../assets/about.svg'

function About() {
  return (
    <AboutContainer>
        <Image src={ReactLogo}></Image>
        <AboutPerson>
            <h1>
                About Sofware Developer
                <span>  Burak</span>
            </h1>
        </AboutPerson>
        
        <AboutInfo>
        <h2>Hi, I'am Burak</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</h4>
        <h2><a href="mailto:burakcaniklioglu@gmail.com">Send email</a> : burakcaniklioglu@gmail.com</h2>
        </AboutInfo>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
display: flex;
flex-flow: column wrap;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
min-height: calc(100vh - 80px);
line-height: 2;
margin-bottom: 2rem;
`
const Image = styled.img`
width: 500px;
margin-bottom: 2rem;
`

const AboutPerson = styled.div`
span{
    color: white;
    font-family: Girassol, sans-serif;
    font-size: 3rem;
}
`

const AboutInfo = styled.div`
text-align: right;
    margin: 0px 10px;
    max-width: 1000px;
    border: 1px solid white;
    padding: 25px;
    border-radius: 5px; 

    a{
        color: white;
    }
`



export default About


