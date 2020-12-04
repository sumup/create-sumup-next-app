import React, { FunctionComponent } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { configureAxe } from 'jest-axe';
import { ThemeProvider } from 'emotion-theming';
import {
  render as renderTest,
  waitFor,
  act,
  cleanup,
  RenderResult,
} from '@testing-library/react';
import { renderHook, act as actHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { light } from '@sumup/design-tokens';

export type RenderFn<T = any> = (
  component: React.ReactElement,
  ...rest: any
) => T;

const WithProviders: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

export const render: RenderFn<RenderResult> = (component, options) =>
  renderTest(component, { wrapper: WithProviders, ...options });
export const create = (...args: Parameters<RenderFn<RenderResult>>) => {
  const { container } = render(...args);
  return container.children.length > 1
    ? container.children
    : container.firstChild;
};
export const renderToHtml: RenderFn<string> = (component) =>
  renderToStaticMarkup(<WithProviders>{component}</WithProviders>);

const axe = configureAxe({
  rules: {
    // Disable landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

export { userEvent, waitFor, act, cleanup, actHook, renderHook, axe };
