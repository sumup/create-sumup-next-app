import React from 'react';
import { NextPage } from 'next';
import { css } from '@emotion/core';
import { Card, Heading, List, Text } from '@sumup/circuit-ui';

import styled from '../utils/styled';
import { Meta } from '../components/Meta';
import { Logo } from '../components/Logo';
import { Anchor } from '../components/Anchor';

const Container = styled('section')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 450px;
    margin: 0 auto ${theme.spacings.kilo};
  `,
);

const centeredStyles = css`
  text-align: center;
`;

const title = 'Welcome to SumUp Next.js';

const Page: NextPage = () => (
  <>
    <Meta title={title} path="/" />
    <Container>
      <a href="https://sumup.com" target="_blank" rel="noopener noreferrer">
        <Logo />
      </a>
      <Card>
        <Heading size={Heading.TERA} css={centeredStyles}>
          {title}
        </Heading>
        <Text>
          This is a{' '}
          <Anchor href="https://github.com/zeit/next.js" target="_blank">
            Next.js
          </Anchor>
          -based starter project featuring some{' '}
          <Anchor href="https://sumup.com" target="_blank">
            SumUp
          </Anchor>
          -specific customizations:
        </Text>

        <List size={List.MEGA}>
          <li>
            <Anchor
              href="https://github.com/sumup-oss/circuit-ui"
              target="_blank"
            >
              Circuit UI
            </Anchor>{' '}
            integration
          </li>
          <li>
            <Anchor href="https://emotion.sh/" target="_blank">
              Emotion
            </Anchor>{' '}
            support (incl. babel plugin)
          </li>
          <li>
            <Anchor href="https://lodash.com/" target="_blank">
              Lodash
            </Anchor>{' '}
            support (incl. babel plugin)
          </li>
          <li>
            {`SumUp's default tooling provided by `}
            <Anchor href="https://github.com/sumup-oss/foundry" target="_blank">
              Foundry
            </Anchor>
          </li>
          <li>Basic SEO and performance optimizations</li>
        </List>

        <Text size={Text.GIGA} css={centeredStyles}>
          Now go and build things!
          <br />
        </Text>
        <Text
          size={Text.GIGA}
          css={css`
            ${centeredStyles};
            transform: scale3d(1.5, 1.5, 1);
          `}
        >
          <span role="img" aria-label="Emojis for building things">
            🔨👩🏽‍💻👨🏼‍💻🚀
          </span>
        </Text>
      </Card>
    </Container>
  </>
);

export default Page;
