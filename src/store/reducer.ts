import { initialState } from './Context';
export enum SNACK_CASES {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'error'
}
export const reducer = (
  state = initialState,
  action: {
    type: string;
    message?: string;
  }
) => {
  switch (action.type) {
    case SNACK_CASES.ERROR:
      return Object.assign({}, state, {
        open: true,
        type: action.type,
        message: action.message
      });
    case 'CLOSE':
      return { ...state, open: false };
    default:
      return state;
  }
};
