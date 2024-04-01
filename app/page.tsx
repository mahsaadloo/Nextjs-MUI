import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Typography variant='h1'> Hello </Typography>
      <h1>Hello world!</h1>
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  )
}
