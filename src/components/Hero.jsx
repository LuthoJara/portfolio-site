import styled from "styled-components"

import HeroPic from "../files/HeroPic.JPG"

const Container = styled.div`
  height: 50vh;
  background-image: image(${HeroPic}) ;
`

const Hero = () => {
  return (
    <Container>
        Hero section
    </Container>
  )
}

export default Hero