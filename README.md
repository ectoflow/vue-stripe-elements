# Vue Stripe Elements

A Vue 2 component collection for [stripe elements](https://stripe.com/docs/elements).

## Usage example

Install package:

```
$ npm i vue-stripe-elements-plus --save
```

Add Stripe.js library to **index.html**:

```
<script src="https://js.stripe.com/v3/"></script>
```

Build a Vue component using the Card element:

```html
<template>
  <div id='app'>
    <h1>Please give us your payment details:</h1>
    <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />
    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay with credit card</button>
  </div>
</template>

<script>
import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  data () {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  components: { Card },

  methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    }
  }
}
</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>
```


Multiple elements
=================

Even if it is recommended to use the unified Card element, single elements for each field are supported. The following example shows a possible use in a credit card component:

```html
<template>
  <div class='credit-card-inputs' :class='{ complete }'>
    <card-number class='stripe-element card-number'
      ref='cardNumber'
      :stripe='stripe'
      :options='options'
      @change='number = $event.complete'
    />
    <card-expiry class='stripe-element card-expiry'
      ref='cardExpiry'
      :stripe='stripe'
      :options='options'
      @change='expiry = $event.complete'
    />
    <card-cvc class='stripe-element card-cvc'
      ref='cardCvc'
      :stripe='stripe'
      :options='options'
      @change='cvc = $event.complete'
    />
  </div>
</template>

<script>
import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'

export default {
  props: [ 'stripe', 'options' ],
  data () {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false
    }
  },
  components: { CardNumber, CardExpiry, CardCvc },
  methods: {
    update () {
      this.complete = this.number && this.expiry && this.cvc

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number () { this.update() },
    expiry () { this.update() },
    cvc () { this.update() }
  }
}
</script>

<style>
.credit-card-inputs.complete {
  border: 2px solid green;
}
</style>
```
## Supported Stripe Elements Functions

|Function|Reference|
|---|---|
| createToken() | https://stripe.com/docs/stripe-js/reference#stripe-create-token |
| createSource() | https://stripe.com/docs/stripe-js/reference#stripe-create-source |
| retrieveSource() | https://stripe.com/docs/stripe-js/reference#stripe-retrieve-source |
| paymentRequest() | https://stripe.com/docs/stripe-js/reference#stripe-payment-request |
| redirectToCheckout() | https://stripe.com/docs/stripe-js/reference#stripe-redirect-to-checkout |
| retrievePaymentIntent() | https://stripe.com/docs/stripe-js/reference#stripe-retrieve-payment-intent |
| handleCardPayment() | https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment |
| handleCardSetup() | https://stripe.com/docs/stripe-js/reference#stripe-handle-card-setup |
| handleCardAction() | https://stripe.com/docs/stripe-js/reference#stripe-handle-card-action |
| confirmPaymentIntent() | https://stripe.com/docs/stripe-js/reference#stripe-confirm-payment-intent |
| createPaymentMethod() | https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method |
