import React from 'react';
import lemonLogo from 'assets/img/Lemonade_Stand.png';

import { Paragraph } from 'components/Paragraph';
import {
  StyledBusinessesView,
  StyledBusinessItem,
  StyledButton,
  StyledContent,
  StyledHead,
  StyledQuantity,
} from './styles';

const BusinessesView = () => (
  <StyledBusinessesView>
    <StyledBusinessItem>
      <StyledHead>
        <img
          src={lemonLogo}
          alt="lemon"
        />
        <StyledQuantity>
          <Paragraph
            color="white"
          > 
            99
          </Paragraph>
        </StyledQuantity>
      </StyledHead>
      <StyledContent>

        <StyledButton>
          <Paragraph
            color="white"
          >
            Buy
          </Paragraph>
        </StyledButton>
      </StyledContent>
    </StyledBusinessItem>
  </StyledBusinessesView>
);

export default BusinessesView;
