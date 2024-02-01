import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'

import rest1 from '../../assets/images/rest1.png'
import rest2 from '../../assets/images/rest2.png'

const home: Food[] = [
  {
    id: 1,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    image: rest1,
    title: 'Hioki Sushi',
    infos: ['Highlight of the week', 'Japanese'],
    rating: 4.9
  },
  {
    id: 2,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    image: rest2,
    infos: ['Italian'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6
  },
  {
    id: 1,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    image: rest1,
    infos: ['Japanese'],
    title: 'Hioki Sushi',
    rating: 4.9
  },
  {
    id: 2,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    image: rest2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italian'],
    rating: 4.6
  },
  {
    id: 1,
    description:
      'Order the best of Japanese cuisine now in the comfort of your home! Fresh sushi, delicious sashimi and irresistible hot dishes. Fast delivery, careful packaging and guaranteed quality. Experience Japan without leaving home with our delivery!',
    image: rest1,
    title: 'Hioki Sushi',
    infos: ['Japanese'],
    rating: 4.9
  },
  {
    id: 2,
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas and incredible risottos, all in the comfort of your own home. Fast delivery, well-packaged dishes and unforgettable flavor. Order now!',
    image: rest2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italian'],
    rating: 4.6
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList dishes={home} />
  </>
)

export default Home
