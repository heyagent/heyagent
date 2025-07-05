import { describe, it, expect } from 'vitest';
import { getHistoryBarStatus, generateServiceHistory } from './status-utils';

describe('getHistoryBarStatus', () => {
  const today = '2025-07-05';
  const yesterday = '2025-07-04';

  describe('when date is today', () => {
    it('returns down status when current status is down', () => {
      const result = getHistoryBarStatus(
        today,
        today,
        'down',
        { '2025-07-05': 0 } // Even with 0 minutes down in data
      );
      
      expect(result).toEqual({
        date: today,
        uptime: 0,
        status: 'down'
      });
    });

    it('returns up status when current status is up', () => {
      const result = getHistoryBarStatus(
        today,
        today,
        'up',
        {} // No historical data
      );
      
      expect(result).toEqual({
        date: today,
        uptime: 100,
        status: 'up'
      });
    });

    it('returns no-data status when current status is unknown', () => {
      const result = getHistoryBarStatus(
        today,
        today,
        'unknown',
        {}
      );
      
      expect(result).toEqual({
        date: today,
        uptime: 100,
        status: 'no-data'
      });
    });

    it('returns partial status when current status is degraded', () => {
      const result = getHistoryBarStatus(
        today,
        today,
        'degraded',
        {}
      );
      
      expect(result).toEqual({
        date: today,
        uptime: 50,
        status: 'partial'
      });
    });
  });

  describe('when date is not today', () => {
    it('returns no-data when date not in dailyMinutesDown', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        {} // Empty data
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 100,
        status: 'no-data'
      });
    });

    it('returns no-data when dailyMinutesDown is undefined', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        undefined
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 100,
        status: 'no-data'
      });
    });

    it('returns up status when minutes down is 0', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        { '2025-07-04': 0 }
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 100,
        status: 'up'
      });
    });

    it('returns partial status for less than 12 hours down', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        { '2025-07-04': 360 } // 6 hours
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 75, // (1440 - 360) / 1440 * 100
        status: 'partial'
      });
    });

    it('returns down status for 12+ hours down', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        { '2025-07-04': 720 } // 12 hours
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 50, // (1440 - 720) / 1440 * 100
        status: 'down'
      });
    });

    it('returns down status for full day down', () => {
      const result = getHistoryBarStatus(
        yesterday,
        today,
        'up',
        { '2025-07-04': 1440 } // 24 hours
      );
      
      expect(result).toEqual({
        date: yesterday,
        uptime: 0,
        status: 'down'
      });
    });
  });
});

describe('generateServiceHistory', () => {
  it('generates 90 days of history', () => {
    const history = generateServiceHistory('up', {});
    expect(history).toHaveLength(90);
  });

  it('generates dates in chronological order', () => {
    const history = generateServiceHistory('up', {});
    for (let i = 1; i < history.length; i++) {
      const prevDate = new Date(history[i - 1].date);
      const currDate = new Date(history[i].date);
      expect(currDate.getTime()).toBeGreaterThan(prevDate.getTime());
    }
  });

  it('last item is today with current status', () => {
    const history = generateServiceHistory('down', {});
    const today = new Date().toISOString().split('T')[0];
    const lastItem = history[history.length - 1];
    
    expect(lastItem.date).toBe(today);
    expect(lastItem.status).toBe('down');
    expect(lastItem.uptime).toBe(0);
  });

  it('shows gray bars for dates without data except today', () => {
    const history = generateServiceHistory('up', {});
    
    // All days except today should be no-data
    for (let i = 0; i < history.length - 1; i++) {
      expect(history[i].status).toBe('no-data');
    }
    
    // Today should reflect current status
    expect(history[history.length - 1].status).toBe('up');
  });

  it('uses historical data when available', () => {
    const today = new Date();
    const dates: Record<string, number> = {};
    
    // Add some historical data
    for (let i = 1; i <= 5; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      dates[date.toISOString().split('T')[0]] = i * 100; // Increasing downtime
    }
    
    const history = generateServiceHistory('up', dates);
    
    // Check that historical data is used correctly
    const lastWeek = history.slice(-7); // Last 7 days
    expect(lastWeek[5].status).toBe('partial'); // 100 minutes down
    expect(lastWeek[4].status).toBe('partial'); // 200 minutes down
    expect(lastWeek[3].status).toBe('partial'); // 300 minutes down
    expect(lastWeek[2].status).toBe('partial'); // 400 minutes down
    expect(lastWeek[1].status).toBe('partial'); // 500 minutes down
    expect(lastWeek[6].status).toBe('up'); // Today - current status
  });
});