declare global {
  interface IModal {
    "appeal"?: number
    "appeal-reply"?: number
  }

  interface IAppeal {
    id: number
    topic: IAppealTopic
    region: ITerritory
    type: IAppealType
    status: "in_moderation" | "resolved" | "not_resolved" | "reviewed"
    reject_reason: string
    type_id: number
    topic_id: number
    region_id: number
    createdAt: number
    text: string
    related_number: number
  }

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
    admin: string
    created: string
    response: string
    owner: boolean
  }
}

export class AppealReply {
  appeal_id!: number
  response: string = ""
}

export class Appeal {
  id!: number
  type_id!: number
  topic_id!: number
  region_id!: number
  text: string = ""
  full_name?: string
  email?: string

  constructor(appeal?: IAppeal) {
    if (appeal) {
      this.id = appeal.id
      this.type_id = appeal.type_id
      this.topic_id = appeal.topic_id
      this.region_id = appeal.region_id
      this.text = appeal.text
    }
  }
}
