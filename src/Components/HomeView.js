import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import { Link } from 'react-router-dom'

const HomeView = () => {
    const [data , setData] = React.useState([])

    const url = "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json";
    
    const Getdata  = async () => {
        const res = await axios.get(url)
        console.log(res.data.data)
        setData(res.data.data)


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
            <Title>All  movies</Title>

            <ContentHolder>

                {
                    data?.map(({id, poster, title, directed_by})=>(
                        <RouterLink to ={`/Details/${id}`}>
                        <Card key = {id}>
                        <Image src={poster}/>
                       <TextHolder>
                       <Title2>Title:{title}</Title2>
                       <Produced>directed_by:{directed_by}</Produced>
                       </TextHolder>
                       </Card>
                        </RouterLink>
                   
                    ))
                }
            </ContentHolder>

        </Wrapper>
    </Container>
  )
}

export default HomeView

const RouterLink = styled(Link)`
text-decoration:none;
color:black;
`


const Produced = styled.div`
margin-top:5px ;

`
const Title2 = styled.div`
margin-top:5px ;

`
const Desc = styled.div`
margin-top:5px ;
`
const TextHolder = styled.div`
padding-left:10px ;
`

const Image = styled.img`
height:250px ;
width: 300px;
object-fit: cover;

`


const Card = styled.div`
height: 400px;
width: 300px;
background: white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 20px;
text-align:left ;
margin-top: 20px;
`
const ContentHolder = styled.div`
margin-top: 20px;
text-align : center;
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: space-between;

`
const Button = styled.button`
height: 50px;
width: 100px;
border-radius: 15px;
border: none;
background: black;
color: white;
`
const Input = styled.input`
height: 50px;
width: 400px;
background: whitesmoke;
border: none;
border-radius: 13px;
outline: none;
@media screen and (max-width: 768px){
    height: 50px;
width: 250px;
background: whitesmoke;
border: none;
border-radius: 13px;
outline: none;
}
`
const InputHolder = styled.div`
display: flex;
height: 50px;
width: 550px;
justify-content: space-evenly;
@media screen and (max-width: 768px){
display: flex;
height: 50px;
width: 300px;
justify-content: space-evenly;
}
`
const Title = styled.div`
font-size: 20px;
margin-top: 20px;
text-transform: uppercase;
font-weight: bold;
text-align: center;
`
const SearcBar = styled.div`
height : 300px;
margin-top : 70px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px){
height : 300px;
margin-top : 70px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

}
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
align-items: center;
`