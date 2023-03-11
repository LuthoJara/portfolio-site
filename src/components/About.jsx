import styled from "styled-components"
import HeroPic from "../files/HeroPic.JPG"

const Container = styled.div`
  /* background-color: #ffbebe; */
  display: flex;
  height: 50vh;
  width: 100%;
`
const Wrapper = styled.div`
  margin: 0 auto; //This will center the div horizontally
  height: auto;
  width: 75%; //This will limit the width of the div to 80%
  background-color: #f20000;
`
const ImgContainer = styled.img`
height: 250px;
width: 250px;
`
const InfoContainer = styled.div`

`
const H1 = styled.h1`

`
const Paragraph1 = styled.div`

`
const Paragraph2 = styled.div`

`
const Paragraph3 = styled.div`

`
const Paragraph4 = styled.div`

`
const About = () => {
  return (
    <Container>
      <Wrapper> 
        <ImgContainer src= {HeroPic}/>
        <InfoContainer>
        <H1>Hello.....World</H1>
        <br/>
        <Paragraph1>
          My name is Lutho Jara, I'm a front-end developer based in Pretoria
          ,Gauteng, South Africa.
        </Paragraph1>
        <br/>
        <Paragraph2>
         I create well designed, neatly coded interfaces. Regardless of the language I know
         or which tech stack I specialise in at that moment, one thing is for sure and that is.....
        </Paragraph2>  
        <br/>
        <Paragraph3>
         I AM A PROBLEM SOLVER
        </Paragraph3>
        <br/>
        <Paragraph4>
         I solve problems using code and I get the job done as efficiantly as possible
        </Paragraph4>      
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default About