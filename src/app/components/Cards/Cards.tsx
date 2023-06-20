'use client'
import { RootState } from '@/app/store';
import { getWeatherData, handleSelectForecastDay } from '@/app/store/weatherSlice';
import { SunIcon } from '@heroicons/react/24/solid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDay, format } from 'date-fns'
import { AnyAction } from '@reduxjs/toolkit';

let weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

export default function Cards() {
  const { location, current, forecast } = useSelector(({ weather }: RootState) => weather)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=Santos&days=7&aqi=no&alerts=no`);
    
      const data = await response.json().then((res) => dispatch(getWeatherData(res)))
      console.log(data)
      return data
    }

    getData()
  }, [])

  const handleClickCard = (forecastDay: any): AnyAction => {
    return dispatch(handleSelectForecastDay(forecastDay))
  }

  return (
    <>
      <h3 className="text-zinc-200 text-2xl font-bold">Se liga no clima em {location?.name}:</h3>
      <div className="flex lg:flex-row flex-col py-10">
        {forecast && forecast.forecastday?.map((weather: any) => (
          <div
            key={`card-${weather.date}`}
            className="bg-gradient-to-r from-sky-200 to-sky-300 w-full h-48 rounded-3xl flex flex-col justify-center items-center mr-4 mb-10 cursor-pointer"
            onClick={() => handleClickCard(weather)}
          >
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-zinc-700">{weekDays[getDay(new Date(weather.date))]}</h1>
            <h3 className="text-1xl text-zinc-500 font-semibold self-end">{format(new Date(weather.date), 'dd/MM')}</h3>
          </div>
          <div className="flex flex-row items-center">
            <h3 className="text-zinc-700 text-2xl font-bold">{weather.day.avgtemp_c}º</h3>
            <SunIcon className="w-12 h-12 text-yellow-500" />
          </div>
        </div>
        ))}
      </div>
    </>
  )
}