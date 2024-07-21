import {UserAlertValues, UserGoldBalance} from '../../userGoldDetails/constant';
import {IAlertValue} from '../state/useGoldDetailsState';

export type UserGoldBalance = {
  type: typeof UserGoldBalance;
  payload: number;
};
export type UserAlertValues = {
  type: typeof UserAlertValues;
  payload: IAlertValue;
};

export type UserGoldDetailsActionType = UserGoldBalance | UserAlertValues;
export default UserGoldDetailsActionType;
