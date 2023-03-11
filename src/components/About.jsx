import styled from "styled-components"

const Container = styled.div`
  background-color: #ffbebe;
  height: 50vh;
  width: 100%;
  display: flex;
`
const Wrapper = styled.div`
  margin: 0 auto; //This will center the div horizontally
  height: auto;
  width: 75%; //This will limit the width of the div to 80%
  background-color: #f20000;
`
const About = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
        
        </ImgContainer>
        <InfoContainer>
        <H1>Hello.....World</H1>
        <Paragraph1>
          My name is Lutho Jara, I'm a front-end developer based in Pretoria
          ,Gauteng, South Africa.
        </Paragraph1>
        <Paragraph2>
         I create well designed, neatly coded interfaces. Regardless of te technology I know
         or which tech stack I specialise in at the moment, one thing is for sure and that is.....
        </Paragraph2>  
        <Paragraph3>
         I AM A PROBLEM SOLVER
        </Paragraph3>      
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default About