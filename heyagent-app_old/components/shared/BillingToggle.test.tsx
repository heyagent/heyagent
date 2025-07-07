import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BillingToggle from './BillingToggle';

describe('BillingToggle', () => {
  it('renders with monthly selected by default', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    // Monthly should be highlighted
    const monthlyText = screen.getByText('Monthly');
    expect(monthlyText).toHaveClass('text-slate-900', 'dark:text-white');
    
    // Annual should be dimmed
    const annualText = screen.getByText('Annual');
    expect(annualText).toHaveClass('text-slate-500', 'dark:text-slate-400');
  });

  it('renders with annual selected when isAnnual is true', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={true} onChange={onChange} />);
    
    // Annual should be highlighted
    const annualText = screen.getByText('Annual');
    expect(annualText).toHaveClass('text-slate-900', 'dark:text-white');
    
    // Monthly should be dimmed
    const monthlyText = screen.getByText('Monthly');
    expect(monthlyText).toHaveClass('text-slate-500', 'dark:text-slate-400');
  });

  it('shows save badge for annual billing', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    expect(screen.getByText('Save 20%')).toBeInTheDocument();
  });

  it('toggles from monthly to annual when clicked', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(onChange).toHaveBeenCalledWith(true);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('toggles from annual to monthly when clicked', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={true} onChange={onChange} />);
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(onChange).toHaveBeenCalledWith(false);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('moves toggle indicator based on state', () => {
    const onChange = vi.fn();
    const { rerender } = render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    // Find the toggle indicator
    let indicator = screen.getByRole('button').querySelector('span');
    expect(indicator).toHaveClass('translate-x-1');
    
    // Rerender with annual
    rerender(<BillingToggle isAnnual={true} onChange={onChange} />);
    indicator = screen.getByRole('button').querySelector('span');
    expect(indicator).toHaveClass('translate-x-6');
  });

  it('applies custom className', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} className="mt-10" />);
    
    const container = screen.getByText('Monthly').closest('div');
    expect(container).toHaveClass('mt-10');
  });

  it('has proper accessibility attributes', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-amber-400');
  });

  it('calls onChange with correct value on multiple clicks', () => {
    const onChange = vi.fn();
    const { rerender } = render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    const button = screen.getByRole('button');
    
    // First click - switch to annual
    fireEvent.click(button);
    expect(onChange).toHaveBeenLastCalledWith(true);
    
    // Simulate parent component updating the prop
    rerender(<BillingToggle isAnnual={true} onChange={onChange} />);
    
    // Second click - switch back to monthly
    fireEvent.click(button);
    expect(onChange).toHaveBeenLastCalledWith(false);
    
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('displays gradient on toggle indicator', () => {
    const onChange = vi.fn();
    render(<BillingToggle isAnnual={false} onChange={onChange} />);
    
    const indicator = screen.getByRole('button').querySelector('span');
    expect(indicator).toHaveClass('bg-gradient-to-r', 'from-amber-400', 'to-fuchsia-600');
  });
});