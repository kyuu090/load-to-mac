import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Create from '../components/Map'

// export const getStaticProps: GetStaticProps = async () => {
//   return { props: { posts } }
// }

const Index = () => {
  return (
    <>
        <h1>hoge</h1>
        <Create/>
    </>
  )
}

export default Index