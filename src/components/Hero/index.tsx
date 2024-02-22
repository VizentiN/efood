// import { Restaurant } from '../../pages/Home'
import { TitleLight, Title, Banner } from './styles'
import { RestaurantApiProps } from '../../utilities/Types'

// type Props = {
//   dish: Restaurant
// }

function titleize(text: string) {
  const loweredText = text.toLowerCase()
  const words = loweredText.split(' ')
  for (let a = 0; a < words.length; a++) {
    let w = words[a]

    const firstLetter = w[0]
    w = firstLetter.toUpperCase() + w.slice(1)

    words[a] = w
  }
  return words.join(' ')
}

// const Hero = ({ dish }: Props) => (
//   <Banner style={{ backgroundImage: `url(${dish.capa})` }}>
//     <div className="container">
//       <div>
//         <TitleLight>{titleize(dish.tipo as string)}</TitleLight>
//         <Title>{dish.titulo}</Title>
//       </div>
//     </div>
//   </Banner>
// )

const Hero = (props: RestaurantApiProps) => (
  <Banner style={{ backgroundImage: `url(${props.capa})` }}>
    <div className="container">
      <div>
        <TitleLight>{titleize(props.tipo)}</TitleLight>
        <Title>{props.titulo}</Title>
      </div>
    </div>
  </Banner>
)

export default Hero
