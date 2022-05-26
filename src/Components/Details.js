import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id}  = useParams()
    const [myData , setmyData] = React.useState([])

    const url = "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json";
    
    const fetchdata  = async () => {
        const res = await axios.get(url)
       
        if(res){
            setmyData(res.data.data[id.length && id.length- 1])
            console.log(myData)
        }


    }

    React.useEffect(()=>{
        fetchdata()
    },[])
  return (
    <Container>
        <Wrapper>
           
            <ContentHolder>

               
                <>
                    <Image src={myData&& myData.poster}/>
                   <TextHolder>
                   <Title2>Title:{myData&& myData.title}</Title2>
                   <Desc>Description:{myData&& myData.description}</Desc>
                   <Produced>directed_by:{myData&& myData.description}</Produced>
                   <Time>crawled_at:{myData&& myData.crawled_at}</Time>
                   <Url>url :{myData&& myData.url}</Url>


                   </TextHolder>
                </>
                   
            </ContentHolder>

        </Wrapper>
    </Container>
  )
}

export default Details

const Time = styled.div``
const Url = styled.div``



const Produced = styled.div`
margin-top:5px ;

`
const Title2 = styled.div`
margin-top:5px ;
font-size:20px ;
font-weight:bold;
text-transform:uppercase ;

`
const Desc = styled.div`
margin-top:5px ;
`
const TextHolder = styled.div`
padding-left:10px ;
`

const Image = styled.img`
height: 400px;
width: 100%;
object-fit: cover;

`


const Card = styled.div`
height: 400px;
width: 100%;
background: white;
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
text-align:left ;

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
margin-top: 70px;
`