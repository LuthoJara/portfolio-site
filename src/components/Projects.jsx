import { GitHub, OpenInBrowser } from "@mui/icons-material"
import styled from "styled-components"
import UCthumbnail from "../files/UCthumbnail.png"

const Container = styled.div` 
  display: flex;
  height: auto;
  width: 100%;
  background-color: #d4af37;
  padding: 10px;
` 
const Wrapper = styled.div`
  margin: 0 auto; //This will center the div horizontally
  width: 75%; //This will limit the width of the div to 80%
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #0C081A;
`
const Header = styled.div`
  font-size: 60px;
  color: #fff;
`
const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Title = styled.div`
  font-size: 20px;
  color: #fff;
`
const ImgContainer = styled.div`

`
const Img = styled.img`
  height: 250px;
  width: 500px;
  /* padding: 15px; */
`
const Links = styled.div`

`
const Projects = () => {
  return (
    <Container>
      <Wrapper>
      <Header>My Projects</Header>
        <ThumbnailContainer>
          <Title>Umlando Creations</Title>
          <ImgContainer>
          <Img src= {UCthumbnail}/>
          </ImgContainer>
          <Links>
            <GitHub/>
            <OpenInBrowser/>
          </Links>
          </ThumbnailContainer>    
      </Wrapper>
    </Container>
  )
}

export default Projects