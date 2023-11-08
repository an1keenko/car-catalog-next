import { FC } from 'react'
import { ICarDataSingle } from '@/interfaces/car.interface'
import Layout from '@/components/layout/Layout'
import CarItem from '@/components/ui/car/CarItem'

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  return (
    <Layout title={car.name} description="Good expensive car!">
      <CarItem car={car} />
    </Layout>
  )
}

export default CarDetail
