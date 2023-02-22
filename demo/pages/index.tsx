import type { NextPage } from 'next'
import BaseForm from 'components/BaseForm'
import ControlForm from 'components/ControlForm'
const Home: NextPage = () => {
  return (
    <>
      <BaseForm />
      <hr />
      <ControlForm />
    </>
  )
}

export default Home
