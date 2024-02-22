import { RestaurantApiProps } from '../Types'

export function getTagsFromData(restaurant: RestaurantApiProps) {
  const tags = []
  if (restaurant.destacado) tags.push('Destaque da Semana')
  tags.push(restaurant.tipo)
  return tags
}

export function getCurrency(old_price = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(old_price)
}

export const getDescription = (description: string) => {
  if (description.length > 173) {
    return description.slice(0, 170) + '...'
  }

  if (description.length > 132) {
    return description.slice(0, 129) + '...'
  }

  return description
}
