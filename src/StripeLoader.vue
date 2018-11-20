<template>
  <component :is="tag">
    <slot v-if="stripeLoaded" />
    <slot v-else name="loading" />
  </component>
</template>

<script>
  export default {
    name: 'stripe-loader',

    props: {
      src: {
        type: String,
        default: 'https://js.stripe.com/v3/',
      },

      tag: {
        type: String,
        default: 'div',
      },
    },

    data() {
      return {
        stripeLoaded: false,
      };
    },

    mounted() {
      this.checkStripeLoaded();
    },

    methods: {
      /**
       * Load Stripe if it hasn't already loaded
       */
      checkStripeLoaded() {
        if (window.Stripe) {
          this.stripeLoaded = true;
          return;
        }

        const script = document.createElement('script');
        script.src = this.src;
        script.onload = this.checkStripeLoaded;
        document.head.appendChild(script);
      },
    },
  }
</script>
