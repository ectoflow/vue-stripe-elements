export default {
  stripe: {
    type: [String, Object], // stripe key or instance
    required: true
  },
  value: {
    type: String,
    required: false
  },
  stripeAccount: {
    type: String,
    required: false
  },
  apiVersion: {
    type: String,
    required: false
  },
  locale: {
    type: String,
    required: false
  },
  options: {
    type: Object,
    required: false
  }
}
