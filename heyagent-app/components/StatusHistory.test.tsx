import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusHistory from './StatusHistory';

describe('StatusHistory', () => {
  const mockHistory = [
    { date: '2025-07-03', uptime: 100, status: 'no-data' as const },
    { date: '2025-07-04', uptime: 100, status: 'up' as const },
    { date: '2025-07-05', uptime: 0, status: 'down' as const },
  ];

  it('renders service name', () => {
    render(
      <StatusHistory 
        serviceName="Test Service"
        history={mockHistory}
        uptimePercentage="99.5%"
        currentStatus="up"
      />
    );
    
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });

  it('displays current status correctly', () => {
    render(
      <StatusHistory 
        serviceName="Test Service"
        history={mockHistory}
        uptimePercentage="99.5%"
        currentStatus="down"
      />
    );
    
    expect(screen.getByText('Down')).toBeInTheDocument();
  });

  it('shows uptime percentage', () => {
    render(
      <StatusHistory 
        serviceName="Test Service"
        history={mockHistory}
        uptimePercentage="99.5%"
        currentStatus="up"
      />
    );
    
    expect(screen.getByText('99.5% uptime')).toBeInTheDocument();
  });

  it('renders correct number of history bars', () => {
    render(
      <StatusHistory 
        serviceName="Test Service"
        history={mockHistory}
        uptimePercentage="100%"
        currentStatus="up"
      />
    );
    
    // Since generateHistoryBars fills to 90 days, we expect 90 bars
    const container = screen.getByText('Test Service').closest('div')?.parentElement;
    const bars = container?.querySelectorAll('.flex-1.h-full.rounded-sm');
    expect(bars).toHaveLength(90);
  });

  it('applies correct colors based on status', () => {
    render(
      <StatusHistory 
        serviceName="Test Service"
        history={[
          { date: '2025-07-05', uptime: 100, status: 'up' as const }
        ]}
        uptimePercentage="100%"
        currentStatus="up"
      />
    );
    
    const container = screen.getByText('Test Service').closest('div')?.parentElement;
    const greenBar = container?.querySelector('.bg-green-500');
    expect(greenBar).toBeInTheDocument();
  });
});