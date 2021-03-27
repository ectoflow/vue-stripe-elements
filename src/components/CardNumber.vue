<template>
  <stripe-element v-bind="[$props, $attrs, $listeners]" type="cardNumber" />
</template>

<script>
import props from './props'
import StripeElement from './StripeElement'

export default {
  name: 'CardNumber',
  components: { StripeElement },
  props,
}
</script>
