import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 65px;
  font-weight: 500;
  color: ${(props) => props.color || '#000'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  display: inline-block; 
`;

export const Header = ({
  color,
  margin,
  children,
}) => (
  <StyledHeader
    color={color}
    margin={margin}
  >
    {children}
  </StyledHeader>
);

Header.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.string,
};

Header.defaultProps = {
  color: '#000',
  margin: '0 0 0 0',
  children: '',
};

