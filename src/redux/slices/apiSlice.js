import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { isEmpty } from "lodash";
import privateConfig from "../../config/private.json";

export const apiGET = createAsyncThunk("api/get", async (payload, thunkAPI) => {
  try {
    const url = `${privateConfig.WEATHER_API}/${payload.path}${
      payload.query
        ? `?${qs.stringify(payload.query)}&appid=${privateConfig.API_KEY}`
        : ""
    }`;
    const response = await axios.get(url);

    return await response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const apiSlice = createSlice({
  name: "api",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apiGET.fulfilled, (state, { payload, meta }) => {
      const { path } = meta.arg;
      const pathParts = path.split("/").filter((path) => path !== "");
      const firstPart = pathParts.splice(0, 1);

      const result = pathParts
        .reverse()
        .reduce((res, key) => ({ [key]: res }), payload);

      state[firstPart] = { ...state[firstPart], ...result };
    });
  },
});

export const { increment, decrement, incrementByAmount } = apiSlice.actions;

export const getApiResource = (state, path) => {
  const pathParts = path.split("/").filter((path) => path !== "");

  let result = state.api;

  if (isEmpty(result)) return result;

  for (const part of pathParts) {
    result = result[part];
  }

  return result;
};

export default apiSlice.reducer;
