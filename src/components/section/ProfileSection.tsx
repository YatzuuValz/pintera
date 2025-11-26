import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className="border-b-2 border-black py-20 mx-auto flex flex-col items-center justify-center  font-sans overflow-hidden">
      <div className='h-full flex flex-col items-center justify-start'>
        <div className="text-center">
          <h1 className="text-[48px] font-bold tracking-tight text-[#0b0b0b]">Profil Pengajar</h1>
          <p className="text-[16px] text-[#202020] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>

        <div className="relative w-1/1 aspect-5/4 flex items-center justify-center">
          {/* Middle tall blue rounded card */}
          <div className="absolute z-5 flex w-full h-80 rounded-[28px] bg-linear-to-br from-[#3b5fa8] to-[#6f86c6] shadow-2xl overflow-hidden px-8 py-6" >
          </div>
          <div>
            {/* Front translucent panel (to the left of the profile image) */}
            <div className="absolute z-10 w-[220px] h-[280px] rounded-[28px] bg-white/60 blur-none" style={{ transform: 'rotate(6deg)' }}></div>
            {/* Profile image overlapping left */}
            <div className="z-15 w-[300px] h-[340px] translate-x-0">
              <div className="w-[300px] h-[340px] -mt-6 ml-6">
                <Image src={'/ref/orang.png'} alt="profile" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
              </div>
            </div>
          </div>
          <div>
            {/* Name badge */}
            <div className="z-20 bg-primary rounded-xl px-6 py-3 shadow-lg">
              <span className="text-white text-[18px] font-semibold">Adipati Kim Mingyu</span>
            </div>

            {/* Awards list (right side) */}
            <div className="z-20 text-white text-[12px] leading-[18px] w-[220px]">
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

        </div>
      </div>
      {/* Left chevrons */}
      <div className="absolute left-10">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 13L16 26L28 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 13L26 26L38 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Right chevrons */}
      <div className="absolute right-10">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 13L36 26L24 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 13L26 26L14 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  )
}
