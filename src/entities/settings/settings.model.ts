declare global {

    interface ISpeciality {
      id: number
      image: string
      title: string
      description: string
      meta: {
        title: string
        description: string
      }
    }
}

export {}