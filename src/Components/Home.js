import React from 'react'
import HomeView from './HomeView'
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
        <HomeView/>
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
width:100vw ;
`