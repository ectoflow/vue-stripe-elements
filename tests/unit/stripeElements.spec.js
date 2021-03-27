import {
  initStripe,
  createElements,
  createElement,
} from '../../src/stripeElements'

describe('initStripe', () => {
  test('no key, no options', () => {
    const errorMsg = 'Stripe v3 library is not loaded'
    const result = initStripe()
    expect(result).toBe(errorMsg)
  })

  test('key, no options', () => {
    const key = '12345'
    const options = { c: 'd' }
    const mockFn = jest.fn()
    window.Stripe = mockFn
    const result = initStripe(key)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(key, undefined)
  })

  test('key and options', () => {
    const key = '12345'
    const options = { c: 'd' }
    const mockFn = jest.fn()
    window.Stripe = mockFn
    const result = initStripe(key, options)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(key, options)
  })
})

describe('createElements', () => {
  test('no arguments', () => {
    const errorMsg =
      'Instance object is not defined, make sure you initialized Stripe before creating elements'
    const result = createElements()
    expect(result).toBe(errorMsg)
  })

  test('valid instance', () => {
    const mockFn = jest.fn()
    const instance = { elements: mockFn }
    const result = createElements(instance)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test('options passed', () => {
    const mockFn = jest.fn()
    const instance = { elements: mockFn }
    const options = { a: 'b' }
    const result = createElements(instance, options)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(options)
  })
})

describe('createElement', () => {
  test('no arguments', () => {
    const errorMsg =
      'Elements object is not defined. You can not create stripe element without it'
    const result = createElement()
    expect(result).toBe(errorMsg)
  })

  test('valid elements, no type', () => {
    const errorMsg =
      'elementType is required. You can not create stripe element without it'
    const elements = {}
    const result = createElement(elements)
    expect(result).toBe(errorMsg)
  })

  test('valid elements, valid type', () => {
    const mockFn = jest.fn()
    const elements = { create: mockFn }
    const type = 'card'
    const result = createElement(elements, type)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test('options passed', () => {
    const mockFn = jest.fn()
    const elements = { create: mockFn }
    const type = 'card'
    const options = { b: 'c' }
    const result = createElement(elements, type, options)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(type, options)
  })
})
