import React from 'react'
import styled from 'styled-components'


function Login() {
  return (
    <Container>
        <Section>
            <Image src='https://recipe-app-solution.vercel.app/static/media/meal.9eba888b37c920112c046969b9256a41.svg' />
            <Header>
            &#60;Burak&#62;Recipe
            </Header>
            <Form>
                <Input type="text" placeholder='username' required/>
                <Input type = "password" placeholder='password' required/>
                <Button type='submit'>Login</Button>
            </Form>
            
        </Section>
    </Container>
  )
}


const Container = styled.div`
    background-image: url(https://picsum.photos/1600/900);
    background-repeat: no-repeat;
    height: 100%;
    background-size: cover;
    background-position: center center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`

const Section = styled.div`
width: 600px;
min-width: 600px;
height: 600px;
background-color: rgba(0, 173, 181, 0.5);
border-radius: 50%;
border: 2px solid rgb(225, 241, 221);
padding: 5px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
`

const Image = styled.img`
    width: 150px;
    margin: 1rem;
`

const Header = styled.h1`
color: white;
font-family: Girassol, sans-serif;
font-size: 3rem;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
    height: 50px;
    font-size: 2rem;
    width: 250px;
    border-radius: 5px;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    margin: 1rem;
    text-indent: 20px;
`

const Button = styled.button`
font-size: 2rem;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    cursor: pointer;
    margin: 1rem;
`
export default Login