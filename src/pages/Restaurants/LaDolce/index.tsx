import Food from '../../../models/Food'
import pizza from '../../../assets/images/pizza.png'
import { Header } from '../../../components/Header'
import { BannerLaDolce } from '../../../components/Banner'
import { Dishes } from '../../../components/ProductsList'

const dishes: Food[] = [
  {
    id: 1,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'The classic Margherita: juicy tomato sauce, melted mozzarella, fresh basil and a touch of olive oil. Flavor and simplicity!',
    image: pizza,
    title: 'Pizza Marguerita'
  }
]

const LaDolce = () => (
  <>
    <Header />
    <BannerLaDolce />
    <Dishes dishes={dishes} />
  </>
)

export default LaDolce
