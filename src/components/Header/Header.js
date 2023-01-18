import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from '@emotion/react';
import { AiFillVideoCamera } from 'react-icons/ai';
import { Container, Loader } from 'components';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <AiFillVideoCamera size="40px" color={theme.colors.light} />
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
