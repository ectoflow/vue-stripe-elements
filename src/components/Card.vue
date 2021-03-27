<template>
  <stripe-element v-bind="[$props, $attrs, $listeners]" type="card" />
</template>

<script>
import props from './props'
import StripeElement from './StripeElement'

export default {
  name: 'Card',
  components: { StripeElement },
  props,
}
</script>
