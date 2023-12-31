import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../services/Api';

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (params, thunkAPI) => {
    const api = Api.create();

    const getProductsResponse = await api
      .getProductsApi(params)
      .then(data => {
        return data?.data;
      })
      .catch(error => thunkAPI.rejectWithValue(error?.data || error));
    return getProductsResponse;
  },
);

export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (params, thunkAPI) => {
    const api = Api.create();
    const searchProductsResponse = await api
      .searchProductApi(params)
      .then(data => {
        return data?.data;
      })
      .catch(error => thunkAPI.rejectWithValue(error?.data || error));
    return searchProductsResponse;
  },
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (params, thunkAPI) => {
    const api = Api.create();
    const addProductResponse = await api
      .addProductApi(params)
      .then(data => {
        return data?.data;
      })
      .catch(error => thunkAPI.rejectWithValue(error?.data || error));
    return addProductResponse;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    total: 0,
    isLoading: false,
    search: {products: [], total: 0, skip: 0, isLoading: false},
  },
  reducers: {
    addUser: (state, payload) => {
      state.users.push(payload.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      }),
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products =
          action?.payload?.skip === 0
            ? [...action?.payload?.products]
            : [...state.products, ...action?.payload?.products];
        state.total = action?.payload?.total;
        state.isLoading = false;
      });

    builder.addCase(searchProducts.pending, (state, action) => {
      state.search.isLoading = true;
    }),
      builder.addCase(searchProducts.rejected, (state, action) => {
        state.search.isLoading = false;
      }),
      builder.addCase(searchProducts.fulfilled, (state, action) => {
        state.search.products =
          action?.payload?.skip === 0
            ? [...action?.payload?.products]
            : [...state.search.products, ...action?.payload?.products];
        state.search.total = action?.payload?.total;
        state.search.isLoading = false;
      });
    builder.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action?.payload);
      state.isLoading = false;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
