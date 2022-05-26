import React from 'react'
import styled from 'styled-components'
import axios from "axios"

const HomeView = () => {
    const [data , setData] = React.useState([])

    const api_host = 'movie-database-alternative.p.rapidapi.com';
    const api_key = "'a29d108543msh05466b581fe504bp1ac8b7jsn7448e32e1a9d"
    const url = 'https://movie-database-alternative.p.rapidapi.com/';
    
    const Getdata  = async () => {
        const res = await axios.get(url, {params : {s: 'Avengers Endgame', r: 'json', page: '1',api_key,api_host}})
        console.log(res.data)


    }

    React.useEffect(()=>{
        Getdata()
    },[])
  return (
    <Container>
        <Wrapper>
            <SearcBar>
                <Title>Search for movie</Title>
                <InputHolder>
                <Input/>
                <Button>Search</Button>
                </InputHolder>
            </SearcBar>
            <ContentHolder>
                <Title>All  movies</Title>

                <Card></Card>
            </ContentHolder>

        </Wrapper>
    </Container>
  )
}

export default HomeView
const Card = styled.div`
height: 400px;
width: 400px;
background: white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-raduis: 20px;
`
const ContentHolder = styled.div`
margin-top: 20px;
text-align : center;
`
const Button = styled.button`
height: 50px;
width: 100px;
border-raduis: 15px;
border: none;
background: white;
color: black;

`
const Input = styled.input`
height: 50px;
width: 400px;
background: white;
border: none;
border-raduis: 13px;
outline: none;
`
const InputHolder = styled.div`
display: flex;
height: 50px;
width: 550px;
justify-content: space-evenly;
`
const Title = styled.div`
font-size: 20px;
text-transform: uppercase;
font-weight: bold;
`
const SearcBar = styled.div`
height : 300px;
margin-top : 70px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`
const Wrapper = styled.div`
height : 100vh;
width: 90vw;
display: flex;
flex-direction: column;
margin-top: 20px;
`
const Container = styled.div`
height : 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-itema: center;
background-color: whitesmoke;

`