'use client'
import { RootState } from '@/app/store'
import { switchCondition } from '@/app/utils/switchCondition'
import { SunIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'

function DetailsCard() {
  const { location, current, forecast, selectedDay } = useSelector(({ weather }: RootState) => weather)
  const selectedDate = selectedDay && format(new Date(selectedDay?.date), 'dd/MM');
  
  return (
    selectedDay ? (
    <div className="flex flex-col p-10 bg-zinc-800 rounded-2xl">
      <h3 className="text-zinc-200 text-2xl font-bold pb-4">{`Mais detalhes de ${location?.name} em ${selectedDate}:`}</h3>

      <div className="flex flex-row flex-wrap items-center justify-center">
      {selectedDay && selectedDay.hour?.map((weather: any) => (
        <div key={`hour-${weather.time}`} className="bg-gradient-to-r from-sky-200 to-sky-300 m-2 rounded-2xl p-2 w-60">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-3xl text-zinc-700 font-semibold">{format(new Date(weather.time), 'HH:mm')}</h3>
            <div className="flex flex-row items-center">
            <h3 className="text-2xl text-zinc-700 font-bold">{weather.temp_c}º</h3>
            <SunIcon className="w-12 h-12 text-yellow-500" />
            </div>
          </div>
          <h3 className="text-lg text-zinc-600 font-semibold">{switchCondition(weather.condition.text)}</h3>
          <h3 className="text-1xl text-zinc-700 font-semibold">Possibilidade de chuva: {weather.chance_of_rain}%</h3>
          <h3 className="text-1xl text-zinc-700 font-semibold">Sensação Térmica: {weather.feelslike_c}º</h3>
          <h3 className="text-1xl text-zinc-700 font-semibold">Vento: {weather.wind_kph}KM/h</h3>
          <h3 className="text-1xl text-zinc-700 font-semibold">Umidade: {weather.humidity}%</h3>
        </div>
      ))}
      </div>
    </div>
    ) : (
      <h3 className="text-zinc-200 text-2xl font-bold pb-4">Selecione um dia para mais detalhes...</h3>
    )
  )
}

export default DetailsCard