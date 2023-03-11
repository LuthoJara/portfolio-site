import { GitHub, LinkedIn, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  w100%
  z-index: 20;
  `
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: ${props => props.sticky ? "fixed" : "relative"};
  top: 0;
  left: 0;
  /* right: 0; */
  z-index: 20;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`
const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 10px;
  color: #fff;
  background-color: ${(props) => props.color};
`
const Right = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  transform: rotate(90deg);
  /* padding-right: 10px; */
`
const Email = styled.p`
  /* font-weight: 400; */
  font-size: 1.2em;
  margin: 0;
  padding: 0;
`
const Sidenavbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSticky]);
  return (
    <Container>
      <Wrapper sticky={isSticky}>
        <Left>
          <SocialContainer>
            <SocialIcons color="#000000" href="https://github.com/LuthoJara" target="_blank">
              <GitHub />
            </SocialIcons>
            <SocialIcons color="#224b9c" href="https://www.linkedin.com/in/luthojara/" target="_blank">
              <LinkedIn />
            </SocialIcons>
            <SocialIcons color="#ff0000" href="https://www.youtube.com/channel/UCGyfna7rcLB6v95xvVsE0Jw" target="_blank">
              <YouTube />
            </SocialIcons>
          </SocialContainer>
        </Left>
        <Right>
          <Email>_____Luthojaraofficial@gmail.com_____</Email>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Sidenavbar;
