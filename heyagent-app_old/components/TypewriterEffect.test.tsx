import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import TypewriterEffect from './TypewriterEffect';

describe('TypewriterEffect', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('renders with initial empty text and cursor', () => {
    render(<TypewriterEffect words={['Hello', 'World']} />);
    
    const cursor = screen.getByText('|');
    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveClass('animate-pulse');
  });

  it('types out the first word character by character', () => {
    const { container } = render(<TypewriterEffect words={['Hello']} />);
    
    // Find the text content (first text node in parent span)
    const getTextContent = () => {
      const parentSpan = container.querySelector('span');
      if (!parentSpan) return '';
      // Get the first text node (before the cursor span)
      const textNode = parentSpan.firstChild;
      return textNode?.nodeType === Node.TEXT_NODE ? textNode.textContent || '' : '';
    };
    
    // Initially empty
    expect(getTextContent()).toBe('');
    
    // Type 'H'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('H');
    
    // Type 'He'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('He');
    
    // Type 'Hel'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('Hel');
    
    // Type 'Hell'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('Hell');
    
    // Type 'Hello'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('Hello');
  });

  it('pauses after completing a word before deleting', () => {
    const { container } = render(<TypewriterEffect words={['Hi']} />);
    
    const getTextContent = () => {
      const parentSpan = container.querySelector('span');
      if (!parentSpan) return '';
      // Get the first text node (before the cursor span)
      const textNode = parentSpan.firstChild;
      return textNode?.nodeType === Node.TEXT_NODE ? textNode.textContent || '' : '';
    };
    
    // Type 'H'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('H');
    
    // Type 'i'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('Hi');
    
    // Should still show 'Hi' after 1000ms (less than pause time)
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(getTextContent()).toBe('Hi');
    
    // After another timeout (150ms) it sets isDeleting via nested setTimeout
    act(() => {
      vi.advanceTimersByTime(150);
    });
    // Then the 1500ms pause timer starts
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    // Then deletion begins
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('H');
  });

  it('deletes characters faster than typing', () => {
    const { container } = render(<TypewriterEffect words={['Test']} />);
    
    const getTextContent = () => {
      const parentSpan = container.querySelector('span');
      if (!parentSpan) return '';
      // Get the first text node (before the cursor span)
      const textNode = parentSpan.firstChild;
      return textNode?.nodeType === Node.TEXT_NODE ? textNode.textContent || '' : '';
    };
    
    // Type out 'Test' character by character
    act(() => {
      vi.advanceTimersByTime(150); // T
    });
    expect(getTextContent()).toBe('T');
    
    act(() => {
      vi.advanceTimersByTime(150); // e
    });
    expect(getTextContent()).toBe('Te');
    
    act(() => {
      vi.advanceTimersByTime(150); // s
    });
    expect(getTextContent()).toBe('Tes');
    
    act(() => {
      vi.advanceTimersByTime(150); // t
    });
    expect(getTextContent()).toBe('Test');
    
    // Wait for next timeout cycle to trigger pause
    act(() => {
      vi.advanceTimersByTime(150);
    });
    // Wait for pause
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    
    // Delete happens at 50ms intervals
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('Tes');
    
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('Te');
    
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('T');
    
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('');
  });

  it('cycles through multiple words', () => {
    const { container } = render(<TypewriterEffect words={['One', 'Two', 'Three']} />);
    
    const getTextContent = () => {
      const parentSpan = container.querySelector('span');
      if (!parentSpan) return '';
      // Get the first text node (before the cursor span)
      const textNode = parentSpan.firstChild;
      return textNode?.nodeType === Node.TEXT_NODE ? textNode.textContent || '' : '';
    };
    
    // Type 'One' character by character
    act(() => {
      vi.advanceTimersByTime(150); // O
    });
    act(() => {
      vi.advanceTimersByTime(150); // n
    });
    act(() => {
      vi.advanceTimersByTime(150); // e
    });
    expect(getTextContent()).toBe('One');
    
    // Wait for next timeout cycle to trigger pause
    act(() => {
      vi.advanceTimersByTime(150);
    });
    // Wait for pause
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    
    // Delete 'One' character by character
    act(() => {
      vi.advanceTimersByTime(50); // On
    });
    expect(getTextContent()).toBe('On');
    act(() => {
      vi.advanceTimersByTime(50); // O
    });
    expect(getTextContent()).toBe('O');
    act(() => {
      vi.advanceTimersByTime(50); // empty
    });
    expect(getTextContent()).toBe('');
    
    // Should start typing 'Two' after another timeout cycle
    act(() => {
      vi.advanceTimersByTime(50); // Complete the deletion cycle
    });
    act(() => {
      vi.advanceTimersByTime(150); // Start typing 'T'
    });
    expect(getTextContent()).toBe('T');
    
    // Complete 'Two'
    act(() => {
      vi.advanceTimersByTime(150); // 'w'
    });
    expect(getTextContent()).toBe('Tw');
    act(() => {
      vi.advanceTimersByTime(150); // 'o'
    });
    expect(getTextContent()).toBe('Two');
  });

  it('loops back to first word after last word', () => {
    const { container } = render(<TypewriterEffect words={['A', 'B']} />);
    
    const getTextContent = () => {
      const parentSpan = container.querySelector('span');
      if (!parentSpan) return '';
      // Get the first text node (before the cursor span)
      const textNode = parentSpan.firstChild;
      return textNode?.nodeType === Node.TEXT_NODE ? textNode.textContent || '' : '';
    };
    
    // Type 'A'
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(getTextContent()).toBe('A');
    
    // Trigger next timeout cycle then pause
    act(() => {
      vi.advanceTimersByTime(150 + 1500);
    });
    // Delete 'A'
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('');
    
    // Type 'B' after another timeout cycle
    act(() => {
      vi.advanceTimersByTime(50); // Complete the deletion cycle
    });
    act(() => {
      vi.advanceTimersByTime(150); // Start typing 'B'
    });
    expect(getTextContent()).toBe('B');
    
    // Trigger next timeout cycle then pause  
    act(() => {
      vi.advanceTimersByTime(150 + 1500);
    });
    // Delete 'B'
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(getTextContent()).toBe('');
    
    // Should loop back to 'A' after another timeout cycle
    act(() => {
      vi.advanceTimersByTime(50); // Complete the deletion cycle
    });
    act(() => {
      vi.advanceTimersByTime(150); // Start typing 'A'
    });
    expect(getTextContent()).toBe('A');
  });

  it('applies custom className', () => {
    render(<TypewriterEffect words={['Test']} className="text-amber-400 text-2xl" />);
    
    const element = screen.getByText(/\|/).parentElement;
    expect(element).toHaveClass('text-amber-400', 'text-2xl');
  });

  it('handles empty words array gracefully', () => {
    // Should not crash with empty array
    const { container } = render(<TypewriterEffect words={[]} />);
    
    // Should still render cursor
    expect(screen.getByText('|')).toBeInTheDocument();
    
    // Should not crash when advancing timers
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    // Cursor should still be there
    expect(screen.getByText('|')).toBeInTheDocument();
  });
});