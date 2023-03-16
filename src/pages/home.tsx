import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const BackgroundStage = dynamic(() => import('@/components/canvas/BackgroundStage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <div>
      <main className='relative w-[100vw] h-[100vh] grid place-items-center z-1'>
        <div className='absolute top-0 left-0 bg-black w-[100vw] h-[100vh] opacity-70'></div>
        <div className='fixed flex items-center justify-between w-1/3 h-64'>
          <div className='text-5xl'>
            <h1 className='text-2xl text-paragraph'>Hi I&#39;m,</h1>
            <h1 className='text-headline'>Jakub Kowieski</h1>
            <h1 className='text-contrast'>Front-end dev</h1>
          </div>
          <Image src='/icons/avatar.png' alt='avatar' width={200} height={200} />
        </div>
      </main>

      <div className='relative w-full bg-gradient-to-l from-black to-background z-2'>
        <section className='flex flex-col py-14 h-[100vh] px-28'>
          <div className='flex justify-between w-full'>
            <h1 className='text-5xl text-headline'>
              About <span className='textGradient bg-gradient-to-t'>me</span>{' '}
            </h1>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='url(#grad1)'
                strokeWidth='1.5'
                className='w-12 h-12'
                viewBox='0 0 24 24'>
                <linearGradient id='grad1' x1='0%' x2='100%' y1='0%' y2='0%'>
                  <stop offset='0%' stopColor='#647DEE'></stop>
                  <stop offset='100%' stopColor='#FC2977'></stop>
                  {/* <stop offset='0%' style='stop-color:#b794f4;stop-opacity:1' />
                  <stop offset='50%' style='stop-color:#ed64a6;stop-opacity:1' />
                  <stop offset='100%' style='stop-color:#f56565;stop-opacity:1' /> */}
                </linearGradient>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'></path>
              </svg>
            </span>
          </div>

          <div className='flex justify-between h-full mx-16'>
            <div className='flex flex-col mt-16 text-3xl text-gray-300 w-fit gap-2 h-fit'>
              <h2>
                <span className='text-6xl textGradient'>I</span> am a computer science student
              </h2>
              <h2>
                <span className='text-6xl textGradient'>I</span> love exploring cutting-edge tech!
              </h2>
              <h2>
                <span className='text-6xl textGradient'>I</span> am interested in web development
              </h2>
              <h2>
                <span className='text-6xl textGradient'>I</span> honed my skills through many group projects.
              </h2>
            </div>

            <div className='flex-1 h-full grid place-items-center'>
              <Image src='/img/hello.png' alt='wave' width={400} height={400} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <BackgroundStage />

export async function getStaticProps() {
  return { props: { title: 'Home' } }
}

{
  /* <div className='relative flex items-center justify-between w-1/3 h-64'>
  <div className='text-5xl'>
    <h1 className='text-paragraph'>Hi I&#39;m,</h1>
    <h1 className='text-headline'>Jakub Kowieski</h1>
    <h1 className='text-contrast'>Front-end dev</h1>
  </div>
  <Image className='' src='/icons/avatar.png' alt='avatar' width={200} height={200} />
</div> */
}
