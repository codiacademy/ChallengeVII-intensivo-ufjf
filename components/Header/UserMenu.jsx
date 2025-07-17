'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function UserMenu() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    // Fecha o menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="flex" ref={menuRef}>
            {/* Botão do menu */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition"
            >
                <Image
                    src="/perfil.jpg"
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full bg-white top-0"
                />
                {/* Ícone seta */}

            </button>

            {/* Menu Dropdown */}
            {open && (
                <div className="absolute right-0 top-10 mt-2 w-64 bg-[var(--cinza)] rounded-lg shadow-lg p-4 z-50 transition-all">
                    <div className="flex flex-col items-center text-center gap-2">
                        <Image
                            src="/perfil.jpg"
                            alt="Foto de perfil"
                            width={64}
                            height={64}
                            className="rounded-full bg-white"
                        />
                        <p className="text-lg font-semibold">Marcus Sarmento</p>
                        <p className="text-sm text-gray-500">Desenvolvedor Frontend</p>
                        <button
                            onClick={() => alert('Saindo...')}
                            className="mt-3 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            {/* Ícone de logout (SVG inline) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h6.75a2.25 2.25 0 002.25-2.25V15M18 15l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                            Sair
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

