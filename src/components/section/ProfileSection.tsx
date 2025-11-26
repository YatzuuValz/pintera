import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className="w-[900px] min-h-screen h-[620px] relative mx-auto border-[#2b475e]  font-sans overflow-hidden">
      {/* Header */}
      <header className="text-center pt-10">
        <h1 className="text-[48px] font-extrabold tracking-tight text-[#0b0b0b]">Profil Pengajar</h1>
        <p className="text-[16px] text-[#6b6b6b] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </header>

      {/* Center card area */}
      <div className="absolute left-1/2 top-[170px] -translate-x-1/2 w-[760px] h-[340px]">
        {/* Back rounded card (light) */}
        <div className="absolute left-0 top-0 w-[340px] h-[280px] rounded-[28px] bg-white/90 shadow-2xl translate-x-[-40px] translate-y-[-10px] rotate-[-6deg]" style={{boxShadow: '0 30px 40px rgba(50,60,90,0.08)'}}></div>

        {/* Middle tall blue rounded card */}
        <div className="absolute left-[120px] top-[-10px] w-[520px] h-[320px] rounded-[28px] bg-gradient-to-br from-[#3b5fa8] to-[#6f86c6] shadow-2xl overflow-hidden px-8 py-6" style={{transform: 'rotate(-2deg)'}}>
          {/* Name badge */}
          <div className="absolute right-6 top-[-18px] bg-[#0f335b] rounded-[12px] px-6 py-3 shadow-lg">
            <span className="text-white text-[18px] font-semibold">Adipati Kim Mingyu</span>
          </div>

          {/* Awards list (right side) */}
          <div className="absolute right-8 top-20 text-white text-[12px] leading-[18px] w-[220px]">
            <div className="mb-3">
              <div className="font-semibold">award1</div>
              <div className="text-[11px] opacity-80">lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">award1</div>
              <div className="text-[11px] opacity-80">lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">award1</div>
              <div className="text-[11px] opacity-80">lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">award1</div>
              <div className="text-[11px] opacity-80">lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">award1</div>
              <div className="text-[11px] opacity-80">lorem ipsum dolor sit amet, consectetur</div>
            </div>
          </div>
        </div>

        {/* Front translucent panel (to the left of the profile image) */}
        <div className="absolute left-[40px] top-[30px] w-[220px] h-[280px] rounded-[28px] bg-white/60 blur-none" style={{transform: 'rotate(6deg)'}}></div>

        {/* Profile image overlapping left */}
        <div className="absolute left-[12px] top-[30px] w-[300px] h-[340px] -translate-x-0">
          <div className="relative w-[300px] h-[340px] -mt-6 ml-6">
            <Image src={'/ref/orang.png'} alt="profile" fill style={{objectFit: 'contain', objectPosition: 'left'}}/>
          </div>
        </div>

      </div>

      {/* Left chevrons */}
      <div className="absolute left-10 top-[320px]">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 13L16 26L28 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M38 13L26 26L38 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Right chevrons */}
      <div className="absolute right-10 top-[320px]">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 13L36 26L24 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 13L26 26L14 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

    </div>
  )
}
