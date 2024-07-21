import {IAlertValue, UserGoldDetail} from '../types/state/useGoldDetailsState';
import {UserAlertValues, UserGoldBalance} from './constant';
import UserGoldDetailsActionType from '../types/actions/userGoldDetails';
import {RootState} from '../store';

const initialState: UserGoldDetail = {
  userGoldBalance: 0,
  useAlertValues: {
    buy: null,
    sell: null,
  },
};

export const getUserGoldBalance = (state: RootState) => state.userGold.userGoldBalance;
export const getUserAlertValues = (state: RootState): IAlertValue => state.userGold.useAlertValues;
const userGoldReducer = (
  state = initialState,
  action: UserGoldDetailsActionType,
): UserGoldDetail => {
  switch (action.type) {
    case UserGoldBalance:
      return {
        ...state,
        userGoldBalance: state.userGoldBalance + action.payload,
      };
    case UserAlertValues:
      return {
        ...state,
        useAlertValues: action.payload,
      };
    default:
      return state;
  }
};

export default userGoldReducer;
