import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../components/Logo'
import InputCard from '../components/InputCard'

export default function Home() {
  return (
    <div>
      <Logo />
      <InputCard />
    </div>
    )
}
