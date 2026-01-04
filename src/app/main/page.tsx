import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div className='h-full bg-linear-to-b from-tertiary via-primary-light to-tertiary pt-20'>
      <div className='w-full flex min-h-screen py-20 flex-col items-center justify-center border-b-2 border-black'>
        <p className='font-bold text-8xl text-primary'>Halo!</p>
        <p className='text-5xl'>selamat belajar</p>
      </div>
      <div className='min-h-screen w-full flex gap-10 py-20 flex-col items-center justify-center'>
        <div className='relative flex flex-col justify-center  px-60 bg-tertiary w-8/10 aspect-6/2 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] rounded-4xl'>
          <p className='z-10 font-bold text-8xl text-primary'>Jadwal</p>
          <p className='z-10 text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque at</p>
          <Image src="/ref/kalender.png" alt='' height={1000} width={1000} className='absolute left-0 h-full w-fit' />
          <div className='absolute shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] bg-primary right-5 top-5 aspect-6/2 w-1/10 rounded-lg text-white text-2xl flex items-center justify-center'>Lihat</div>
        </div>

        <div className='relative flex flex-col justify-center  px-60 bg-tertiary w-8/10 aspect-6/2 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] rounded-4xl'>
          <p className='z-10 font-bold text-8xl text-primary'>Materi</p>
          <p className='z-10 text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque at</p>
          <Image src="/ref/buku.png" alt='' height={1000} width={1000} className='absolute left-0 h-full w-fit' />
          <div className='absolute shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] bg-primary right-5 top-5 aspect-6/2 w-1/10 rounded-lg text-white text-2xl flex items-center justify-center'>Lihat</div>
        </div>

        <div className='flex w-8/10 justify-between items-center aspect-9/2'>
          <div className='relative flex flex-col justify-end w-49/100 h-full pl-25 px-10  bg-tertiary shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] rounded-4xl'>
            <div className='z-10 pb-7 pr-10'>
              <p className=' font-bold text-5xl text-primary'>Vidio Pembelajaran</p>
              <p className=' text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <Image src="/ref/play.png" alt='' height={1000} width={1000} className='absolute left-0 h-full w-fit' />
            <div className='absolute shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] bg-primary right-5 top-5 aspect-6/2 w-1/10 rounded-lg text-white text-lg flex items-center justify-center'>Lihat</div>
          </div>
          <div className='relative flex flex-col justify-end w-49/100 h-full pl-25 px-10  bg-primary shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] rounded-4xl'>
            <div className='z-10 pb-7 pr-10'>
              <p className=' font-bold text-5xl text-tertiary'>Rekaman Zoom</p>
              <p className='text-tertiary text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <Image src="/ref/file1.png" alt='' height={1000} width={1000} className='absolute left-0 h-full w-fit' />
            <div className='absolute shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] bg-tertiary right-5 top-5 aspect-6/2 w-1/10 rounded-lg text-primary text-lg flex items-center justify-center'>Lihat</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Main