export enum Branch {
  All = 'All',
  Mudgee = 'Mudgee',
  Orange = 'Orange',
  Bathurst = 'Bathurst',
  Taree = 'Taree',
  Gunnedah = 'Gunnedah',
  PortMacquarie = 'PortMacquarie',
  CoffsHarbour = 'CoffsHarbour',
  Dubbo = 'Dubbo',
  Global = 'Global',
}

export enum owePeriod {
  Owe30 = 0,
  Owe60 = 1,
  Owe90 = 2,
}

export enum Column {
  id,
  firstName,
  lastName,
  email,
  owe30,
  owe60,
  owe90,
  branch
}

export type csvExportData = string[][]