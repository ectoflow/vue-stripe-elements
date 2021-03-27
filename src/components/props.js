export default {
  // elements object
  // https://stripe.com/docs/js/elements_object/create
  elements: {
    type: Object,
    required: true,
  },
  // type of the element
  // https://stripe.com/docs/js/elements_object/create_element?type=card
  type: {
    type: String,
    default: () => 'card',
  },
  // element options
  // https://stripe.com/docs/js/elements_object/create_element?type=card#elements_create-options
  options: {
    type: [Object, undefined],
  },
}
