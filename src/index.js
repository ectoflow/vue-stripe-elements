import './lib'
import { Stripe, baseStyle } from './stripeElements'
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
  baseStyle,
  get instance() { return Stripe.instance },
  get createToken() { return Stripe.createToken }
}
