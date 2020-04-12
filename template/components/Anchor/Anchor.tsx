import React, { FC } from 'react';
import { css } from '@emotion/core';

import styled from '../../utils/styled';

export type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

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

const A = styled.a(baseStyles);

/**
 * A basic anchor component for text links.
 */
export const Anchor: FC<AnchorProps> = (props) => {
  const rel = props.target === '_blank' ? 'noopener noreferrer' : props.rel;
  return <A {...props} rel={rel} />;
};
