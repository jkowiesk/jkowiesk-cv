import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Stage = dynamic(() => import('@/components/canvas/Stage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <>
      {/* <div className='fixed top-0 bottom-0 left-0 right-0 w-64 h-64 m-auto bg-red-500'>
        <h1>test</h1>
      </div> */}
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Stage />

export async function getStaticProps() {
  return { props: { title: 'Main' } }
}
