import { GitHub, LinkedIn, YouTube } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    height: auto;
    top: 0;
    left: 0;
    width: 50px;
    background-color: #000000;
    padding-bottom: 5px;
`
const Links = styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;

`
const SocialIcons = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Sidenavbar = () => {
    return (
      <Container>
          <Links>
              <SocialContainer>
                 <SocialIcons color="#000000" >
                     <GitHub/>
                 </SocialIcons>
                 <SocialIcons color="#224b9c" href="instagram.com" target={"_blank"}>
                     <LinkedIn/>
                 </SocialIcons>
                 <SocialIcons color="#ff0000" href="twitter.com" target={"_blank"}>
                     <YouTube/>
                 </SocialIcons>
              </SocialContainer>
          </Links>
      </Container>
    )
  }
  
  export default Sidenavbar