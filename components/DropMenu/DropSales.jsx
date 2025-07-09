'use client'

import { useState, useRef, useEffect } from 'react'

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Selecione uma opção')
  const menuRef = useRef(null)

  const options = ['Crédito', 'PIX', 'Dinheiro', 'Débito']

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    setSelected(option)
    setOpen(false)
  }

  return (
    <div className="relative w-64" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left shadow-sm hover:border-gray-400 transition"
      >
        {selected}
        <span className="float-right">▼</span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}