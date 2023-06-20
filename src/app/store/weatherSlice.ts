import { createSlice } from '@reduxjs/toolkit'

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