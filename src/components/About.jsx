import styled from "styled-components"
import HeroPic from "../files/HeroPic.JPG"

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
  background-color: #0C081A;
`
const Img = styled.img`
  height: 150px;
  width: 150px;
  padding: 15px;
`
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`
const InfoContainer = styled.div`
 color: #fff;
 padding: 30px 15px;
`
const H1 = styled.h1`
 &:hover{
  color: #d4af37;
  }
`
const Paragraph1 = styled.p`
 &:hover{
  color: #d48837;
  }
`
const Paragraph2 = styled.p`
 color: #ffffff;
 &:hover{
  color: #d48837;
  }
`
const Paragraph3 = styled.p`
 &:hover{
  color: #d48837;
  }
`
const Paragraph4 = styled.p`
 &:hover{
  color: #d48837;
  }
`
const About = () => {
  return (
    <Container>
      <Wrapper> 
        <ImgContainer>
        <Img src= {HeroPic}/>
        </ImgContainer> 
        <InfoContainer>
        <H1>Hello.....World.</H1>
        {/* <br/> */}
        <Paragraph1>
         My name is Lutho Jara, I'm a front-end developer based in Pretoria
         ,Gauteng, South Africa.
        </Paragraph1>
        {/* <br/> */}
        <Paragraph2>
         I create well designed, neatly coded interfaces. Regardless of the language I know
         or which tech stack I specialise in at that moment, one thing is for sure and that is,
        </Paragraph2>  
        {/* <br/> */}
        <Paragraph3>
         I am a problem solver.
        </Paragraph3>
        {/* <br/> */}
        <Paragraph4>
         I solve problems using code and I get the job done as efficiantly as possible.
        </Paragraph4>      
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default About