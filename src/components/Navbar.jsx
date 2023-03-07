//Importing for the sticky menu
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

//Importing the logo
import HeroPic from "../files/HeroPic.JPG";


const Container = styled.div`
  height: auto;
  background-color: #000000;
  padding-bottom: 5px;

  //Making the menu sticky
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;

//Making the menu sticky
  height: ${props => props.sticky ? "5rem" : "8rem"};
  padding: ${props => props.sticky ? "0px 10px" : "20px 40px"};
  position: ${props => props.sticky ? "fixed" : "relative"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`
const MenuItem = styled.div` 
  font-size: 1.4rem;
  width: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  padding-right: 15px;
` 
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.img`
  height: auto;
  width: 13vw;
  cursor: pointer;
`
const Right = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

useEffect(() => {
  // Reset scroll position on page load
  window.scrollTo(0, 0);

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
          <MenuItem>
            {/* <Logo src={} /> */}
          </MenuItem>
        </Left>
        <Right>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Portfollio Projects</MenuItem>
          <MenuItem>Contact Me</MenuItem>
          <MenuItem>Download CV</MenuItem>
          <MenuItem>
           <HamburgerMenu/>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;