import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './route';

// Mock fetch globally
global.fetch = vi.fn();

describe('Status API Route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful response', () => {
    it('fetches and transforms Upptime data correctly', async () => {
      const mockUptimeData = [
        {
          name: 'Website',
          url: 'https://heyagent-app.heyagentai.workers.dev/',
          status: 'up',
          uptime: '100.00%',
          uptimeDay: '100.00%',
          uptimeWeek: '100.00%',
          uptimeMonth: '100.00%',
          time: 250,
          icon: 'https://icon.url',
          dailyMinutesDown: { '2025-07-04': 10 }
        }
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockUptimeData
      });

      const response = await GET();
      const data = await response.json();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://raw.githubusercontent.com/heyagent/heyagent-status/master/history/summary.json',
        expect.objectContaining({
          headers: {
            'Accept': 'application/json',
          }
        })
      );

      expect(data.services).toHaveLength(1);
      expect(data.services[0]).toEqual({
        name: 'Website',
        url: 'https://heyagent-app.heyagentai.workers.dev/',
        status: 'up',
        uptime: '100.00%',
        uptimeDay: '100.00%',
        uptimeWeek: '100.00%',
        uptimeMonth: '100.00%',
        responseTime: 250,
        icon: 'https://icon.url',
        dailyMinutesDown: { '2025-07-04': 10 }
      });
      expect(data.lastUpdated).toBeDefined();
    });

    it('handles empty dailyMinutesDown gracefully', async () => {
      const mockUptimeData = [
        {
          name: 'Website',
          url: 'https://heyagent-app.heyagentai.workers.dev/',
          status: 'up',
          uptime: '100.00%',
          uptimeDay: '100.00%',
          uptimeWeek: '100.00%',
          uptimeMonth: '100.00%',
          time: 250,
          // No dailyMinutesDown property
        }
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockUptimeData
      });

      const response = await GET();
      const data = await response.json();

      expect(data.services[0].dailyMinutesDown).toEqual({});
    });
  });

  describe('Error handling', () => {
    it('returns unknown status when fetch fails', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      const response = await GET();
      const data = await response.json();

      expect(data.services).toHaveLength(4);
      expect(data.services.every((s: any) => s.status === 'unknown')).toBe(true);
      expect(data.services.map((s: any) => s.name)).toEqual([
        'Website',
        'Help and Support',
        'Runner',
        'Backend'
      ]);
    });

    it('returns unknown status when response is not ok', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404
      });

      const response = await GET();
      const data = await response.json();

      expect(data.services).toHaveLength(4);
      expect(data.services.every((s: any) => s.status === 'unknown')).toBe(true);
    });

    it('returns correct structure for unknown services', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Failed'));

      const response = await GET();
      const data = await response.json();

      const expectedService = {
        name: expect.any(String),
        url: expect.any(String),
        status: 'unknown',
        uptime: 'N/A',
        uptimeDay: 'N/A',
        uptimeWeek: 'N/A',
        uptimeMonth: 'N/A',
        responseTime: 0,
        dailyMinutesDown: {}
      };

      data.services.forEach((service: any) => {
        expect(service).toMatchObject(expectedService);
      });
    });

    it('logs error to console', async () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const testError = new Error('Test error');
      
      (global.fetch as any).mockRejectedValueOnce(testError);

      await GET();

      expect(consoleSpy).toHaveBeenCalledWith('Error fetching status data:', testError);
      
      consoleSpy.mockRestore();
    });
  });

  describe('Response structure', () => {
    it('always includes lastUpdated timestamp', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => []
      });

      const response = await GET();
      const data = await response.json();

      expect(data.lastUpdated).toBeDefined();
      expect(new Date(data.lastUpdated).toISOString()).toBe(data.lastUpdated);
    });

    it('transforms service.time to responseTime', async () => {
      const mockData = [{
        name: 'Test',
        url: 'https://test.com',
        status: 'up',
        uptime: '100%',
        uptimeDay: '100%',
        uptimeWeek: '100%',
        uptimeMonth: '100%',
        time: 123,
      }];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });

      const response = await GET();
      const data = await response.json();

      expect(data.services[0].responseTime).toBe(123);
      expect(data.services[0].time).toBeUndefined();
    });
  });
});