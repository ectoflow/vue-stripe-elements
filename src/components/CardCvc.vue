<template>
  <stripe-element v-bind="[$props, $attrs, $listeners]" type="cardCvc" />
</template>

<script>
import props from './props'
import StripeElement from './StripeElement'

export default {
  name: 'CardCvc',
  components: { StripeElement },
  props,
}
</script>
