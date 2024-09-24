import { RootState } from '../store';

export const selectWindowWidth = (state: RootState) => state.window.width;
