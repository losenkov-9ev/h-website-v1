export type Mods = Record<string, boolean | string | undefined>;

export enum ELocation {
  home = '/',
  profile = '/profile',
  reviews = '/reviews',
}

export enum EOrderStatus {
  payed = 'payed',
  wairing = 'waiting',
  fail = 'fail',
}

export enum ELoadingStatus {
  loading = 'loading',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}

export type MetaType = Record<string, number>;
