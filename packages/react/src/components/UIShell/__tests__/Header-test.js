/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '../';

describe('Header', () => {
  it('should support labeling through aria-label', () => {
    const { container } = render(<Header aria-label="test" />);
    expect(container.firstChild).toEqual(screen.getByLabelText('test'));
  });

  it('should support a custom `className` prop on the outermost element', () => {
    const { container } = render(<Header aria-label="test" className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

  it('should spread extra props on the outermost element', () => {
    const { container } = render(
      <Header aria-label="test" data-testid="test" />
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'test');
  });
});
