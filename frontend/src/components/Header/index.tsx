import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo-novo-zenvia.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  function openModel() {
    localStorage.removeItem('tour');
    if (window.location.pathname === '/') {
      document.location.reload(true);
    }
  }

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="Zenvia" />
        <nav>
          <Link to="/" onClick={openModel}>
            Tour
          </Link>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
