import { InferGetStaticPropsType, GetStaticProps } from 'next'
import MapContainer from '../components/MapContainer'


// export const getStaticProps: GetStaticProps = async () => {
//   return { props: { posts } }
// }

const Index = () => {
  return (
    <>
      <h1>hoge</h1>
      <MapContainer/>
    </>
  )
}

export default Index