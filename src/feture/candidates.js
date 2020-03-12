import { userTypes } from '../store/candidate';

export const setCandidate = ({ getState, dispatch }) => next => (action) => {
  if (action.type === userTypes.SET_CANDIDATE) {
    alert('Set candidate')
    next(action);
  }
  next(action);
};
