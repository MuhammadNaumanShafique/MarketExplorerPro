import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../services/Api';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (params, thunkAPI) => {
    const api = Api.create();
    const loginResponse = await api
      .userLoginApi(params.payload)
      .then(data => {
        return data?.data;
      })
      .catch(error => {
        params.onFail();
        return thunkAPI.rejectWithValue(error?.data || error);
      });
    return loginResponse;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    user: null,
  },
  reducers: {
    logoutUser: (state, payload) => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
  },
});

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;
