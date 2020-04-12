import React from 'react';

import {
  create,
  render,
  renderToHtml,
  axe,
  RenderFn,
} from '../../utils/test-utils';

import { Anchor, AnchorProps } from './Anchor';

describe('Anchor', () => {
  /**
   * Having a separate rendering function for your components makes it easier
   * to render a separate component for each test and reduces boilerplate.
   */
  function renderAnchor(renderFn: RenderFn, props: AnchorProps) {
    return renderFn(<Anchor {...props} />);
  }

  /**
   * Default props help you have sensible defaults that work for most tests.
   * You can pass in custom props to customize rendering for your current test.
   */
  const defaultProps = {
    href: 'https://sumup.com',
    children: `Visit SumUp's website`,
  };

  /**
   * For styled components it can be useful to write snapshot testing.
   * In this case, we want to ensure that an anchor has hover, focus,
   * and active styles.
   */
  it('should render with default styles', () => {
    const actual = renderAnchor(create, defaultProps);
    expect(actual).toMatchSnapshot();
  });

  /**
   * Testing by what your user sees gives you more confidence in your tests.
   * */
  it('should show text inside the anchor', () => {
    const text = `Visit SumUp's website`;
    const { getByText } = renderAnchor(render, {
      ...defaultProps,
      children: text,
    });
    const content = getByText(text, { selector: 'a' });
    expect(content).toBeVisible();
  });

  /**
   * An automatic accessibility test only covers basic best practices.
   * You will still need to test manually to ensure full accessibility.
   * */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderAnchor(renderToHtml, defaultProps);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
