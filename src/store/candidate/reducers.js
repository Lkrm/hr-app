import { handleActions } from 'redux-actions';
import { userTypes } from './index';

const reducer = handleActions({
  [userTypes.SET_CANDIDATE]: () => ({ candidate: 'Ivan Some' }),
}, {
  isValidUser: false,
});

export default reducer;
