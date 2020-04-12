import { css } from '@emotion/core';

import styled from '../../utils/styled';

/**
 * SVG files can be imported and used as React components.
 */
import LogoIcon from './svgs/logo.svg';

export const Logo = styled(LogoIcon)(
  ({ theme }) => css`
    display: block;
    max-width: 120px;
    fill: ${theme.colors.n900};
    margin-bottom: ${theme.spacings.tera};
    margin-top: ${theme.spacings.peta};
  `,
);
