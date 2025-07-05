import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TabsSection from './TabsSection';

describe('TabsSection', () => {
  it('renders all three tabs', () => {
    render(<TabsSection />);
    
    expect(screen.getByText('Drag and drop')).toBeInTheDocument();
    expect(screen.getByText('Improve your Talent')).toBeInTheDocument();
    expect(screen.getByText('Go for Live')).toBeInTheDocument();
  });

  it('shows first tab as active by default', () => {
    render(<TabsSection />);
    
    const firstTabButton = screen.getByText('Drag and drop').closest('button');
    expect(firstTabButton).toHaveClass('text-white', 'bg-amber-400');
    
    // Other tabs should not be active
    const secondTabButton = screen.getByText('Improve your Talent').closest('button');
    expect(secondTabButton).not.toHaveClass('bg-amber-400');
    expect(secondTabButton).toHaveClass('hover:text-amber-400');
  });

  it('displays correct content for active tab', () => {
    render(<TabsSection />);
    
    // First tab should be active, showing its content
    expect(screen.getByText('Drag & Drop Interface')).toBeInTheDocument();
  });

  it('switches active tab when clicking', () => {
    render(<TabsSection />);
    
    // Click second tab
    const secondTab = screen.getByText('Improve your Talent').closest('button');
    fireEvent.click(secondTab!);
    
    // Second tab should now be active
    expect(secondTab).toHaveClass('text-white', 'bg-amber-400');
    
    // First tab should no longer be active
    const firstTab = screen.getByText('Drag and drop').closest('button');
    expect(firstTab).not.toHaveClass('bg-amber-400');
    
    // Content should update
    expect(screen.getByText('Talent Enhancement Dashboard')).toBeInTheDocument();
    expect(screen.queryByText('Drag & Drop Interface')).not.toBeInTheDocument();
  });

  it('only one tab can be active at a time', () => {
    render(<TabsSection />);
    
    // Click through all tabs
    const tabs = [
      { title: 'Drag and drop', content: 'Drag & Drop Interface' },
      { title: 'Improve your Talent', content: 'Talent Enhancement Dashboard' },
      { title: 'Go for Live', content: 'Live Deployment Console' }
    ];
    
    tabs.forEach((tab, index) => {
      const tabButton = screen.getByText(tab.title).closest('button');
      fireEvent.click(tabButton!);
      
      // Check only this tab is active
      const allButtons = screen.getAllByRole('button');
      const activeButtons = allButtons.filter(btn => 
        btn.classList.contains('bg-amber-400')
      );
      
      expect(activeButtons).toHaveLength(1);
      expect(screen.getByText(tab.content)).toBeInTheDocument();
    });
  });

  it('displays tab descriptions', () => {
    render(<TabsSection />);
    
    expect(screen.getByText('Build powerful workflows by simply dragging and dropping components into place.')).toBeInTheDocument();
    expect(screen.getByText('Enhance your team\'s capabilities with AI-powered automation and intelligent suggestions.')).toBeInTheDocument();
    expect(screen.getByText('Deploy your automation workflows instantly and see real-time results in production.')).toBeInTheDocument();
  });

  it('maintains tab state after multiple clicks', () => {
    render(<TabsSection />);
    
    const firstTab = screen.getByText('Drag and drop').closest('button');
    const secondTab = screen.getByText('Improve your Talent').closest('button');
    const thirdTab = screen.getByText('Go for Live').closest('button');
    
    // Click second tab
    fireEvent.click(secondTab!);
    expect(screen.getByText('Talent Enhancement Dashboard')).toBeInTheDocument();
    
    // Click third tab
    fireEvent.click(thirdTab!);
    expect(screen.getByText('Live Deployment Console')).toBeInTheDocument();
    
    // Click back to first tab
    fireEvent.click(firstTab!);
    expect(screen.getByText('Drag & Drop Interface')).toBeInTheDocument();
    
    // Verify first tab is active
    expect(firstTab).toHaveClass('bg-amber-400');
    expect(secondTab).not.toHaveClass('bg-amber-400');
    expect(thirdTab).not.toHaveClass('bg-amber-400');
  });
});