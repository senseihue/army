import { clone, pickBy } from "lodash-es"

export const containerData = <T>(value: T): IResponse<T> => ({ content: value})

export const cleanParams = (params: Record<string, any>) => {
  const clonedParams = clone(params)

  for (const key in clonedParams) {
    const value = clonedParams[key]
    if (typeof value === "string") {
      const trimmedValue = value.trim()
      clonedParams[key] = trimmedValue.length > 0 ? trimmedValue : null
    }
  }

  return pickBy(clonedParams, (value) => value != undefined)
}

export const transformParams = (cleanedParams: Record<string, any>, transformations: Record<string, (...args: any) => any>) => {
  const transformedParams: Record<string, any> = {}

  for (const [key, transformFn] of Object.entries(transformations)) {
    transformedParams[key] = transformFn(cleanedParams[key], transformedParams)
  }

  return cleanedParams
}

export const downloadCsv = (data: ArrayBuffer | string, name: string) => {
  const blob = new Blob([data], { type: "text/csv" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", name)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const pngDataUrl = (dataUrl: string, scale: number = 2) => {
  return new Promise<string>((resolve) => {
    const img = new Image()
    img.src = dataUrl

    img.onload = function () {
      const canvas = document.createElement("canvas")

      // Set canvas dimensions to the image size
      canvas.width = img.width * scale
      canvas.height = img.height * scale

      const context = canvas.getContext("2d")

      // Draw the SVG image onto the canvas
      context!.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Convert the canvas to PNG data URL
      const pngDataUrl = canvas.toDataURL("image/png")
      resolve(pngDataUrl)
    }
  })
}

export const disableKeys = (event: KeyboardEvent, keys: string[]) => {
  if (keys.includes(event.key)) event.preventDefault()
}
