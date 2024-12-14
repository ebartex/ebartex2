import React, { FC } from 'react'

const Hero: FC = () => {
  return (
  
    <div className="flex justify-center">
            <br /><br /><br />
    <div className="w-1/2 bg-slate-500 rounded-xl p-10">
  
      
      <div className="relative flex justify-center flex-col">
        <div className="flex items-center justify-center">
          <div className="relative w-96">
            <label
              htmlFor="name1"
              className="absolute top-1 left-6 text-gray-500 text-md mt-2 pointer-events-none"
            >
              Rodzaj styropianu
            </label>
            <select
              id="name1"
              className="block shadow-md w-full h-24 px-6 py-4 text-xl border bg-white border-gray-300 rounded-l-lg focus:outline-none pt-10"
            >
              <option value="" disabled selected>Wybierz...</option>
              <option value="option1">Podłogowy</option>
              <option value="option2">Fasadowy</option>
              <option value="option3">Fundamentowy</option>
            </select>
          </div>

          <div className="relative w-96">
            <label
              htmlFor="name2"
              className="absolute top-2 left-6 text-gray-500 text-md mt-2 pointer-events-none"
            >
              Wybierz opcję 2as
            </label>
            <select
              id="name2"
              className="block shadow-md w-full h-24 px-6 py-4 text-xl border bg-white border-gray-300 focus:outline-none pt-10"
            >
              <option value="" disabled selected>Wybierz...</option>
              <option value="option1">Opcja 1</option>
              <option value="option2">Opcja 2</option>
              <option value="option3">Opcja 3</option>
            </select>
          </div>

          <div className="relative w-96">
            <label
              htmlFor="input1"
              className="absolute top-1 left-6 text-gray-500 text-md mt-2 pointer-events-none"
            >
              Wprowadź tekst
            </label>
            <input
              id="input1"
              type="text"
              placeholder="Wpisz nazwę"
              className="block shadow-md w-full h-24 px-6 py-4 rounded-r-xl text-xl border border-gray-300 focus:outline-none pt-10 pr-12"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded focus:outline-none hover:bg-blue-600"
            >
              Szukaj
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
