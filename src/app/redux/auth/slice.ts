import { ActionReducerMapBuilder, AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './types';
import { fetchAuthData, fetchAuthMe, fetchAuthRegister } from './thunks';
import { ELoadingStatus } from '../../@types/types';

const initialState: IAuthState = {
  user: null,
  status: ELoadingStatus.loading,
};

const handleAsyncActions = <T, Arg>(
  builder: ActionReducerMapBuilder<IAuthState>,
  thunk: AsyncThunk<T, Arg, {}>,
) => {
  builder
    .addCase(thunk.pending, (state: IAuthState) => {
      state.status = ELoadingStatus.loading;
      state.user = null;
    })
    .addCase(thunk.fulfilled, (state: IAuthState, action: PayloadAction<T>) => {
      state.status = ELoadingStatus.fulfilled;
      state.user = action.payload;
    })
    .addCase(thunk.rejected, (state: IAuthState) => {
      state.status = ELoadingStatus.rejected;
      state.user = null;
    });
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    handleAsyncActions(builder, fetchAuthData);
    handleAsyncActions(builder, fetchAuthRegister);
    handleAsyncActions(builder, fetchAuthMe);
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
