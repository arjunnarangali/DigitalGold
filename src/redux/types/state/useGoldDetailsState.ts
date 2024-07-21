export type UserGoldDetail = {
  userGoldBalance: number;
  useAlertValues: IAlertValue;
};

export interface IAlertValue {
  buy: number | null;
  sell: number | null;
}
