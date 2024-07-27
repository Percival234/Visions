const ROOT_PATHS = {
  USER: '/user',
  AUTH: '/auth',
  ADMIN: '/admin',
  CREATOR: '/creator',
};

const ADMIN_ROUTES = {
  DASHBOARD: `${ROOT_PATHS.ADMIN}`,
  MAIL: `${ROOT_PATHS.ADMIN}/mail`,
  USERS: `${ROOT_PATHS.ADMIN}/users`,
  ORDERS: `${ROOT_PATHS.ADMIN}/orders`,
  REPORTS: `${ROOT_PATHS.ADMIN}/reports`,
  PICTURES: `${ROOT_PATHS.ADMIN}/pictures`,
};

const CREATOR_ROUTES = {
  DASHBOARD: `${ROOT_PATHS.CREATOR}`,
  ORDERS: `${ROOT_PATHS.CREATOR}/orders`,
  WORKSHOP: `${ROOT_PATHS.CREATOR}/workshop`,
  SHOWCASE: `${ROOT_PATHS.CREATOR}/showcase`,
};

const USER_ROUTES = {
  PERSONAL: `${ROOT_PATHS.USER}`,
  ORDERS: `${ROOT_PATHS.USER}/orders`,
  SUPPORT: `${ROOT_PATHS.USER}/support`,
  SETTINGS: `${ROOT_PATHS.USER}/settings`,
  NOTIFICATIONS: `${ROOT_PATHS.USER}/notifications`,
};

const AUTH_ROUTES = {
  SIGN_IN: `${ROOT_PATHS.AUTH}/sign-in`,
  SIGN_UP: `${ROOT_PATHS.AUTH}/sign-up`,
  PASSWORD_RESET: `${ROOT_PATHS.AUTH}/password-reset`,
  PASSWORD_RESET_SUCCESS: `${ROOT_PATHS.AUTH}/password-reset-success`,
};

const MAIN_ROUTES = {
  HOME: '/',
  STORE: '/store',
  CART: '/shopping-cart',
  CHECKOUT: '/checkout',
  CHECKOUT_SUCCESS: '/checkout-success',
};

export const ROUTES = {
  MAIN: MAIN_ROUTES,
  USER: USER_ROUTES,
  AUTH: AUTH_ROUTES,
  ADMIN: ADMIN_ROUTES,
  CREATOR: CREATOR_ROUTES,
};
