<template>
  <div v-if="elementsUsable">
    <slot :instance="instance" :elements="elements"></slot>
  </div>
</template>

<script>
import { initStripe, createElements } from '../stripeElements'

export default {
  name: 'StripeElements',

  props: {
    stripeKey: {
      type: String,
      required: true,
    },
    instanceOptions: {
      type: Object,
      default: () => ({}),
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      instance: {},
      elements: {},
    }
  },

  computed: {
    elementsUsable() {
      const elms = this.elements
      if (!elms) return false
      return Object.keys(elms).length > 0
    },
  },

  mounted() {
    // Create stripe instance
    this.instance = initStripe(this.stripeKey, this.instanceOptions)

    // Create elements
    this.elements = createElements(this.instance, this.elementsOptions)
  },
}
</script>
