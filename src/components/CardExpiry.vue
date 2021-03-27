<template>
  <stripe-element v-bind="[$props, $attrs, $listeners]" type="cardExpiry" />
</template>

<script>
import props from './props'
import StripeElement from './StripeElement'

export default {
  name: 'CardExpiry',
  components: { StripeElement },
  props,
}
</script>
