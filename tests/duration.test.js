import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDuration } from '../src/duration.js';

describe('formatDuration', () => {
  it('formats zero seconds as 00:00:00', () => {
    assert.strictEqual(formatDuration(0), '00:00:00');
  });

  it('formats a duration below 60 minutes correctly', () => {
    assert.strictEqual(formatDuration(2700), '00:45:00');
  });

  it('formats exactly 60 minutes correctly', () => {
    assert.strictEqual(formatDuration(3600), '01:00:00');
  });

  it('formats a duration above 60 minutes correctly (5,400 seconds)', () => {
    assert.strictEqual(formatDuration(5400), '01:30:00');
  });

  it('formats a duration exceeding two hours correctly (125 minutes)', () => {
    assert.strictEqual(formatDuration(7500), '02:05:00');
  });

  it('handles negative inputs appropriately by returning 00:00:00', () => {
    assert.strictEqual(formatDuration(-1), '00:00:00');
    assert.strictEqual(formatDuration(-3600), '00:00:00');
  });

  it('handles invalid inputs appropriately by returning 00:00:00', () => {
    assert.strictEqual(formatDuration(NaN), '00:00:00');
    assert.strictEqual(formatDuration(Infinity), '00:00:00');
    assert.strictEqual(formatDuration(null), '00:00:00');
    assert.strictEqual(formatDuration(undefined), '00:00:00');
    assert.strictEqual(formatDuration('5400'), '00:00:00');
  });
});

