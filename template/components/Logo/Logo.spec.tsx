import React from 'react';

import { create, renderToHtml, axe, RenderFn } from '../../test-utils';

import { Logo } from './Logo';

describe('Logo', () => {
  /**
   * Having a separate rendering function for your components makes it easier
   * to render a separate component for each test and reduces boilerplate.
   */
  function renderLogo<T>(renderFn: RenderFn<T>, props = {}) {
    return renderFn(<Logo {...props} />);
  }

  /**
   * For styled components it can be useful to write snapshot testing.
   * In this case, we want to ensure that an anchor has hover, focus,
   * and active styles.
   */
  it('should render with default styles', () => {
    const actual = renderLogo(create);
    expect(actual).toMatchSnapshot();
  });

  /**
   * An automatic accessibility test only covers basic best practices.
   * You will still need to test manually to ensure full accessibility.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderLogo(renderToHtml);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
