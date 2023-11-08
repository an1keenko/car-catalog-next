import { ICarDataSingle } from '@/interfaces/car.interface'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CarItem.module.scss'

const CarItem: FC<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.item}>
      <Image src={car.image} alt={car.name} width={300} height={200} />
      <h2>{car.name}</h2>
      <h3>{car.price}$</h3>
      <Link href={`/car/${car.id}`}>Read more</Link>
    </div>
  )
}

export default CarItem
