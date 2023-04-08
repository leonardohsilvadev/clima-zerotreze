'use client'
import { SunIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

interface CardProps {
  id: number;
  day: string;
  hour: string;
  weather: string;
}

const MOCKED_CARDS: CardProps[] = [
  { id: 0, day: 'Segunda', hour: '11:42', weather: '16' },
  { id: 1, day: 'Terça', hour: '11:42', weather: '20' },
  { id: 2, day: 'Quarta', hour: '11:42', weather: '16' },
  { id: 3, day: 'Quinta', hour: '11:42', weather: '20' },
  { id: 4, day: 'Sexta', hour: '11:42', weather: '16' },
  { id: 5, day: 'Sábado', hour: '11:42', weather: '20' },
  { id: 6, day: 'Domingo', hour: '11:42', weather: '16' },
];

function Cards() {
  const [cards, setCards] = useState<CardProps[]>(MOCKED_CARDS);

  return (
    <div className="flex flex-row py-10">
      {cards.map((card) => (
        <div key={`card-${card.id}`} className="bg-sky-200 w-full h-48 rounded-3xl flex flex-col justify-center items-center mr-4 cursor-pointer">
        <div className="flex flex-row">
          <h1>{card.day}</h1>
          <h3>{card.hour}</h3>
        </div>
        <div className="flex flex-row">
          <h3>{card.weather}º</h3>
          <SunIcon className="w-12 h-12 text-yellow-500" />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Cards