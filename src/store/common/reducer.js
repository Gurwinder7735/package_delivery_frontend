import * as actionType from "./actionTypes";

const initialState = {
  loading: false,
  success: false,
  failed: false,
  listing: [],
  item: '',
  modalType: "",
  isModalOpen: false
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_START:
      return {
        ...state,
        loading: true,
        success: false,
        failed: false,
      };

    case actionType.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        failed: false,
      };

    case actionType.ADD_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: action.payload,
      };

    case actionType.SET_LISTING:
      return {
        ...state,
        listing: action.payload,
      };

      case actionType.SET_ITEM:
        return {
          ...state,
          item: action.payload,
        };

    case actionType.CLEAR:
      return {
        ...state,
        loading: false,
        success: false,
        failed: false,
      };

    case actionType.SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };

    case actionType.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
  
};