import styled from 'styled-components';

// * Props
interface NavbarProps {
  isHidden: boolean;
}

interface ButtonProps {
  isClicked: boolean;
}

interface ContentWrappedProps extends NavbarProps {
  isClicked: boolean;
}

const NavbarStyled = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  overflow-x: hidden;
`;

// * Styles
const Navbar = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const NavbarExtended = styled(Navbar)<NavbarProps>`
  background: green;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  /* padding: 10px; */
  justify-content: space-between;
  justify-content: flex-start;
  align-items: center;
  z-index: ${props => (props.isHidden ? -1 : 1)};

  & a {
    padding: 0 10px;
    word-break: keep-all;
    white-space: nowrap;
    text-transform: capitalize;
  }

  /* Overloads Overflow checks if under max-width */
  @media screen and (max-width: 800px) {
    z-index: -1;
  }
`;

const NavbarWrappedStyled = styled(Navbar)<NavbarProps>`
  background: orange;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;

  z-index: ${props => (props.isHidden ? -1 : 1)};

  /* Overloads Overflow checks if under max-width */
  @media screen and (max-width: 800px) {
    z-index: 1;
  }
`;

const MenuButtonStyled = styled.button`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  position: relative;
  margin-right: 36px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  background: black;
  position: absolute;
`;

const Top = styled(Line)<ButtonProps>`
  transform: rotate(0);
  transition: 0.2s transform ease, 0.2s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '7px')};
  transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const Center = styled(Line)<ButtonProps>`
  top: 17px;
  transition: 0.2s opacity ease, 0.2s, 0.2s background ease;
  opacity: ${props => (props.isClicked ? 0 : 1)};
`;

const Bottom = styled(Line)<ButtonProps>`
  transform: rotate(0);
  transition: 0.2s transform ease, 0.2s top ease, 0.2s background ease;
  top: ${props => (props.isClicked ? '17px' : '27px')};
  transform: ${props => (props.isClicked ? 'rotate(-45deg)' : 'rotate(0deg)')};
`;

const ContentWrapped = styled.div<ContentWrappedProps>`
  position: fixed;
  /* 108px = 36px button * 3 */
  width: calc(100vw - 108px);
  height: 100vh;
  background: black;
  top: 0;
  left: 0;
  overflow-y: auto;
  color: white;
  transition: transform 0.2s ease;
  transform: ${props =>
    props.isClicked ? 'translate(0%, 0)' : 'translate(-100%, 0)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: ${props => (props.isHidden ? 0 : 1)};

  & a {
    font-size: 28px;
    margin: 1em 0.4em 0 0.4em;
    word-break: break-all;
    white-space: normal;
    text-transform: capitalize;

    &:last-child {
      margin: 1em 0.4em 1em 0.4em;
    }
  }

  /* Overloads Opacity if under max-width */
  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`;

export {
  NavbarStyled,
  NavbarExtended,
  NavbarWrappedStyled,
  Top,
  Bottom,
  Center,
  MenuButtonStyled,
  ContentWrapped,
};
