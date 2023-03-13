import { GitHub, LinkedIn, YouTube } from "@mui/icons-material";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 0;
  width: 100%;
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 205px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
  justify-content: space-around;
  transform: rotate(90deg);
  width: 75px;
  height: 1rem;
`
const Email = styled.p`
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  color: #0C081A;
  cursor: pointer;
`

const Sidenavbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
  
    //This section is for the sidenavbars so that they stick in place
    const handleScroll = () => {
      if (window.scrollY > .1) {
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
  
  //This section is so that when the email is clicked, it is also copied
  
  const emailRef = useRef(null);

  const handleClick = () => {
    navigator.clipboard.writeText(emailRef.current.textContent);
  };
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
          <Email ref={emailRef} onClick={handleClick}>Luthojaraofficial@gmail.com</Email>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Sidenavbar;
