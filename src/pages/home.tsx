import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const BackgroundStage = dynamic(() => import('@/components/canvas/BackgroundStage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      <main className='w-full h-full grid place-items-center'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
        <section className='relative flex items-center justify-between w-1/3 h-64'>
          <div className='text-5xl'>
            <h1 className='text-paragraph'>Hi I&#39;m,</h1>
            <h1 className='text-headline'>Jakub Kowieski</h1>
            <h1 className='text-contrast'>Front-end dev</h1>
          </div>
          <Image className='' src='/icons/avatar.png' alt='avatar' width={200} height={200} />
        </section>
      </main>
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <BackgroundStage />

export async function getStaticProps() {
  return { props: { title: 'Home' } }
}
