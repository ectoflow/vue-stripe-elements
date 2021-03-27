export const initStripe = (key, options) => {
  if (typeof window.Stripe === 'undefined') {
    const errorMsg = 'Stripe v3 library is not loaded'
    console.error(errorMsg)
    return errorMsg
  }

  const stripeInstance = window.Stripe(key, options)
  return stripeInstance
}

export const createElements = (instance, options) => {
  if (typeof instance === 'undefined') {
    const errorMsg =
      'Instance object is not defined, make sure you initialized Stripe before creating elements'
    console.error(errorMsg)
    return errorMsg
  }

  const elements = instance.elements(options)
  return elements
}

export const createElement = (elements, elementType, options) => {
  if (typeof elements === 'undefined') {
    const errorMsg =
      'Elements object is not defined. You can not create stripe element without it'
    console.error(errorMsg)
    return errorMsg
  }
  if (typeof elementType === 'undefined') {
    const errorMsg =
      'elementType is required. You can not create stripe element without it'
    console.error(errorMsg)
    return errorMsg
  }

  const element = elements.create(elementType, options)
  return element
}

export function destroy(instance) {
  instance = undefined
  return instance
}
