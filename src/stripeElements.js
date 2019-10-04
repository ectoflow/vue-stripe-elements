export const Stripe = {
  instance: null,
  createToken: null,
  createSource: null,
  retrieveSource: null,
  paymentRequest: null,
  redirectToCheckout: null,
  retrievePaymentIntent: null,
  handleCardPayment: null,
  handleCardSetup: null,
  handleCardAction: null,
  confirmPaymentIntent: null,
  createPaymentMethod: null,
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

function init(key, options = {}) {
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
  } else if (Stripe.elements === null) {
    Stripe.elements = Stripe.instance.elements(options)
  }
}

export function create(elementType, key_or_stripe, options = {}) {
  init(key_or_stripe, options.elements || {})
  options.style = Object.assign({}, options.style || baseStyle)

  const element = Stripe.elements.create(elementType, options)

  Stripe.createToken = (tokenData) => Stripe.instance.createToken(element, tokenData)
  Stripe.createSource = (sourceData) => Stripe.instance.createSource(element, sourceData)
  Stripe.retrieveSource = (source) => Stripe.instance.retrieveSource(source)
  Stripe.paymentRequest = (options) => Stripe.instance.paymentRequest(options)
  Stripe.redirectToCheckout = (options) => Stripe.instance.redirectToCheckout(options)
  Stripe.retrievePaymentIntent = (clientSecret) => Stripe.instance.retrievePaymentIntent(clientSecret)
  Stripe.handleCardPayment = (clientSecret, data) => Stripe.instance.handleCardPayment(clientSecret, element, data)
  Stripe.handleCardSetup = (clientSecret, data) => Stripe.instance.handleCardSetup(clientSecret, element, data)
  Stripe.handleCardAction = (clientSecret) => Stripe.instance.handleCardAction(clientSecret)
  Stripe.confirmPaymentIntent = (clientSecret, data) => Stripe.instance.confirmPaymentIntent(clientSecret, element, data)
  Stripe.createPaymentMethod = (cardType, data) => Stripe.instance.createPaymentMethod(cardType, element, data)
  
  return element
}

export function destroy() {
    Stripe.instance = null
    Stripe.elements = null
    Stripe.createToken = null
    Stripe.createSource = null
    Stripe.retrieveSource = null
    Stripe.paymentRequest = null
    Stripe.redirectToCheckout = null
    Stripe.retrievePaymentIntent = null
    Stripe.handleCardPayment = null
    Stripe.handleCardSetup = null
    Stripe.handleCardAction = null
    Stripe.confirmPaymentIntent = null
    Stripe.createPaymentMethod = null
}
