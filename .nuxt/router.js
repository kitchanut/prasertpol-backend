import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03427558 = () => interopDefault(import('../pages/index_inventory_car.vue' /* webpackChunkName: "pages/index_inventory_car" */))
const _d3624398 = () => interopDefault(import('../pages/index_sale.vue' /* webpackChunkName: "pages/index_sale" */))
const _cd833490 = () => interopDefault(import('../pages/index_sale_team.vue' /* webpackChunkName: "pages/index_sale_team" */))
const _5ad2bf1f = () => interopDefault(import('../pages/index_status.vue' /* webpackChunkName: "pages/index_status" */))
const _13af7fba = () => interopDefault(import('../pages/installments.vue' /* webpackChunkName: "pages/installments" */))
const _3e40e30e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4043ba52 = () => interopDefault(import('../pages/negotiations.vue' /* webpackChunkName: "pages/negotiations" */))
const _d94062a6 = () => interopDefault(import('../pages/check/receive_money.vue' /* webpackChunkName: "pages/check/receive_money" */))
const _4cd9cc9f = () => interopDefault(import('../pages/commission/commission.vue' /* webpackChunkName: "pages/commission/commission" */))
const _73e80973 = () => interopDefault(import('../pages/customer/customerDetails.vue' /* webpackChunkName: "pages/customer/customerDetails" */))
const _3e7fee04 = () => interopDefault(import('../pages/customer/customers.vue' /* webpackChunkName: "pages/customer/customers" */))
const _0e219e67 = () => interopDefault(import('../pages/customer/customerVisits.vue' /* webpackChunkName: "pages/customer/customerVisits" */))
const _7db1502a = () => interopDefault(import('../pages/historys/history_cars.vue' /* webpackChunkName: "pages/historys/history_cars" */))
const _2984ea20 = () => interopDefault(import('../pages/historys/history_part_cars.vue' /* webpackChunkName: "pages/historys/history_part_cars" */))
const _755a5c36 = () => interopDefault(import('../pages/historys/history_parts.vue' /* webpackChunkName: "pages/historys/history_parts" */))
const _a7b0fce4 = () => interopDefault(import('../pages/historys/history_purchase_POparts.vue' /* webpackChunkName: "pages/historys/history_purchase_POparts" */))
const _3b56df4b = () => interopDefault(import('../pages/historys/history_repairs.vue' /* webpackChunkName: "pages/historys/history_repairs" */))
const _323e5533 = () => interopDefault(import('../pages/historys/history_repairsOut.vue' /* webpackChunkName: "pages/historys/history_repairsOut" */))
const _6ac4cb88 = () => interopDefault(import('../pages/historys/history_stock_parts.vue' /* webpackChunkName: "pages/historys/history_stock_parts" */))
const _1477f526 = () => interopDefault(import('../pages/historys/history_workings.vue' /* webpackChunkName: "pages/historys/history_workings" */))
const _feb6a398 = () => interopDefault(import('../pages/incomes/financial.vue' /* webpackChunkName: "pages/incomes/financial" */))
const _768aa5e4 = () => interopDefault(import('../pages/incomes/income.vue' /* webpackChunkName: "pages/incomes/income" */))
const _74a55ecd = () => interopDefault(import('../pages/infocar/infocar.vue' /* webpackChunkName: "pages/infocar/infocar" */))
const _b9b338a6 = () => interopDefault(import('../pages/liff/appointment.vue' /* webpackChunkName: "pages/liff/appointment" */))
const _3e33287f = () => interopDefault(import('../pages/liff/bankApprove.vue' /* webpackChunkName: "pages/liff/bankApprove" */))
const _f957e332 = () => interopDefault(import('../pages/liff/booking.vue' /* webpackChunkName: "pages/liff/booking" */))
const _24d05d2e = () => interopDefault(import('../pages/liff/cancle.vue' /* webpackChunkName: "pages/liff/cancle" */))
const _f331addc = () => interopDefault(import('../pages/liff/changeCar.vue' /* webpackChunkName: "pages/liff/changeCar" */))
const _20428a90 = () => interopDefault(import('../pages/liff/changeCustomer.vue' /* webpackChunkName: "pages/liff/changeCustomer" */))
const _a12b1a12 = () => interopDefault(import('../pages/liff/login.vue' /* webpackChunkName: "pages/liff/login" */))
const _a07bbe64 = () => interopDefault(import('../pages/liff/money.vue' /* webpackChunkName: "pages/liff/money" */))
const _24995610 = () => interopDefault(import('../pages/liff/moneyWithdraw.vue' /* webpackChunkName: "pages/liff/moneyWithdraw" */))
const _7be6a715 = () => interopDefault(import('../pages/liff/release.vue' /* webpackChunkName: "pages/liff/release" */))
const _da1e84c4 = () => interopDefault(import('../pages/liff/shareImage.vue' /* webpackChunkName: "pages/liff/shareImage" */))
const _c8dfa3dc = () => interopDefault(import('../pages/liff/shareRequest.vue' /* webpackChunkName: "pages/liff/shareRequest" */))
const _4d01359f = () => interopDefault(import('../pages/liff/sign.vue' /* webpackChunkName: "pages/liff/sign" */))
const _c7596da2 = () => interopDefault(import('../pages/liff/signDeposit.vue' /* webpackChunkName: "pages/liff/signDeposit" */))
const _d1e93faa = () => interopDefault(import('../pages/liff/update.vue' /* webpackChunkName: "pages/liff/update" */))
const _453e7237 = () => interopDefault(import('../pages/mobile/customerDetails.vue' /* webpackChunkName: "pages/mobile/customerDetails" */))
const _70158c70 = () => interopDefault(import('../pages/mobile/customers.vue' /* webpackChunkName: "pages/mobile/customers" */))
const _6fb90d23 = () => interopDefault(import('../pages/mobile/customerVisits.vue' /* webpackChunkName: "pages/mobile/customerVisits" */))
const _68975189 = () => interopDefault(import('../pages/mobile/stock.vue' /* webpackChunkName: "pages/mobile/stock" */))
const _7e3bc224 = () => interopDefault(import('../pages/mobile/work.vue' /* webpackChunkName: "pages/mobile/work" */))
const _0145eeb0 = () => interopDefault(import('../pages/prints/print_article_car.vue' /* webpackChunkName: "pages/prints/print_article_car" */))
const _2aeadd7e = () => interopDefault(import('../pages/prints/print_booking.vue' /* webpackChunkName: "pages/prints/print_booking" */))
const _05528542 = () => interopDefault(import('../pages/prints/print_commi.vue' /* webpackChunkName: "pages/prints/print_commi" */))
const _7060d53d = () => interopDefault(import('../pages/prints/print_contract.vue' /* webpackChunkName: "pages/prints/print_contract" */))
const _92ceeb24 = () => interopDefault(import('../pages/prints/print_financial.vue' /* webpackChunkName: "pages/prints/print_financial" */))
const _1b967bc2 = () => interopDefault(import('../pages/prints/print_purchasepart.vue' /* webpackChunkName: "pages/prints/print_purchasepart" */))
const _2b94be5c = () => interopDefault(import('../pages/prints/print_vax.vue' /* webpackChunkName: "pages/prints/print_vax" */))
const _7562c027 = () => interopDefault(import('../pages/prints/print_warranty.vue' /* webpackChunkName: "pages/prints/print_warranty" */))
const _12525d70 = () => interopDefault(import('../pages/purchases/purchase_cars.vue' /* webpackChunkName: "pages/purchases/purchase_cars" */))
const _76592542 = () => interopDefault(import('../pages/purchases/purchase_parts.vue' /* webpackChunkName: "pages/purchases/purchase_parts" */))
const _208dd415 = () => interopDefault(import('../pages/record/price_record.vue' /* webpackChunkName: "pages/record/price_record" */))
const _55f86b88 = () => interopDefault(import('../pages/reports/report_add_moneys.vue' /* webpackChunkName: "pages/reports/report_add_moneys" */))
const _0bc0a43e = () => interopDefault(import('../pages/reports/report_booking.vue' /* webpackChunkName: "pages/reports/report_booking" */))
const _a8a4236c = () => interopDefault(import('../pages/reports/report_booking_duplicate.vue' /* webpackChunkName: "pages/reports/report_booking_duplicate" */))
const _357bc128 = () => interopDefault(import('../pages/reports/report_cancel_workings.vue' /* webpackChunkName: "pages/reports/report_cancel_workings" */))
const _a25738ec = () => interopDefault(import('../pages/reports/report_cars.vue' /* webpackChunkName: "pages/reports/report_cars" */))
const _e895d5d4 = () => interopDefault(import('../pages/reports/report_commission.vue' /* webpackChunkName: "pages/reports/report_commission" */))
const _d2276686 = () => interopDefault(import('../pages/reports/report_expense.vue' /* webpackChunkName: "pages/reports/report_expense" */))
const _0d232c54 = () => interopDefault(import('../pages/reports/report_income.vue' /* webpackChunkName: "pages/reports/report_income" */))
const _d6705088 = () => interopDefault(import('../pages/reports/report_income_old.vue' /* webpackChunkName: "pages/reports/report_income_old" */))
const _07df9390 = () => interopDefault(import('../pages/reports/report_part_cars.vue' /* webpackChunkName: "pages/reports/report_part_cars" */))
const _08ad036f = () => interopDefault(import('../pages/reports/report_profit.vue' /* webpackChunkName: "pages/reports/report_profit" */))
const _4731c4fe = () => interopDefault(import('../pages/reports/report_purchase_car.vue' /* webpackChunkName: "pages/reports/report_purchase_car" */))
const _6b6884ee = () => interopDefault(import('../pages/reports/report_purchase_POparts.vue' /* webpackChunkName: "pages/reports/report_purchase_POparts" */))
const _5c228feb = () => interopDefault(import('../pages/reports/report_repairs.vue' /* webpackChunkName: "pages/reports/report_repairs" */))
const _502aa50c = () => interopDefault(import('../pages/reports/report_repairs_out.vue' /* webpackChunkName: "pages/reports/report_repairs_out" */))
const _3e682b4e = () => interopDefault(import('../pages/reports/report_request_receive_money.vue' /* webpackChunkName: "pages/reports/report_request_receive_money" */))
const _a1ee52b4 = () => interopDefault(import('../pages/reports/report_request_withdraw_money.vue' /* webpackChunkName: "pages/reports/report_request_withdraw_money" */))
const _18d75447 = () => interopDefault(import('../pages/reports/report_sale_car.vue' /* webpackChunkName: "pages/reports/report_sale_car" */))
const _46dffadc = () => interopDefault(import('../pages/reports/report_stock_parts.vue' /* webpackChunkName: "pages/reports/report_stock_parts" */))
const _88b57414 = () => interopDefault(import('../pages/reports/report_withdraw_money.vue' /* webpackChunkName: "pages/reports/report_withdraw_money" */))
const _da00d5c2 = () => interopDefault(import('../pages/reports/report_work_cancle.vue' /* webpackChunkName: "pages/reports/report_work_cancle" */))
const _23232e66 = () => interopDefault(import('../pages/reports/report_workings.vue' /* webpackChunkName: "pages/reports/report_workings" */))
const _10188e2f = () => interopDefault(import('../pages/request/appointment.vue' /* webpackChunkName: "pages/request/appointment" */))
const _a9b559fe = () => interopDefault(import('../pages/request/bankApprove.vue' /* webpackChunkName: "pages/request/bankApprove" */))
const _75186c2e = () => interopDefault(import('../pages/request/booking.vue' /* webpackChunkName: "pages/request/booking" */))
const _05ea296c = () => interopDefault(import('../pages/request/cancle.vue' /* webpackChunkName: "pages/request/cancle" */))
const _80f3e7d8 = () => interopDefault(import('../pages/request/changeCar.vue' /* webpackChunkName: "pages/request/changeCar" */))
const _496338ce = () => interopDefault(import('../pages/request/changeCustomer.vue' /* webpackChunkName: "pages/request/changeCustomer" */))
const _6a597354 = () => interopDefault(import('../pages/request/log.vue' /* webpackChunkName: "pages/request/log" */))
const _c3825660 = () => interopDefault(import('../pages/request/money.vue' /* webpackChunkName: "pages/request/money" */))
const _3276320c = () => interopDefault(import('../pages/request/moneyWithdraw.vue' /* webpackChunkName: "pages/request/moneyWithdraw" */))
const _83f33ad2 = () => interopDefault(import('../pages/request/release.vue' /* webpackChunkName: "pages/request/release" */))
const _7dfcf95d = () => interopDefault(import('../pages/request/sign.vue' /* webpackChunkName: "pages/request/sign" */))
const _78252c69 = () => interopDefault(import('../pages/request/update.vue' /* webpackChunkName: "pages/request/update" */))
const _bfed1746 = () => interopDefault(import('../pages/settings/amount_down.vue' /* webpackChunkName: "pages/settings/amount_down" */))
const _5cd03d64 = () => interopDefault(import('../pages/settings/amount_slacken.vue' /* webpackChunkName: "pages/settings/amount_slacken" */))
const _7720d8aa = () => interopDefault(import('../pages/settings/amphures.vue' /* webpackChunkName: "pages/settings/amphures" */))
const _fecf8f56 = () => interopDefault(import('../pages/settings/branch_teams.vue' /* webpackChunkName: "pages/settings/branch_teams" */))
const _7f1237cc = () => interopDefault(import('../pages/settings/branches.vue' /* webpackChunkName: "pages/settings/branches" */))
const _0a05bf92 = () => interopDefault(import('../pages/settings/car_lift.vue' /* webpackChunkName: "pages/settings/car_lift" */))
const _e48ad89e = () => interopDefault(import('../pages/settings/car_models.vue' /* webpackChunkName: "pages/settings/car_models" */))
const _452ebd74 = () => interopDefault(import('../pages/settings/car_part_types.vue' /* webpackChunkName: "pages/settings/car_part_types" */))
const _719e202e = () => interopDefault(import('../pages/settings/car_parts.vue' /* webpackChunkName: "pages/settings/car_parts" */))
const _6335a2dd = () => interopDefault(import('../pages/settings/car_serie_subs.vue' /* webpackChunkName: "pages/settings/car_serie_subs" */))
const _1a834d84 = () => interopDefault(import('../pages/settings/car_series.vue' /* webpackChunkName: "pages/settings/car_series" */))
const _51f9b902 = () => interopDefault(import('../pages/settings/car_types.vue' /* webpackChunkName: "pages/settings/car_types" */))
const _1fed5c6c = () => interopDefault(import('../pages/settings/colors.vue' /* webpackChunkName: "pages/settings/colors" */))
const _3f7e304e = () => interopDefault(import('../pages/settings/districts.vue' /* webpackChunkName: "pages/settings/districts" */))
const _b5c4fe9e = () => interopDefault(import('../pages/settings/fuels.vue' /* webpackChunkName: "pages/settings/fuels" */))
const _e23c2e64 = () => interopDefault(import('../pages/settings/geographies.vue' /* webpackChunkName: "pages/settings/geographies" */))
const _00f5a3b4 = () => interopDefault(import('../pages/settings/low_cars.vue' /* webpackChunkName: "pages/settings/low_cars" */))
const _6eeb7e9b = () => interopDefault(import('../pages/settings/middle_price.vue' /* webpackChunkName: "pages/settings/middle_price" */))
const _65908c62 = () => interopDefault(import('../pages/settings/partner_bank.vue' /* webpackChunkName: "pages/settings/partner_bank" */))
const _66ce49c2 = () => interopDefault(import('../pages/settings/partner_bank_branch.vue' /* webpackChunkName: "pages/settings/partner_bank_branch" */))
const _1a9a5e11 = () => interopDefault(import('../pages/settings/partner_car.vue' /* webpackChunkName: "pages/settings/partner_car" */))
const _484243ba = () => interopDefault(import('../pages/settings/partner_company.vue' /* webpackChunkName: "pages/settings/partner_company" */))
const _339840b7 = () => interopDefault(import('../pages/settings/partner_technician.vue' /* webpackChunkName: "pages/settings/partner_technician" */))
const _408576d7 = () => interopDefault(import('../pages/settings/promotion.vue' /* webpackChunkName: "pages/settings/promotion" */))
const _bfed3512 = () => interopDefault(import('../pages/settings/provinces.vue' /* webpackChunkName: "pages/settings/provinces" */))
const _2cf54a42 = () => interopDefault(import('../pages/settings/repair_lists.vue' /* webpackChunkName: "pages/settings/repair_lists" */))
const _af347620 = () => interopDefault(import('../pages/settings/repair_prices.vue' /* webpackChunkName: "pages/settings/repair_prices" */))
const _36dc692d = () => interopDefault(import('../pages/settings/repair_prices_outdoor.vue' /* webpackChunkName: "pages/settings/repair_prices_outdoor" */))
const _4b8283d7 = () => interopDefault(import('../pages/settings/search_term.vue' /* webpackChunkName: "pages/settings/search_term" */))
const _5f3779a3 = () => interopDefault(import('../pages/settings/units.vue' /* webpackChunkName: "pages/settings/units" */))
const _1087297c = () => interopDefault(import('../pages/settings/user_groups.vue' /* webpackChunkName: "pages/settings/user_groups" */))
const _5fc2739c = () => interopDefault(import('../pages/settings/user_line.vue' /* webpackChunkName: "pages/settings/user_line" */))
const _0667af84 = () => interopDefault(import('../pages/settings/user_teams.vue' /* webpackChunkName: "pages/settings/user_teams" */))
const _e0ca8888 = () => interopDefault(import('../pages/settings/users.vue' /* webpackChunkName: "pages/settings/users" */))
const _19d7e1dc = () => interopDefault(import('../pages/stock/imagecar.vue' /* webpackChunkName: "pages/stock/imagecar" */))
const _178e8161 = () => interopDefault(import('../pages/stock/stock_cars.vue' /* webpackChunkName: "pages/stock/stock_cars" */))
const _671bc78e = () => interopDefault(import('../pages/stock/stock_parts.vue' /* webpackChunkName: "pages/stock/stock_parts" */))
const _72759394 = () => interopDefault(import('../pages/withdraw/payment_car.vue' /* webpackChunkName: "pages/withdraw/payment_car" */))
const _1e729680 = () => interopDefault(import('../pages/withdraw/withdraw_money.vue' /* webpackChunkName: "pages/withdraw/withdraw_money" */))
const _00b6bce3 = () => interopDefault(import('../pages/withdraw/withdraw_part.vue' /* webpackChunkName: "pages/withdraw/withdraw_part" */))
const _a7ccfb02 = () => interopDefault(import('../pages/work/follow.vue' /* webpackChunkName: "pages/work/follow" */))
const _b4d8c27e = () => interopDefault(import('../pages/work/followDown.vue' /* webpackChunkName: "pages/work/followDown" */))
const _d672ddd8 = () => interopDefault(import('../pages/work/work_Technician.vue' /* webpackChunkName: "pages/work/work_Technician" */))
const _03f2a0aa = () => interopDefault(import('../pages/work/work_Technician_pathner.vue' /* webpackChunkName: "pages/work/work_Technician_pathner" */))
const _2f560cb8 = () => interopDefault(import('../pages/work/works.vue' /* webpackChunkName: "pages/work/works" */))
const _04f0a4f7 = () => interopDefault(import('../pages/work/works_cancle.vue' /* webpackChunkName: "pages/work/works_cancle" */))
const _21659d1d = () => interopDefault(import('../pages/work/works_close.vue' /* webpackChunkName: "pages/work/works_close" */))
const _1737eb62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/backend/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index_inventory_car",
    component: _03427558,
    name: "index_inventory_car"
  }, {
    path: "/index_sale",
    component: _d3624398,
    name: "index_sale"
  }, {
    path: "/index_sale_team",
    component: _cd833490,
    name: "index_sale_team"
  }, {
    path: "/index_status",
    component: _5ad2bf1f,
    name: "index_status"
  }, {
    path: "/installments",
    component: _13af7fba,
    name: "installments"
  }, {
    path: "/login",
    component: _3e40e30e,
    name: "login"
  }, {
    path: "/negotiations",
    component: _4043ba52,
    name: "negotiations"
  }, {
    path: "/check/receive_money",
    component: _d94062a6,
    name: "check-receive_money"
  }, {
    path: "/commission/commission",
    component: _4cd9cc9f,
    name: "commission-commission"
  }, {
    path: "/customer/customerDetails",
    component: _73e80973,
    name: "customer-customerDetails"
  }, {
    path: "/customer/customers",
    component: _3e7fee04,
    name: "customer-customers"
  }, {
    path: "/customer/customerVisits",
    component: _0e219e67,
    name: "customer-customerVisits"
  }, {
    path: "/historys/history_cars",
    component: _7db1502a,
    name: "historys-history_cars"
  }, {
    path: "/historys/history_part_cars",
    component: _2984ea20,
    name: "historys-history_part_cars"
  }, {
    path: "/historys/history_parts",
    component: _755a5c36,
    name: "historys-history_parts"
  }, {
    path: "/historys/history_purchase_POparts",
    component: _a7b0fce4,
    name: "historys-history_purchase_POparts"
  }, {
    path: "/historys/history_repairs",
    component: _3b56df4b,
    name: "historys-history_repairs"
  }, {
    path: "/historys/history_repairsOut",
    component: _323e5533,
    name: "historys-history_repairsOut"
  }, {
    path: "/historys/history_stock_parts",
    component: _6ac4cb88,
    name: "historys-history_stock_parts"
  }, {
    path: "/historys/history_workings",
    component: _1477f526,
    name: "historys-history_workings"
  }, {
    path: "/incomes/financial",
    component: _feb6a398,
    name: "incomes-financial"
  }, {
    path: "/incomes/income",
    component: _768aa5e4,
    name: "incomes-income"
  }, {
    path: "/infocar/infocar",
    component: _74a55ecd,
    name: "infocar-infocar"
  }, {
    path: "/liff/appointment",
    component: _b9b338a6,
    name: "liff-appointment"
  }, {
    path: "/liff/bankApprove",
    component: _3e33287f,
    name: "liff-bankApprove"
  }, {
    path: "/liff/booking",
    component: _f957e332,
    name: "liff-booking"
  }, {
    path: "/liff/cancle",
    component: _24d05d2e,
    name: "liff-cancle"
  }, {
    path: "/liff/changeCar",
    component: _f331addc,
    name: "liff-changeCar"
  }, {
    path: "/liff/changeCustomer",
    component: _20428a90,
    name: "liff-changeCustomer"
  }, {
    path: "/liff/login",
    component: _a12b1a12,
    name: "liff-login"
  }, {
    path: "/liff/money",
    component: _a07bbe64,
    name: "liff-money"
  }, {
    path: "/liff/moneyWithdraw",
    component: _24995610,
    name: "liff-moneyWithdraw"
  }, {
    path: "/liff/release",
    component: _7be6a715,
    name: "liff-release"
  }, {
    path: "/liff/shareImage",
    component: _da1e84c4,
    name: "liff-shareImage"
  }, {
    path: "/liff/shareRequest",
    component: _c8dfa3dc,
    name: "liff-shareRequest"
  }, {
    path: "/liff/sign",
    component: _4d01359f,
    name: "liff-sign"
  }, {
    path: "/liff/signDeposit",
    component: _c7596da2,
    name: "liff-signDeposit"
  }, {
    path: "/liff/update",
    component: _d1e93faa,
    name: "liff-update"
  }, {
    path: "/mobile/customerDetails",
    component: _453e7237,
    name: "mobile-customerDetails"
  }, {
    path: "/mobile/customers",
    component: _70158c70,
    name: "mobile-customers"
  }, {
    path: "/mobile/customerVisits",
    component: _6fb90d23,
    name: "mobile-customerVisits"
  }, {
    path: "/mobile/stock",
    component: _68975189,
    name: "mobile-stock"
  }, {
    path: "/mobile/work",
    component: _7e3bc224,
    name: "mobile-work"
  }, {
    path: "/prints/print_article_car",
    component: _0145eeb0,
    name: "prints-print_article_car"
  }, {
    path: "/prints/print_booking",
    component: _2aeadd7e,
    name: "prints-print_booking"
  }, {
    path: "/prints/print_commi",
    component: _05528542,
    name: "prints-print_commi"
  }, {
    path: "/prints/print_contract",
    component: _7060d53d,
    name: "prints-print_contract"
  }, {
    path: "/prints/print_financial",
    component: _92ceeb24,
    name: "prints-print_financial"
  }, {
    path: "/prints/print_purchasepart",
    component: _1b967bc2,
    name: "prints-print_purchasepart"
  }, {
    path: "/prints/print_vax",
    component: _2b94be5c,
    name: "prints-print_vax"
  }, {
    path: "/prints/print_warranty",
    component: _7562c027,
    name: "prints-print_warranty"
  }, {
    path: "/purchases/purchase_cars",
    component: _12525d70,
    name: "purchases-purchase_cars"
  }, {
    path: "/purchases/purchase_parts",
    component: _76592542,
    name: "purchases-purchase_parts"
  }, {
    path: "/record/price_record",
    component: _208dd415,
    name: "record-price_record"
  }, {
    path: "/reports/report_add_moneys",
    component: _55f86b88,
    name: "reports-report_add_moneys"
  }, {
    path: "/reports/report_booking",
    component: _0bc0a43e,
    name: "reports-report_booking"
  }, {
    path: "/reports/report_booking_duplicate",
    component: _a8a4236c,
    name: "reports-report_booking_duplicate"
  }, {
    path: "/reports/report_cancel_workings",
    component: _357bc128,
    name: "reports-report_cancel_workings"
  }, {
    path: "/reports/report_cars",
    component: _a25738ec,
    name: "reports-report_cars"
  }, {
    path: "/reports/report_commission",
    component: _e895d5d4,
    name: "reports-report_commission"
  }, {
    path: "/reports/report_expense",
    component: _d2276686,
    name: "reports-report_expense"
  }, {
    path: "/reports/report_income",
    component: _0d232c54,
    name: "reports-report_income"
  }, {
    path: "/reports/report_income_old",
    component: _d6705088,
    name: "reports-report_income_old"
  }, {
    path: "/reports/report_part_cars",
    component: _07df9390,
    name: "reports-report_part_cars"
  }, {
    path: "/reports/report_profit",
    component: _08ad036f,
    name: "reports-report_profit"
  }, {
    path: "/reports/report_purchase_car",
    component: _4731c4fe,
    name: "reports-report_purchase_car"
  }, {
    path: "/reports/report_purchase_POparts",
    component: _6b6884ee,
    name: "reports-report_purchase_POparts"
  }, {
    path: "/reports/report_repairs",
    component: _5c228feb,
    name: "reports-report_repairs"
  }, {
    path: "/reports/report_repairs_out",
    component: _502aa50c,
    name: "reports-report_repairs_out"
  }, {
    path: "/reports/report_request_receive_money",
    component: _3e682b4e,
    name: "reports-report_request_receive_money"
  }, {
    path: "/reports/report_request_withdraw_money",
    component: _a1ee52b4,
    name: "reports-report_request_withdraw_money"
  }, {
    path: "/reports/report_sale_car",
    component: _18d75447,
    name: "reports-report_sale_car"
  }, {
    path: "/reports/report_stock_parts",
    component: _46dffadc,
    name: "reports-report_stock_parts"
  }, {
    path: "/reports/report_withdraw_money",
    component: _88b57414,
    name: "reports-report_withdraw_money"
  }, {
    path: "/reports/report_work_cancle",
    component: _da00d5c2,
    name: "reports-report_work_cancle"
  }, {
    path: "/reports/report_workings",
    component: _23232e66,
    name: "reports-report_workings"
  }, {
    path: "/request/appointment",
    component: _10188e2f,
    name: "request-appointment"
  }, {
    path: "/request/bankApprove",
    component: _a9b559fe,
    name: "request-bankApprove"
  }, {
    path: "/request/booking",
    component: _75186c2e,
    name: "request-booking"
  }, {
    path: "/request/cancle",
    component: _05ea296c,
    name: "request-cancle"
  }, {
    path: "/request/changeCar",
    component: _80f3e7d8,
    name: "request-changeCar"
  }, {
    path: "/request/changeCustomer",
    component: _496338ce,
    name: "request-changeCustomer"
  }, {
    path: "/request/log",
    component: _6a597354,
    name: "request-log"
  }, {
    path: "/request/money",
    component: _c3825660,
    name: "request-money"
  }, {
    path: "/request/moneyWithdraw",
    component: _3276320c,
    name: "request-moneyWithdraw"
  }, {
    path: "/request/release",
    component: _83f33ad2,
    name: "request-release"
  }, {
    path: "/request/sign",
    component: _7dfcf95d,
    name: "request-sign"
  }, {
    path: "/request/update",
    component: _78252c69,
    name: "request-update"
  }, {
    path: "/settings/amount_down",
    component: _bfed1746,
    name: "settings-amount_down"
  }, {
    path: "/settings/amount_slacken",
    component: _5cd03d64,
    name: "settings-amount_slacken"
  }, {
    path: "/settings/amphures",
    component: _7720d8aa,
    name: "settings-amphures"
  }, {
    path: "/settings/branch_teams",
    component: _fecf8f56,
    name: "settings-branch_teams"
  }, {
    path: "/settings/branches",
    component: _7f1237cc,
    name: "settings-branches"
  }, {
    path: "/settings/car_lift",
    component: _0a05bf92,
    name: "settings-car_lift"
  }, {
    path: "/settings/car_models",
    component: _e48ad89e,
    name: "settings-car_models"
  }, {
    path: "/settings/car_part_types",
    component: _452ebd74,
    name: "settings-car_part_types"
  }, {
    path: "/settings/car_parts",
    component: _719e202e,
    name: "settings-car_parts"
  }, {
    path: "/settings/car_serie_subs",
    component: _6335a2dd,
    name: "settings-car_serie_subs"
  }, {
    path: "/settings/car_series",
    component: _1a834d84,
    name: "settings-car_series"
  }, {
    path: "/settings/car_types",
    component: _51f9b902,
    name: "settings-car_types"
  }, {
    path: "/settings/colors",
    component: _1fed5c6c,
    name: "settings-colors"
  }, {
    path: "/settings/districts",
    component: _3f7e304e,
    name: "settings-districts"
  }, {
    path: "/settings/fuels",
    component: _b5c4fe9e,
    name: "settings-fuels"
  }, {
    path: "/settings/geographies",
    component: _e23c2e64,
    name: "settings-geographies"
  }, {
    path: "/settings/low_cars",
    component: _00f5a3b4,
    name: "settings-low_cars"
  }, {
    path: "/settings/middle_price",
    component: _6eeb7e9b,
    name: "settings-middle_price"
  }, {
    path: "/settings/partner_bank",
    component: _65908c62,
    name: "settings-partner_bank"
  }, {
    path: "/settings/partner_bank_branch",
    component: _66ce49c2,
    name: "settings-partner_bank_branch"
  }, {
    path: "/settings/partner_car",
    component: _1a9a5e11,
    name: "settings-partner_car"
  }, {
    path: "/settings/partner_company",
    component: _484243ba,
    name: "settings-partner_company"
  }, {
    path: "/settings/partner_technician",
    component: _339840b7,
    name: "settings-partner_technician"
  }, {
    path: "/settings/promotion",
    component: _408576d7,
    name: "settings-promotion"
  }, {
    path: "/settings/provinces",
    component: _bfed3512,
    name: "settings-provinces"
  }, {
    path: "/settings/repair_lists",
    component: _2cf54a42,
    name: "settings-repair_lists"
  }, {
    path: "/settings/repair_prices",
    component: _af347620,
    name: "settings-repair_prices"
  }, {
    path: "/settings/repair_prices_outdoor",
    component: _36dc692d,
    name: "settings-repair_prices_outdoor"
  }, {
    path: "/settings/search_term",
    component: _4b8283d7,
    name: "settings-search_term"
  }, {
    path: "/settings/units",
    component: _5f3779a3,
    name: "settings-units"
  }, {
    path: "/settings/user_groups",
    component: _1087297c,
    name: "settings-user_groups"
  }, {
    path: "/settings/user_line",
    component: _5fc2739c,
    name: "settings-user_line"
  }, {
    path: "/settings/user_teams",
    component: _0667af84,
    name: "settings-user_teams"
  }, {
    path: "/settings/users",
    component: _e0ca8888,
    name: "settings-users"
  }, {
    path: "/stock/imagecar",
    component: _19d7e1dc,
    name: "stock-imagecar"
  }, {
    path: "/stock/stock_cars",
    component: _178e8161,
    name: "stock-stock_cars"
  }, {
    path: "/stock/stock_parts",
    component: _671bc78e,
    name: "stock-stock_parts"
  }, {
    path: "/withdraw/payment_car",
    component: _72759394,
    name: "withdraw-payment_car"
  }, {
    path: "/withdraw/withdraw_money",
    component: _1e729680,
    name: "withdraw-withdraw_money"
  }, {
    path: "/withdraw/withdraw_part",
    component: _00b6bce3,
    name: "withdraw-withdraw_part"
  }, {
    path: "/work/follow",
    component: _a7ccfb02,
    name: "work-follow"
  }, {
    path: "/work/followDown",
    component: _b4d8c27e,
    name: "work-followDown"
  }, {
    path: "/work/work_Technician",
    component: _d672ddd8,
    name: "work-work_Technician"
  }, {
    path: "/work/work_Technician_pathner",
    component: _03f2a0aa,
    name: "work-work_Technician_pathner"
  }, {
    path: "/work/works",
    component: _2f560cb8,
    name: "work-works"
  }, {
    path: "/work/works_cancle",
    component: _04f0a4f7,
    name: "work-works_cancle"
  }, {
    path: "/work/works_close",
    component: _21659d1d,
    name: "work-works_close"
  }, {
    path: "/",
    component: _1737eb62,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
