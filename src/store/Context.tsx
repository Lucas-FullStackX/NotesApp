import { createContext, PropsWithChildren, useReducer } from 'react';
import { reducer, SNACK_CASES } from './reducer';
export const initialState: {
  open: boolean;
  message?: string | null;
  type?: 'success' | 'error';
} = {
  open: false
};

// create context
const Context = createContext<{
  state: {
    open: boolean;
    message?: string | null;
    type?: 'success' | 'error';
  };
  success?: (message: string) => void;
  warning?: (message: string) => void;
  error?: (message: string) => void;
  info?: (message: string) => void;
  close?: () => void;
}>({
  state: initialState
});

function AppProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    success: (message: string) => {
      dispatch({ type: SNACK_CASES.SUCCESS, message });
    },
    error: (message: string) => {
      dispatch({ type: SNACK_CASES.ERROR, message });
    },
    info: (message: string) => {
      dispatch({ type: SNACK_CASES.INFO, message });
    },
    warning: (message: string) => {
      dispatch({ type: SNACK_CASES.WARNING, message });
    },
    close: () => {
      dispatch({ type: 'CLOSE' });
    }
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context, AppProvider };
