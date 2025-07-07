import { describe, it, expect } from 'vitest';

describe('Basic test setup', () => {
  it('should run a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const text = 'Hello, World!';
    expect(text.toLowerCase()).toBe('hello, world!');
    expect(text.length).toBe(13);
  });

  it('should work with arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
  });
});