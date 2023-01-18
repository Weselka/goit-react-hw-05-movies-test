import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.div`
  // display: flex;
  background: #fff;
  // max-width: 800px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  // position: relative;

  margin-left: auto;
  margin-right: auto;
`;

export const MovieWrapper = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);

  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;

export const Image = styled.img`
  //  width: 150px;

  // position: relative;
  border-radius: 8px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const MovieTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  color: #333;
  margin-bottom: 10px;
  padding-left: ${props => props.theme.spacing.step * 7}px;
`;

export const MovieSubTittle = styled.p`
  padding-left: ${props => props.theme.spacing.step * 7}px;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-top: ${props => props.theme.spacing.step * 2}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin-top: ${props => props.theme.spacing.step * 7}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin-top: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin-top: ${props => props.theme.spacing.step * 20}px;
  }
`;

export const MovieText = styled.p`
  padding-left: ${props => props.theme.spacing.step * 7}px;
  padding-right: ${props => props.theme.spacing.step * 7}px;
  font-size: ${props => props.theme.fontSizes.small};

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

export const NavLinkSecondary = styled(NavLink)`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.small};
  // font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapperSecondary = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.step * 5}px;

  // padding: ${props => props.theme.spacing.step * 7}px;

  padding: 10px;
  margin-left: ${props => props.theme.spacing.step * 7}px;
`;
