import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { configureAxe } from 'jest-axe';
import { ThemeProvider } from 'emotion-theming';
import {
  render as renderTest,
  wait,
  act,
  cleanup,
} from '@testing-library/react';
import { renderHook, act as actHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { Theme, light } from '@sumup/design-tokens';

export type RenderFn = (
  component: React.ReactNode,
  context?: {
    theme?: Theme;
  },
  ...rest: any
) => any;

type Renderer = (component: React.ReactNode, ...rest: any) => any;

const renderWithProviders = (renderer: Renderer): RenderFn => (
  component,
  context = {},
  ...rest
) => {
  const { theme = light } = context;
  return renderer(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
    rest,
  );
};

export const render: RenderFn = renderWithProviders(renderTest);
export const renderToHtml: RenderFn = renderWithProviders(renderToStaticMarkup);
export const create: RenderFn = (component, context, ...rest) => {
  const { container } = render(component, context, ...rest);
  return container.children.length > 1
    ? container.children
    : container.firstChild;
};

const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

export { userEvent, wait, act, cleanup, actHook, renderHook, axe };
