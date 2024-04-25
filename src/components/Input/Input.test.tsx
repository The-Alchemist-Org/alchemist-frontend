import { render, screen } from '@testing-library/react';
import {
  describe, it, vi, expect,
} from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element with the correct attributes', () => {
    const placeholder = 'Enter email';
    const name = 'email';
    const value = 'test@example.com';
    const onChange = vi.fn();

    render(
      <Input
        type="email"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveProperty('type', 'email');
    expect(inputElement).toHaveProperty('name', name);
    expect(inputElement).toHaveProperty('value', value);
  });
});
