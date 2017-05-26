export const Stripe = {
  instance: null,
  createToken: null,
  elements: null
}

export const baseStyle = {
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

function init(key) {
  if (typeof key === "object" && typeof key.elements === "function") {
    Stripe.instance = key
  }

  if (window.Stripe === undefined && Stripe.instance === null) {
    console.error('Stripe V3 library not loaded!')
  } else if (Stripe.instance === null) {
    Stripe.instance = window.Stripe(key)
  }

  if (!Stripe.instance.elements) {
    console.error('Stripe V3 library not loaded!')
  } else {
    Stripe.elements = Stripe.instance.elements()
  }
}

export function create(elementType, key_or_stripe, options = {}) {
  init(key_or_stripe)
  options.style = Object.assign(baseStyle, options.style || {})

  const element = Stripe.elements.create(elementType, options)

  Stripe.createToken = (options) => Stripe.instance.createToken(element, options)

  return element
}
