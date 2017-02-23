<template>
</template>

<script>
import props from './props'
import create from './stripeElements'

export default {
  // please see https://stripe.com/docs/elements/reference for details
  props: Object.assign({type: {type:String, required:true}}, props),

  beforeMount () {
    this._element = create(this.type, this.stripe, this.options)
  },

  mounted () {
    // Vue likes to stay in control of $el but Stripe needs a real element
    const el = document.createElement('div')
    this._element.mount(el)
    // this.$children cannot be used because it expects a VNode :(
    this.$el.appendChild(el)
  }
}
</script>
