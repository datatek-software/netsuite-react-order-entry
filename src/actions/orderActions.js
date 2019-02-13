import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchItemsSuccess = items =>
  ({ type: actions.SEARCH_ITEMS_SUCCESS, items });

export const searchTextChanged = searchText =>
  ({ type: actions.ITEM_SEARCH_TEXT_CHANGED, searchText });

export const itemQuantityChanged = (itemId, quantity) =>
  ({ type: actions.ITEM_QUANTITY_CHANGED, itemId, quantity });

export const addItemToOrder = (itemId) =>
  ({ type: actions.ADD_ITEM_TO_ORDER, itemId });

export const poNumberChanged = poNumber =>
  ({ type: actions.PO_NUMBER_CHANGED, poNumber });

export const shipToAddressChanged = addressId =>
  ({ type: actions.SHIPTO_ADDRESS_CHANGED, addressId });

export const saveOrderSuccess = () =>
  ({ type: actions.SAVE_ORDER_SUCCESS });

export const saveOrder = orderData => console.log(orderData) ||
  ajax.dispatchAsync('saving order', 'saveOrder', saveOrderSuccess, orderData);

export const searchItems = searchText =>
  ajax.dispatchAsync('searching for items', 'searchItems', searchItemsSuccess, searchText);
