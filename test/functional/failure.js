/* global jasmine, describe, beforeEach, it, expect */
var jasmineDiff = require('../../')
var jasmineDiffMatchers = jasmineDiff(jasmine)

describe('Jasmine Diff Matchers', function () {
  beforeEach(function () {
    jasmine.addMatchers(jasmineDiffMatchers)
  })

  describe('toBe', function () {
    it('should omit diff when comparing null/undefined', function () {
      expect(null).toBe(undefined)
    })
    it('should omit diff when comparing scalars', function () {
      expect(42).toBe(true)
    })
    it('should show diff when comparing long strings', function () {
      expect('The quick brown fox jumped over the lazy dog').toBe(
        'The quick black cat hissed at the lazy dog'
      )
    })
    it('should show diff when comparing multiline strings', function () {
      expect('The quick brown fox\njumped over the lazy dog').toBe(
        'The quick black cat\nhissed at the lazy dog'
      )
    })
    it('should show diff when comparing arrays', function () {
      expect([1, 2, 3]).toBe([1, 2, 3, 4])
    })
    it('should show diff when comparing objects', function () {
      expect({ foo: 'foo', bar: 'bar' }).toBe({ foo: 'foo', baz: 'baz' })
    })
    it('should format values', function () {
      var actual = {}
      var expected = {
        a: null,
        b: undefined,
        c: 1,
        d: -1,
        e: 'a',
        f: Function.prototype,
        g: /[aeiou]/,
        h: [],
        i: [1, 2, 3],
        j: [[1], [2, 3]],
        k: {},
        l: { a: 1, b: 2, c: 3 },
        m: { a: { b: { c: 1 } } },
        n: { a: [{ b: true }] }
      }
      expect(actual).toBe(expected)
    })
  })

  describe('not.toBe', function () {
    it('should omit diff when comparing null/undefined', function () {
      expect(null).not.toBe(null)
    })
    it('should omit diff when comparing scalars', function () {
      expect(42).not.toBe(42)
    })
    it('should show diff when comparing arrays', function () {
      expect([1, 2, 3]).not.toBe([1, 2, 3])
    })
    it('should show diff when comparing objects', function () {
      expect({ foo: 'foo', bar: 'bar' }).not.toBe({ foo: 'foo', bar: 'bar' })
    })
  })

  describe('toEqual', function () {
    it('should omit diff when comparing null/undefined', function () {
      expect(null).toEqual(undefined)
    })
    it('should omit diff when comparing scalars', function () {
      expect(42).toEqual(true)
    })
    it('should show diff when comparing long strings', function () {
      expect('The quick brown fox jumped over the lazy dog').toEqual(
        'The quick black cat hissed at the lazy dog'
      )
    })
    it('should show diff when comparing multiline strings', function () {
      expect('The quick brown fox\njumped over the lazy dog').toEqual(
        'The quick black cat\nhissed at the lazy dog'
      )
    })
    it('should show diff when comparing arrays', function () {
      expect([1, 2, 3]).toEqual([1, 2, 3, 4])
    })
    it('should show diff when comparing objects', function () {
      expect({ foo: 'foo', bar: 'bar' }).toEqual({ foo: 'foo', baz: 'baz' })
    })
    it('should format values', function () {
      var actual = {}
      var expected = {
        a: null,
        b: undefined,
        c: 1,
        d: -1,
        e: 'a',
        f: Function.prototype,
        g: /[aeiou]/,
        h: [],
        i: [1, 2, 3],
        j: [[1], [2, 3]],
        k: {},
        l: { a: 1, b: 2, c: 3 },
        m: { a: { b: { c: 1 } } },
        n: { a: [{ b: true }] }
      }
      expect(actual).toEqual(expected)
    })
  })

  describe('not.toEqual', function () {
    it('should omit diff when comparing null/undefined', function () {
      expect(null).not.toEqual(null)
    })
    it('should omit diff when comparing scalars', function () {
      expect(42).not.toEqual(42)
    })
    it('should show diff when comparing arrays', function () {
      expect([1, 2, 3]).not.toEqual([1, 2, 3])
    })
    it('should show diff when comparing objects', function () {
      expect({ foo: 'foo', bar: 'bar' }).not.toEqual({ foo: 'foo', bar: 'bar' })
    })
  })
})
