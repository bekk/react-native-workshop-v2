import { APP_START } from '../action-types/start-action-types';

const initialState = {
  header: 'Click the button...'
};

const startReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_START: {
      return {
        ...state,
        header: 'Velkommen til React Native Workshop!'
      }
    }
    default: {
      return state;
    }
  }
};

export default startReducer;
