import { isArray, get } from "lodash-es"

export const getSelectItems = (items: any[], valueKey?: string, labelKey?: string): ISelect[] | any => {
  if (isArray(items))
    return items.map((item) => ({ label: get(item, labelKey || "content"), value: get(item, valueKey || "id") }))
}
