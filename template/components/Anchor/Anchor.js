import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { sharedPropTypes } from '@sumup/circuit-ui';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p700};
  transition: color 0.1s ease-in-out;

  &:visited {
    color: ${theme.colors.v700};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${theme.colors.p500};
  }

  &:active {
    text-decoration: underline;
    color: ${theme.colors.p900};
  }
`;

export const A = styled('a')(baseStyles);

/**
 * A basic anchor component for text links.
 */
function Anchor({ children, title, className, id, ...otherProps }) {
  return (
    <Link {...otherProps} passHref>
      <A {...{ title, className, id }}>{children}</A>
    </Link>
  );
}

/**
 * @component
 */
export default Anchor;
