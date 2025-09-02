declare global {
  interface IAppeal {
    id: number
    topic: IAppealTopic
    region: ITerritory
    type: IAppealType
    type_id: number
    topic_id: number
    region_id: number
    text: string
    comment: string
    related_number: number
  }

  interface IAppealType {
    id: number
    content: string
    topic_id: number
  }

  interface IAppealTopic {
    id: number
    name: string
  }
}

export class Appeal {
  id!: number
  type_id!: number
  topic_id!: number
  region_id!: number
  text: string = ""
  comment: string = ""
  related_number!: number

  constructor(appeal?: IAppeal) {
    if (appeal) {
      this.id = appeal.id
      this.type_id = appeal.type_id
      this.topic_id = appeal.topic_id
      this.region_id = appeal.region_id
      this.text = appeal.text
      this.comment = appeal.comment
      this.related_number = appeal.related_number
    }
  }
}
