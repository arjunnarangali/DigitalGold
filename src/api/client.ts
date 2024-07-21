import apiClient from '.';
import {IGoldPrice} from '../models/goldPrice';
import {API_ROUTES} from './routes';

export const priceService = {
  getBuyingPrice() {
    return apiClient.get<IGoldPrice>(API_ROUTES.BUYING_PRICE);
  },
  getSellingPrice() {
    return apiClient.get<IGoldPrice>(API_ROUTES.SELLING_PRICE);
  },
};
