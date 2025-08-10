import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Mainlayout from '../components/common/MainLayout/MainLayout';



describe('Mainlayout', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Mainlayout withBottomBar={false}>
        <div>My test content</div>
      </Mainlayout>
    );
    
    expect(getByText('My test content')).toBeTruthy();
  });
});