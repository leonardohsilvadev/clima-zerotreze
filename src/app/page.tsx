import { Cards, DetailsCard } from './components';

export default async function Home() {
  return (
    <div className='flex flex-col items-center bg-zinc-700 max-h-auto justify-between'>
      <div className="flex flex-col lg:flex-row w-full justify-between p-10">
        <div className="flex flex-col p-10 w-9/12">
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
