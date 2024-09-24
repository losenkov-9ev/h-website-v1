import { RootState } from '../store';

export const selectIsAuth = (state: RootState) => Boolean(state.auth.user);
export const selectUser = (state: RootState) => state.auth.user.data;
export const selectStatus = (state: RootState) => state.auth.status;
