'use client'

export default function ButtonHeader({ onClick }) {
    return (
        <button
            className="h-10  md:hidden flex items-center justify-center p-2 rounded-full text-white"
            aria-label="Abrir menu lateral"
            onClick={onClick}
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