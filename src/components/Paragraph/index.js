import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 45px;
  font-weight: 400;
  color: ${(props) => props.color || '#000'};
  margin: ${(props) => props.margin || '0 0 0 0'}; 
`;

export const Paragraph = ({
  color,
  margin,
  children,
}) => (
  <StyledSpan
    color={color}
    margin={margin}
  >
    {children}
  </StyledSpan>
);

Paragraph.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.string,
};

Paragraph.defaultProps = {
  color: '#000',
  margin: '0 0 0 0',
  children: '',
};

