import React from 'react';
import { css } from '@emotion/core';
import { SumUpLogo } from '@sumup/icons';

import styled from '../../utils/styled';

const StyledLogo = styled(SumUpLogo)(
  ({ theme }) => css`
    display: block;
    max-width: 120px;
    color: ${theme.colors.black};
    margin: ${theme.spacings.tera} 0;
  `,
);

export const Logo = () => (
  <a
    href="https://sumup.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open SumUp's homepage in a new tab"
    title="Open SumUp's homepage in a new tab"
  >
    <StyledLogo />
  </a>
);
