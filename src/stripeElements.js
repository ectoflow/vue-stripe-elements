export const initStripe = (key, options) => {
  if (typeof window.Stripe === 'undefined') {
    return console.error('Stripe v3 library is not loaded')
  }

  const stripeInstance = window.Stripe(key, options)
  return stripeInstance
}

export const createElements = (instance, options) => {
  if (typeof instance === 'undefined') {
    return console.error(
      'Instance object is not defined, make sure you initialized Stripe before creating elements'
    )
  }

  const elements = instance.elements(options)
  return elements
}

export const createElement = (elements, elementType, options) => {
  if (typeof elements === 'undefined') {
    return console.error(
      'Elements object is not defined. You can not create stripe element without it'
    )
  }
  if (typeof elementType === 'undefined') {
    return console.error(
      'elementType is required. You can not create stripe element without it'
    )
  }

  const element = elements.create(elementType, options)
  return element
}

export function destroy(instance) {
  instance = undefined
  return instance
}
