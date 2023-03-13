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
  width: 85%; //This will limit the width of the div to 80%
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0C081A;
  border: 3px solid #fff;
`
const Header = styled.div`
  font-size: 60px;
  color: #fff;
  text-decoration: underline;
  padding: 30px 0px;
`
const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;

  /* flex-wrap: wrap;
  flex: 1 2 0; reset flex property to 0 to allow for manual width assignment */

  /* & > * {
    flex-basis: calc(33.333333% - 20px);
    margin: 10px; 
  } */
`
const InfoContainer = styled.div`
  padding-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;  
`
const Title = styled.div`
  font-size: 20px;
  color: #fff;
`
const Description = styled.div`
  color: #fff;

`
const Tools = styled.div`
  color: #fff;

`
const ImgContainer = styled.div`

`
const Img = styled.img`
  height: 250px;
  width: 300px;
  /* padding: 15px; */
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 100%;
  `
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 15px 25px 0 0;
  color: #000000;
  background-color: ${(props) => props.color};
`

const Projects = () => {
  return (
    <Container>
      <Wrapper>
      <Header>My Projects</Header>
        <ThumbnailContainer>
          <InfoContainer>
          <Title>Umlando Creations</Title>
          <br/>
          <Description>Description: This is a ecommerce site for a labels.</Description>
          <br/>
          <Tools>Tools: VS Code, HTML, CSS, JS, React, MUI, Styled Components</Tools>
          <LinkContainer>
            <Link color="#ffffff" href="https://github.com/LuthoJara" target="_blank">
              <GitHub />
            </Link>
            <Link color="#ffffff" href="https://www.linkedin.com/in/luthojara/" target="_blank">
              <LaunchOutlined />
            </Link>
          </LinkContainer>
          </InfoContainer>
          <ImgContainer>
          <Img src= {UCthumbnail}/>
          </ImgContainer>
          </ThumbnailContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects