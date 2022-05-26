import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <LogoHolder>
                <LogoH>Movie</LogoH>
            </LogoHolder>
            <NavBar>
                <NavMenu>Home</NavMenu>
            </NavBar>
        </Wrapper>
    </Container>
  )
}

export default Header

const NavBar = styled.div``
const NavMenu = styled.div``
const LogoH = styled.div`
text-transform : uppercase;
`
const LogoHolder = styled.div``
const Wrapper = styled.div`
height: 70px;
width: 90vw;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
height: 70px;
width: 100vw;
display: flex;
justify-content: center;
background-color: black;
min-height: calc(100vh-70px);
position: fixed;
z-index: 1;
top: 0;
bottom: 0;
left: 0;
color : white;
align-items : center;
`