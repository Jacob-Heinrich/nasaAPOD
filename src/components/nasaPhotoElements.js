import styled from 'styled-components';
import { Link as LinkScroll} from 'react-scroll';

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display:inline;
  text-decoration:none;
  height: 100%;
  cursor: pointer;

  &:active {
    color: #01bf71;
  }
`;
