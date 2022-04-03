import React from "react";
import styled from "styled-components";
import ReactLogo from "../../assets/home.svg"

function Main() {
  return (
    <div>
      <InputArea>
        <Header>Food App</Header>
        <Form>
            <Input type="text" placeholder="Search" />
            <Button>Search</Button>
            <Select>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </Select>
        </Form>

        <ImageContainer>
          <Image src={ReactLogo} alt="">
            
          </Image>
        </ImageContainer>
      </InputArea>
    </div>
  );
}
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(0, 173, 181);
`;
const Header = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;
const Form = styled.form`
display: flex;
flex-flow: row wrap;
-webkit-box-pack: center;
justify-content: center;
border: 2px solid white;
border-radius: 3px;
margin: 20px;
`;

const Input = styled.input`
height: 3rem;
    width: 15rem;
    border: none;
    border-radius: 3px;
    outline: none;
    text-indent: 10px;
    margin: 5px;
    font-size: 2rem;
`

const Button = styled.button`
background-color: rgb(225, 241, 221);
padding: 5px;
outline: none;
height: 3rem;
border: none;
margin: 5px;
border-radius: 3px;
cursor: pointer;
font-size: 2rem;
`

const Select = styled.select`
border-radius: 3px;
margin: 5px;
padding: 5px;
height: 3rem;
border: none;
font-size: 2rem;
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
`

const ImageContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 50px;
`

const Image = styled.img`
width: 80%;
    max-width: 750px;
`



export default Main;
