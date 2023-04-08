'use client'
import { MagnifyingGlassIcon, SunIcon } from '@heroicons/react/24/solid'
import { FormEvent, useRef } from 'react'

function Header() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = inputRef.current?.value;

    if(!input) return

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  }

  return (
    <header className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-10 md:flex items-center">
      <div className="flex flex-row items-center">
        <SunIcon className='h-24 w-24 p-0 text-zinc-300/20' />
        <h1 className="text-white text-3xl">Clima ZeroTreze</h1>
      </div>
      <form
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-zinc-700 max-w-md mx-auto w-full h-12"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar Cidade..."
          className="flex-1 outline-none bg-transparent text-zinc-300 placeholder:text-zinc-300"
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-zinc-100" />
      </form>
    </header>
  )
}

export default Header