let stripeInstance = null
let stripeElements = null

const baseStyle = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: 'Helvetica Neue',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
}

export const Stripe = {
  get instance() { return stripeInstance },
  get elements() { return stripeElements },
  get baseStyle() { return baseStyle }
}

export function init(key) {
  if (typeof key === "object" && typeof key.elements === "function") {
    stripeInstance = key
  }

  if (window.Stripe === undefined && stripeInstance === null) {
    console.error('Stripe V3 library not loaded!')
  } else if (stripeInstance === null) {
    stripeInstance = window.Stripe(key)
  }

  if (stripeInstance && stripeElements === null) {
    stripeElements = stripeInstance.elements()
  }
}

export function create(elementType, key_or_stripe, options = {}) {
  init(key_or_stripe)
  options.style = Object.assign(baseStyle, options.style || {})

  return stripeElements.create(elementType, options)
}

export default create
