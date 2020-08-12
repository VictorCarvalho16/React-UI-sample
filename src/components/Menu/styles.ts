import styled from 'styled-components';

interface MenuProps {
  showMenu?: boolean;
}

const MenuBase = styled.section<MenuProps>`
  background-color: var(--white);
  width: min(299px, 100%);
  min-height: ${(props) => (props.showMenu ? 'max(600px, 100vh)' : 'inherit')};
  margin-top: -1.2rem;
  position: relative;
  float: left;

  @media (max-width: 1200px) {
    position: ${(props) => (props.showMenu ? 'fixed' : 'inherit')};
  }

  @media (max-width: 700px) {
    min-height: ${(props) => (props.showMenu ? '96vh' : 'inherit')};
  }

  h1 {
    padding: 1.2rem;
    padding-bottom: 0rem;
    display: inline-flex;
    margin-right: 7rem;
  }

  button {
    background-color: var(--white);
    border: none;
    font-weight: bold;
    font-size: 1.1rem;
  }

  button:hover {
    color: var(--gray);
  }
`;

const MenuHeader = styled.div`
  color: var(--primary);
  border-bottom: 1px solid var(--gray);
`;

const SideMenu = styled.div<MenuProps>`
  display: ${(props) => (props.showMenu ? 'block' : 'none')};
`;

const MenuProfile = styled.div`
  margin: 1.2rem 0.8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 56px;
    border-radius: 50%;
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
  }

  p span {
    color: var(--gray-text);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0 1rem 1.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid var(--gray);

  li:first-child {
    color: var(--primary);
    svg {
      color: var(--primary) !important;
    }
  }

  li {
    padding: 0.3rem 0.5rem;
    transition: color 0.2s;
    svg {
      transition: color 0.2s;
    }
  }

  li:hover {
    cursor: pointer;
    color: var(--primary) !important;
    svg {
      color: var(--primary) !important;
    }
  }

  li svg {
    margin-right: 0.8rem;
    color: var(--gray);
  }
`;

const MenuSettings = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.3rem 1.5rem;
  transition: color 0.2s;

  svg {
    transition: color 0.2s;
    margin-right: 0.8rem;
    color: var(--gray);
  }

  &:hover {
    cursor: pointer;
    color: var(--primary) !important;
    svg {
      color: var(--primary) !important;
    }
  }
`;

const MenuFooter = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1.5rem;
  color: var(--gray);
  position: absolute;
  bottom: 0;

  &:hover {
    cursor: pointer;
    color: #000000aa;
  }

  svg {
    margin-right: 0.8rem;
  }
`;

export {
  MenuBase, MenuHeader, SideMenu, MenuProfile, MenuList, MenuSettings, MenuFooter,
};
