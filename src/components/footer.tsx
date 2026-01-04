import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#9aaad0] to-[#5b73b6] text-white">
            <div className="max-w-7xl mx-auto px-12 py-10">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white"></div>
                        <span className="text-lg font-semibold tracking-wide">pintera</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-white"></div>
                        <div className="w-8 h-8 rounded bg-white"></div>
                        <div className="w-8 h-8 rounded bg-white"></div>
                    </div>

                </div>

                <div className="my-8 h-px bg-white/30"></div>

                <p className="text-center text-sm text-white/80">
                    Copyright
                </p>

            </div>
        </footer>

    )
}

export default Footer