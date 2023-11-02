import { shopInfo, discounts, products } from './data.ts';
import {
  Product,
  ProductShort,
  Discounts,
  CartDiscount,
  UserPrivacy,
  UserPrivacySalutations,
  UserBilling,
  UserBillingShipping,
  UserBillingPayment,
  ShopCategories
} from './types.ts';
import store from './store.ts';

export {
  shopInfo,
  discounts,
  products,
  type Product,
  type ProductShort,
  type Discounts,
  type CartDiscount,
  type UserPrivacy,
  UserPrivacySalutations,
  type UserBilling,
  UserBillingShipping,
  UserBillingPayment,
  ShopCategories,
  store
};
