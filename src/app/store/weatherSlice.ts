import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET } from '../api/weather/route';

interface StateProps {
  current: any;
  location: any;
  forecast: any;
  selectedDay: any;
}

const initialState: StateProps = {
  current: null,
  location: null,
  forecast: null,
  selectedDay: null
}

export const getWeatherDataAsync: any = createAsyncThunk(
  'weather/getWeatherData',
  async () => {
    const response = await GET()
    return response
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherData(state, { payload }) {
      return {
        ...state,
        location: payload.location,
        current: payload.current,
        forecast: payload.forecast
      }
    },
    handleSelectForecastDay(state, { payload }) {
      return {
        ...state,
        selectedDay: payload
      }
    }
  }
})

export const { getWeatherData, handleSelectForecastDay } = weatherSlice.actions

export default weatherSlice.reducer