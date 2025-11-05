import { setToken, clearToken } from '../../common/CustomSuperagent';
import { PendingState } from '../../common/store/GenericReducerType';
import ReduxHelper from '../../common/store/ReduxHelper';
import { AccountAction, AccountActionTypes, AccountState, ACCOUNT_STORE } from './types';

const defaultState: AccountState = ReduxHelper.getItemReducerDefaultState(ACCOUNT_STORE);

const reducer = (state = defaultState, action: AccountAction): AccountState => {
  if (state.ident === action.store) {
    switch (action.typs) {
      case AccountActionTypes.LOGIN:
        {
          const user = action.payload;
          setToken(user);
          const newState = ReduxHelper.setItem(state, user);
          newState.valid = true;
          return newState;
        }
      case AccountActionTypes.SIDELOAD_TOKEN:
        {
          const user = action.payload;
          const newState = ReduxHelper.setItem(state, user);
          newState.valid = true;
          return newState;
        }
      case AccountActionTypes.INVALIDATE_TOKEN:
        {
          const newState = ReduxHelper.setPending(state, PendingState.COMPLETED);
          newState.valid = false;
          return newState;
        }
      case AccountActionTypes.FORGET_LOGIN:
        {
          // console.log('account reducer: FORGET_LOGIN');
          clearToken();
          // do not reset state to avoid automatic redirect navigation
          return state;
        }
      case AccountActionTypes.LOGOUT:
        {
          // console.log('account reducer: LOGOUT');
          clearToken();
          const newState = ReduxHelper.setPending(state, PendingState.COMPLETED);
          newState.item = undefined;
          return newState;
        }
      default:
        return ReduxHelper.caseItemDefaultReducer(state, action, defaultState);
    }
  }

  return ReduxHelper.caseDefaultReducer(state, action, defaultState);
};

export default reducer;
