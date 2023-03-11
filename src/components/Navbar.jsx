//Importing for the sticky menu
import { useState, useEffect } from "react";
import styled from "styled-components";

//Importing the logo
import LJLogo from "../files/LJLogo.png";
import CV from "../files/CV.pdf";
// import { GitHub, LinkedIn, YouTube } from "@mui/icons-material";

const Container = styled.div`
height: auto;
width: 100%;
padding-bottom: 5px;
`
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0C081A;

//Making the menu sticky
  height: ${props => props.sticky ? "4rem" : "7rem"};
  padding: ${props => props.sticky ? "5px 10px" : "10px 20px"};
  position: ${props => props.sticky ? "fixed" : "relative"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  `
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 10vh;
`
const MenuItem = styled.div`
  width: auto;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;

  &:hover{
  color: #d4af37
  }
`
const Logo = styled.img`
  height: auto;
  width: 11vw;
  cursor: pointer;
  border-radius: 50%;
`
const Right = styled.div`
  flex: 7;
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
    } if (window.scrollY < 100) {
      setSticky(false);
    } 
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  }
  }, [setSticky])

  // On the Download CV it enables you to download the CV
  const handleButtonClick = () => {
    window.open(CV, '_blank');
  }

  return (
    <Container>
      <NavbarWrapper sticky={isSticky}>
        <Left>
          <MenuItem>
            <Logo src={LJLogo} />
          </MenuItem>
        </Left>
        <Right>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Portfolio Projects</MenuItem>
          <MenuItem>Contact Me</MenuItem>
          <MenuItem onClick={handleButtonClick}>Download CV</MenuItem>
        </Right>
      </NavbarWrapper>
    </Container>
  );
};
export default Navbar