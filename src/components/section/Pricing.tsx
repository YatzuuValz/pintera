export default function Pricing() {
  return (
    <div className="border-b-2 border-black mx-auto font-sans py-20">
      {/* Header */}
      <header className="text-center pt-10">
        <h1 className="text-[48px] font-extrabold tracking-tight text-[#0b0b0b]">Pilih paket belajar mu</h1>
        <p className="text-[16px] text-[#6b6b6b] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </header>

      {/* Cards container */}
      <div className=" flex justify-center items-center gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative w-[320px] rounded-[3rem] p-8 text-white shadow-2xl overflow-hidden
        bg-[radial-gradient(circle_at_top,_#4b6cb7_0%,_#758eb7_40%,_#8ba3ca_100%)]">

            {/* Overlay Gradient Halus (Opsional untuk efek depth) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

            {/* Konten Utama */}
            <div className="relative z-10 flex flex-col items-center">

              {/* Bagian Harga */}
              <div className="text-center mt-4">
                <div className="flex items-start justify-center leading-none">
                  <span className="text-xl font-bold mt-1 mr-1">Rp</span>
                  <span className="text-5xl font-bold tracking-tight">300</span>
                  <span className="text-xl font-bold mt-1">.000</span>
                </div>
                <p className="text-sm font-medium text-blue-100/80 mt-1">1 bulan</p>
              </div>

              {/* Judul Paket */}
              <div className="w-full text-left mt-8 mb-4">
                <h3 className="text-2xl font-semibold">Pemula</h3>
              </div>

              {/* List Fitur */}
              <ul className="w-full space-y-3 mb-8">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    {/* Icon Checkmark SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-light text-blue-50">
                      Lorem ipsum dolor sit amet
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tombol */}
              <button className="w-full py-4 bg-[#0a1e50] text-white font-bold rounded-2xl 
            hover:bg-[#112a6b] transition-colors duration-300 shadow-lg mt-auto">
                Pilih paket
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
