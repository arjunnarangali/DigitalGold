import {IAlertValue} from '../types/state/useGoldDetailsState';
import {UserAlertValues, UserGoldBalance} from './constant';

export const setUserGoldBalance = (payload: number) => {
  return {
    type: UserGoldBalance,
    payload: payload,
  };
};
export const setUserAlertValues = (payload: IAlertValue) => {
  return {
    type: UserAlertValues,
    payload: payload,
  };
};
