'use client'
import { SunIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

interface CardProps {
  id: number;
  date: string;
  day: string;
  hour: string;
  weather: string;
}

const MOCKED_CARDS: CardProps[] = [
  { id: 0, day: 'Segunda', date:'10/04', hour: '11:42', weather: '16' },
  { id: 1, day: 'Terça', date:'11/04', hour: '11:42', weather: '20' },
  { id: 2, day: 'Quarta', date:'12/04', hour: '11:42', weather: '16' },
  { id: 3, day: 'Quinta', date:'13/04', hour: '11:42', weather: '20' },
  { id: 4, day: 'Sexta', date:'14/04', hour: '11:42', weather: '16' },
  { id: 5, day: 'Sábado', date:'15/04', hour: '11:42', weather: '20' },
  { id: 6, day: 'Domingo', date:'16/04', hour: '11:42', weather: '16' },
];

const CITY = "Santos";

export default async function Cards() {
  const [cards, setCards] = useState<CardProps[]>(MOCKED_CARDS);
  
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${CITY}&days=7&aqi=no&alerts=no`);

  const data = response.json();

  console.log('data: ', data);

  return (
    <div className="flex lg:flex-row flex-col py-10">
      {cards.map((card) => (
        <div key={`card-${card.id}`} className="bg-gradient-to-r from-sky-200 to-sky-300 w-full h-48 rounded-3xl flex flex-col justify-center items-center mr-4 md:mb-10 sm:mb-10 cursor-pointer">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-zinc-700">{card.day}</h1>
          <h3 className="text-1xl text-zinc-500 font-semibold self-end">{card.date}</h3>
        </div>
        <div className="flex flex-row items-center">
          <h3 className="text-zinc-700 text-2xl font-bold">{card.weather}º</h3>
          <SunIcon className="w-12 h-12 text-yellow-500" />
        </div>
      </div>
      ))}
    </div>
  )
}