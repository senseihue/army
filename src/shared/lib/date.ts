import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import duration from "dayjs/plugin/duration"
import type { ConfigType } from "dayjs"

dayjs.extend(utc)
dayjs.extend(duration)

export const formatDate = (value: ConfigType, format = "DD.MM.YYYY") => dayjs.utc(value).format(format)
export const formatDuration = (value: number, format = "DD:HH:mm:ss") => dayjs.duration(value).format(format)
