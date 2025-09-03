declare global {
  interface IModal {
    appeal?: number
  }
  interface IAppeal {
    id: number
    topic: IAppealTopic
    region: ITerritory
    type: IAppealType
    status: string
    type_id: number
    topic_id: number
    region_id: number
    createdAt: number
    comment: string
    related_number: number
  }

  interface IAppealChat {}

  interface IAppealType {
    id: number
    content: string
    topic_id: number
  }

  interface IAppealTopic {
    id: number
    content: string
  }

  interface IAppealReplyParams extends IStoreListParams {
    appeal_id: number
  }

  interface IAppealReply {
    id: number
  }
}

export class AppealChat {}

export class Appeal {
  id!: number
  type_id!: number
  topic_id!: number
  region_id!: number
  comment: string = ""
  name?: string
  email?: string

  constructor(appeal?: IAppeal) {
    if (appeal) {
      this.id = appeal.id
      this.type_id = appeal.type_id
      this.topic_id = appeal.topic_id
      this.region_id = appeal.region_id
      this.comment = appeal.comment
    }
  }
}

