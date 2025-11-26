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
          <article key={i} className="w-1/4 aspect-5/7 rounded-4xl shadow-[0_25px_40px_rgba(20,40,80,0.12)] bg-radial-[at_50%_0%] from-primary from-10% via-[#2f4b84] via-60% to-tertiary to-200% p-6 relative flex flex-col justify-between">
            <div>
              <div className="text-right text-white">
                <div className="text-[22px] font-extrabold leading-none">Rp <span className="text-[28px]">300<span className="text-[12px] align-super">.000</span></span></div>
                <div className="text-[12px] opacity-80">1 bulan</div>
              </div>

              <h3 className="text-white text-[18px] font-semibold mt-6">Pemula</h3>

              <ul className="mt-4 space-y-2 text-[12px] text-white/90">
                {Array.from({ length: 6 }).map((_, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-[14px]">Lorem ipsum dolor sit amet</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <button className="w-[160px] py-3 rounded-[12px] bg-[#082147] text-white font-medium shadow-[0_6px_12px_rgba(8,33,71,0.4)]">Pilih paket</button>
            </div>
          </article>
        ))}
      </div>

    </div>
  )
}
