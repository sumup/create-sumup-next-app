import { css } from '@emotion/core';
import { SumUpLogo } from '@sumup/icons';

import styled from '../../utils/styled';

export const Logo = styled(SumUpLogo)(
  ({ theme }) => css`
    display: block;
    max-width: 120px;
    fill: ${theme.colors.n900};
    margin-bottom: ${theme.spacings.tera};
    margin-top: ${theme.spacings.peta};
  `,
);
