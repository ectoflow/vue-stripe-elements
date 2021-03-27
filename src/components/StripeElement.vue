<template>
  <div></div>
</template>

<script>
import { createElement, destroy } from '../stripeElements'

export default {
  name: 'StripeElement',
  props: {
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
      default: () => undefined,
    },
  },

  data() {
    return {
      stripeElement: undefined,
      domElement: document.createElement('div'),
    }
  },

  computed: {
    elementsUsable() {
      const elms = this.elements
      if (!elms) return false
      return Object.keys(this.elements).length > 0
    },
  },

  watch: {
    options: {
      handler(opts) {
        if (opts && this.stripeElement) {
          this.stripeElement.update(opts)
        }
      },
      deep: true,
    },
  },

  beforeDestroy() {
    if (this.stripeElement) {
      this.stripeElement.unmount()
      this.stripeElement.destroy()
    }
  },

  mounted() {
    if (this.elementsUsable) {
      this.mountElement()
      this.handleEvents()
    }
  },

  methods: {
    mountElement() {
      const domEl = this.domElement
      this.stripeElement = createElement(this.elements, this.type, this.options)
      this.stripeElement.mount(domEl)
      this.$el.appendChild(domEl)

      return this.stripeElement
    },

    handleEvents() {
      // See stripe element events: https://stripe.com/docs/js/element/events
      const eventTypes = ['change', 'ready', 'focus', 'blur', 'escape']
      eventTypes.forEach((type) => {
        this.stripeElement.on(type, this.eventHandler.bind(this, type))
      })
    },

    eventHandler(type, e) {
      return this.$emit(type, e)
    },
  },
}
</script>
