import './lib'
import { Stripe, baseStyle } from './stripeElements'
import StripeElement from './StripeElement'
import StripeLoader from './StripeLoader'
import Card from './Card'
import CardExpiry from './CardExpiry'
import CardCvc from './CardCvc'
import CardNumber from './CardNumber'
import PostalCode from './PostalCode'

module.exports = {
  Card,
  CardNumber,
  CardExpiry,
  CardCvc,
  PostalCode,
  StripeElement,
  StripeLoader,
  baseStyle,
  get instance() { return Stripe.instance },
  get createToken() { return Stripe.createToken },
  get createSource() { return Stripe.createSource },
  get retrieveSource() { return Stripe.retrieveSource }
}
