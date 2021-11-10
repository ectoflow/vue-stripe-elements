# Vue Stripe Elements
Flexible and powerful Vue components for Stripe. It's a glue between [Stripe.js](https://stripe.com/docs/js) and Vue component lifecycle.

- Vue 2 component collection: stable ✅
- Vue 3: use [vue-stripe-js](https://github.com/ectoflow/vue-stripe-js) 

# Quickstart

### 1. Install package:

```bash
# npm
npm i vue-stripe-elements-plus --save-dev

# yarn
yarn add vue-stripe-elements-plus --dev
```

### 2. Add Stripe.js library to the page:
```
<script src="https://js.stripe.com/v3/"></script>
```
> Alternatively, you can load Stripe library dynamically. Just make sure it's ready before your components mount.

### 3. Use built-in components
Create card

```html
<template>
  <div class="payment-simple">
    <StripeElements
      :stripe-key="stripeKey"
      :instance-options="instanceOptions"
      :elements-options="elementsOptions"
      #default="{ elements }" // attention: important part!
      ref="elms"
    >
      <StripeElement
        type="card"
        :elements="elements"
        :options="cardOptions"
        ref="card"
      />
    </StripeElements>
    <button @click="pay" type="button">Pay</button>
  </div>
</template>

<script>
import { StripeElements, StripeElement } from 'vue-stripe-elements-plus'

export default {
  name: 'PaymentSimple',

  components: {
    StripeElements,
    StripeElement
  },

  data () {
    return {
      stripeKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx', // test key, don't hardcode
      instanceOptions: {
        // https://stripe.com/docs/js/initializing#init_stripe_js-options
      },
      elementsOptions: {
        // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      },
      cardOptions: {
        // reactive
        // remember about Vue 2 reactivity limitations when dealing with options
        value: {
          postalCode: ''
        }
        // https://stripe.com/docs/stripe.js#element-options
      }
    }
  },

  methods: {
    pay () {
      // ref in template
      const groupComponent = this.$refs.elms
      const cardComponent = this.$refs.card
      // Get stripe element
      const cardElement = cardComponent.stripeElement

      // Access instance methods, e.g. createToken()
      groupComponent.instance.createToken(cardElement).then(result => {
        // Handle result.error or result.token
      })
    }
  }
}
</script>
```

### 4. Get advanced
Create multiple elements

```html
<StripeElements
  :stripe-key="stripeKey"
  :instance-options="instanceOptions"
  :elements-options="elementsOptions"
  #default="{ elements }" // attention: important part!
>
  <StripeElement
    type="cardNumber"
    :elements="elements"
    :options="cardNumberOptions"
  />
  <StripeElement
    type="postalCode"
    :elements="elements"
    :options="postalCodeOptions"
  />
</StripeElements>
```

### 5. Go wild
You can even create multiple groups, don't ask me why. It's possible.

```html
<StripeElements
  :stripe-key="stripeKey1"
  :instance-options="instanceOptions1"
  :elements-options="elementsOptions1"
  #default="{ elements }" // attention: important part!
>
  <StripeElement
    :elements="elements"
    :options="cardOptions"
  />
</StripeElements>
<StripeElements
  :stripe-key="stripeKey2"
  :instance-options="instanceOptions2"
  :elements-options="elementsOptions2"
  #default="{ elements }" // attention: important part!
>
  <StripeElement
    type="iban"
    :elements="elements"
    :options="ibanOptions"
  />
</StripeElements>
```

# Styles
No base style included. Main reason: overriding it isn't fun. Style as you wish via element options: [see details](https://stripe.com/docs/js/appendix/style).

# API Reference

## StripeElements.vue
Think of it as of individual group of elements. It creates stripe instance and elements object.

```js
import { StripeElements } from 'vue-stripe-elements-plus'
```

### props
```js
// https://stripe.com/docs/js/initializing#init_stripe_js-options
stripeKey: {
  type: String,
  required: true,
},
// https://stripe.com/docs/js/elements_object/create#stripe_elements-options
instanceOptions: {
  type: Object,
  default: () => ({}),
},
// https://stripe.com/docs/stripe.js#element-options
elementsOptions: {
  type: Object,
  default: () => ({}),
},
```

### data
You can access `instance` and `elements` by adding ref to StripeElements component.
```js
// data of StripeElements.vue
instance: {},
elements: {},
```

### default scoped slot
Elegant solution for props. Really handy because you can make `instance` and `elements` available to all children without adding extra code.

```html
<!-- Isn't it cool? I really like it! -->
<StripeElements #default="{elements, instance}">
  <StripeElement :elements="elements" />
  <CustomComponent :instance="instance" />
</StripeElements>
```

## StripeElement.vue
Universal and type agnostic component. Create any element supported by Stripe.

### props
```js
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
```

### data
```js
stripeElement
domElement
```

### options
Element options are reactive. Recommendation: don't use v-model on `StripeElement`, instead pass value via options.

```js
data() {
  return {
    elementOptions: {
      value: {
        postalCode: ''
      }
    }
  }
},

methods: {
  changePostalCode() {
    // will update stripe element automatically
    this.elementOptions.value.postalCode = '12345'
  }
}
```

### events
Following events are emitted on StripeElement
- change
- ready
- focus
- blur
- escape

```html
<StripeElement
  :elements="elements"
  @blur="doSomething"
/>
```

## Helpers
In case you like the manual gearbox. Check [stripeElements.js](src/stripeElements.js) for details.

```js
import { initStripe, createElements, createElement } from 'vue-stripe-elements-plus'
```

