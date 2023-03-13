import { GitHub, LaunchOutlined } from "@mui/icons-material"
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
  background-color: #0C081A;
  border: 1px solid #fff;
`
const Header = styled.div`
  font-size: 60px;
  color: #fff;
`
const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* flex-wrap: wrap;
  flex: 1 2 0; reset flex property to 0 to allow for manual width assignment */
  
  & > * {
    flex-basis: calc(33.333333% - 20px); /* set width of each item to one-third of the Wrapper's width minus margin */
    margin: 10px; /* add some margin between each item */
  }
`
const Title = styled.div`
  font-size: 20px;
  color: #fff;
`
const ImgContainer = styled.div`

`
const Img = styled.img`
  height: 250px;
  width: 300px;
  /* padding: 15px; */
`
const Links = styled.div`
  color: #fff;

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
            <LaunchOutlined/>
          </Links>
          </ThumbnailContainer>    
      </Wrapper>
    </Container>
  )
}

export default Projects