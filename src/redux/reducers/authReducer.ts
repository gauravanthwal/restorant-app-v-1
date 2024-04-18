import { Types } from "../Types";

const initialState = {
  isAuth: false,
  user: {
    token: null,
  },
  isLoading: false,
};

export const authReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.user.LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        user: { ...state.user, token: payload.token },
      };

    case Types.user.GET_TOKEN_FROM_STORAGE:
      return {
        ...state,
        isAuth: true,
        user: { ...state.user, token: payload },
      };

    case Types.user.SET_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case Types.user.REMOVE_USER_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case Types.user.LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};
