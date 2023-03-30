import localFont from 'next/font/local'

const retro = localFont({ src: '../../fonts/speedy_retro.otf' })

export default function FirstLoading() {
  return (
    <div className='fixed bg-black z-99999 w-[100vw] h-[100vh] grid place-items-center'>
      <section className={`text-6xl p-8  text-purple-primary  ${retro.className}`}>
        <span>
          Loading
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </section>
    </div>
  )
}
