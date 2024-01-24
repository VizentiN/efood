class Food {
  description: string
  image: string
  rating?: number
  title: string
  infos?: string[]
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    rating: number,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.rating = rating
    this.title = title
  }
}

export default Food
