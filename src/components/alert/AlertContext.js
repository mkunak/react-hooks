import React, { useContext, useReducer } from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state, payload) => {
  switch (payload.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: true,
      }

    case HIDE_ALERT:
      return {
        ...state,
        alert: false,
      }

    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(false);
  // const toggle = () => setAlert((prev) => !prev);

  // first param is reducer, second - initial state:
  const [state, dispatch] = useReducer(reducer, { alert: false });

  // dispatch takes an object as parameter with minimun one field - "type":
  const show = () => dispatch({ type: SHOW_ALERT });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider value={{ alert: state.alert, show, hide }}>
      {children}
    </AlertContext.Provider>
  );
}