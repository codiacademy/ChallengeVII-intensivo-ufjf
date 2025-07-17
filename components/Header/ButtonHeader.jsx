'use client'

import { useState, useRef, useEffect } from 'react'
import SideBar from '../SideBar/SideBar'

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
        <button
            className="h-10  md:hidden flex items-center justify-center p-2 rounded-full text-white"
            aria-label="Abrir menu lateral"
            onClick={() => setOpen(!open)}
            type="button"
        >
            {/* Ícone hambúrguer SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
        </button>
    )
}

