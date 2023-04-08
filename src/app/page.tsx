import { Cards, DetailsCard } from './components';

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-zinc-700 md:max-h-auto sm:max-h-auto lg:h-screen justify-between'>
      <div className="flex lg:flex-row sm:flex-col w-full justify-between p-10">
        <div className="flex flex-col p-10 w-9/12">
        <h3 className="text-zinc-200 text-2xl font-bold">Se liga no clima em Santos:</h3>
        <Cards />

        <DetailsCard />
        </div>

        <div className="flex w-3/12">
        <h3 className="text-zinc-200 text-2xl font-bold py-10">Possibilidade de chuva:</h3>
        </div>
      </div>
    </div>
  )
}
