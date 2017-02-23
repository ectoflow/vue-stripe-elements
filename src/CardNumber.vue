<template>
  <stripe-element type='cardNumber' :stripe='stripe' :value='value' :options='options' />
</template>

<script>
import props from './props'
import StripeElement from './StripeElement'

export default {
  props,
  components: { StripeElement },
}
</script>
