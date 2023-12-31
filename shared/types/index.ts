import { DB_Response, Route } from "./request";

const SERVER_CONFIG: any = {
  PROTO: "http",
  PATH: "localhost",
  PORT: 3001,
};

import {
  UsersGetSchema,
  UsersRegisterSchema,
  type UsersType,
  UsersLoginSchema,
  type UsersLoginType,
  UserProfileSchema,
  type UserProfileType,
} from "./users";

import {
  ProductRegisterSchema,
  type ProductType,
  ProductGetManySchema,
} from "./product";

import {
  ShopCategoriesEnum,
  ShopCheckoutShipping,
  ShopCheckoutPayment,
  ShopCategoriesSchema,
  ShopQuerySchema,
} from "./shop";

import {
  CheckoutRegisterSchema,
  CheckoutRawSchema,
  type CheckoutRawType,
  CheckoutGetSchema,
  CheckoutDiscountSchema,
  type CheckoutDiscountType,
} from "./checkout";

export {
  SERVER_CONFIG,
  type DB_Response,
  type Route,
  //
  UsersGetSchema,
  UsersRegisterSchema,
  type UsersType,
  UsersLoginSchema,
  type UsersLoginType,
  UserProfileSchema,
  type UserProfileType,
  //
  ProductRegisterSchema,
  type ProductType,
  ProductGetManySchema,
  //
  ShopCategoriesEnum,
  ShopCheckoutShipping,
  ShopCheckoutPayment,
  ShopCategoriesSchema,
  ShopQuerySchema,
  //
  CheckoutRegisterSchema,
  CheckoutRawSchema,
  type CheckoutRawType,
  CheckoutGetSchema,
  CheckoutDiscountSchema,
  type CheckoutDiscountType,
};
