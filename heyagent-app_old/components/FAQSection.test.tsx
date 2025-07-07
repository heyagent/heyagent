import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from './FAQSection';

describe('FAQSection', () => {
  const faqQuestions = [
    'How does HeyAgent integrate with our existing tools?',
    'Is employee data secure when using HeyAgent?',
    'Can we create custom workflows for our specific processes?',
    'What kind of tasks can HeyAgent automate?'
  ];

  it('renders all FAQ questions', () => {
    render(<FAQSection />);
    
    faqQuestions.forEach(question => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  it('shows first FAQ as open by default', () => {
    render(<FAQSection />);
    
    // First FAQ answer should be visible
    const firstAnswer = screen.getByText(/HeyAgent seamlessly integrates/);
    expect(firstAnswer).toBeInTheDocument();
    
    // Check that the first FAQ button has the open state
    const firstButton = screen.getByText(faqQuestions[0]).closest('button');
    expect(firstButton?.querySelector('svg')).toHaveClass('rotate-180');
  });

  it('closes open FAQ when clicking it again', () => {
    render(<FAQSection />);
    
    // First FAQ is open by default
    const firstButton = screen.getByText(faqQuestions[0]).closest('button');
    const firstAnswerContainer = firstButton?.parentElement?.parentElement?.querySelector('[role="region"]');
    
    expect(firstAnswerContainer).not.toHaveClass('hidden');
    
    // Click to close
    fireEvent.click(firstButton!);
    
    // Answer should be hidden
    expect(firstAnswerContainer).toHaveClass('hidden');
    
    // Icon should not be rotated
    expect(firstButton?.querySelector('svg')).not.toHaveClass('rotate-180');
  });

  it('opens closed FAQ when clicking', () => {
    render(<FAQSection />);
    
    // Second FAQ should be closed
    const secondButton = screen.getByText(faqQuestions[1]).closest('button');
    const secondAnswerContainer = secondButton?.parentElement?.parentElement?.querySelector('[role="region"]');
    
    expect(secondAnswerContainer).toHaveClass('hidden');
    
    // Click to open
    fireEvent.click(secondButton!);
    
    // Answer should be visible
    expect(secondAnswerContainer).not.toHaveClass('hidden');
    
    // Icon should be rotated
    expect(secondButton?.querySelector('svg')).toHaveClass('rotate-180');
  });

  it('only allows one FAQ to be open at a time', () => {
    render(<FAQSection />);
    
    const firstButton = screen.getByText(faqQuestions[0]).closest('button');
    const firstAnswerContainer = firstButton?.parentElement?.parentElement?.querySelector('[role="region"]');
    const secondButton = screen.getByText(faqQuestions[1]).closest('button');
    const secondAnswerContainer = secondButton?.parentElement?.parentElement?.querySelector('[role="region"]');
    
    // First FAQ is open
    expect(firstAnswerContainer).not.toHaveClass('hidden');
    
    // Click second FAQ
    fireEvent.click(secondButton!);
    
    // Second FAQ should be open
    expect(secondAnswerContainer).not.toHaveClass('hidden');
    
    // First FAQ should be closed
    expect(firstAnswerContainer).toHaveClass('hidden');
  });

  it('toggles FAQ state correctly through multiple interactions', () => {
    render(<FAQSection />);
    
    const buttons = faqQuestions.map(q => screen.getByText(q).closest('button'));
    
    // Click through all FAQs
    buttons.forEach((button, index) => {
      fireEvent.click(button!);
      
      // Check only one FAQ is open by checking hidden class
      const allContainers = buttons.map(b => b?.parentElement?.parentElement?.querySelector('[role="region"]'));
      const openContainers = allContainers.filter(c => c && !c.classList.contains('hidden'));
      expect(openContainers.length).toBeLessThanOrEqual(1);
    });
    
    // Click the last one again to close it
    fireEvent.click(buttons[3]!);
    
    // All FAQs should be closed
    const allContainers = buttons.map(b => b?.parentElement?.parentElement?.querySelector('[role="region"]'));
    const openContainers = allContainers.filter(c => c && !c.classList.contains('hidden'));
    expect(openContainers).toHaveLength(0);
  });

  it('renders contact section', () => {
    render(<FAQSection />);
    
    expect(screen.getByText('Have a question?')).toBeInTheDocument();
    expect(screen.getByText(/Got questions about automating/)).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders contact link with correct href', () => {
    render(<FAQSection />);
    
    const contactLink = screen.getByText('Contact Us');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('applies correct styling to active FAQ', () => {
    render(<FAQSection />);
    
    // Get the first FAQ button which should have active styling
    const firstButton = screen.getByText(faqQuestions[0]).closest('button');
    
    // First button should have active styling
    expect(firstButton).toHaveClass('bg-gray-50', 'dark:bg-slate-800', 'text-amber-400');
  });

  it('shows correct icon rotation for open/closed state', () => {
    render(<FAQSection />);
    
    const firstButton = screen.getByText(faqQuestions[0]).closest('button');
    const secondButton = screen.getByText(faqQuestions[1]).closest('button');
    
    // First is open (rotated), second is closed (not rotated)
    expect(firstButton?.querySelector('svg')).toHaveClass('rotate-180');
    expect(secondButton?.querySelector('svg')).not.toHaveClass('rotate-180');
    
    // Click second to open it
    fireEvent.click(secondButton!);
    
    // Now second is rotated, first is not
    expect(firstButton?.querySelector('svg')).not.toHaveClass('rotate-180');
    expect(secondButton?.querySelector('svg')).toHaveClass('rotate-180');
  });
});