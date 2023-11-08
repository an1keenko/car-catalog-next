import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ICarDataSingle } from '@/interfaces/car.interface'
import { CarService } from '@/services/car.service'
import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  id: string
}

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars = await CarService.getAll()

  return {
    paths: cars.map((car) => ({ params: { id: String(car.id) } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({ params }) => {
  const car = await CarService.getById(String(params?.id))

  return {
    props: { car },
    revalidate: 60
  }
}

export default CarDetailPage
