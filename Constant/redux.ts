import MessageVN from '@/public/assets/language/vn.json'

const localeVN = {
  locale: 'vi',
  messages: MessageVN
}

export enum SLICE {
  Setting = 'Setting',
  Language = 'Language',
  UserData = 'UserData',
  ConnectedChain = 'ConnectedChain'
}

export const WHITE_LIST_PERSIT_REDUX = [SLICE.Language]

export const INIT_STATE = {
  [SLICE.Language]: localeVN,
  [SLICE.Setting]: null,
  [SLICE.UserData]: null,
  [SLICE.ConnectedChain]: 56
} as const

export type TYPE_SLICE = {
  [SLICE.Language]: {
    locale: string,
    messages: any
  }
  [SLICE.Setting]: Object | null
  [SLICE.UserData]: Object | null
  [SLICE.ConnectedChain]: Number
}

export type TYPRE_PERSIST_REDUCER = {
  [SLICE.Language]?: {
    locale: string,
    messages: any
  },
  [SLICE.Setting]?: Object | null,
  [SLICE.UserData]?: Object | null,
  [SLICE.ConnectedChain]?: Number
} & unknown


