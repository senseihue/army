export default [
  "archive",
  "arrow",
  "astrology",
  "building",
  "business",
  "call",
  "car",
  "computers",
  "content",
  "cyrpto",
  "cyrpto-currentcy",
  "delivery",
  "design",
  "email",
  "essetional",
  "files",
  "grid",
  "location",
  "media",
  "money",
  "money-2",
  "notification",
  "programing",
  "school",
  "search",
  "security",
  "settings",
  "shop",
  "support",
  "time",
  "type",
  "users",
  "weather"
]

export const iconCollections: IconCollection = {
  "archive": import.meta.glob("@/shared/modules/vuesax-icons/archive/*.svg", { query: "?url", import: "default" }),
  "arrow": import.meta.glob("@/shared/modules/vuesax-icons/arrow/*.svg", { query: "?url", import: "default" }),
  "astrology": import.meta.glob("@/shared/modules/vuesax-icons/astrology/*.svg", { query: "?url", import: "default" }),
  "building": import.meta.glob("@/shared/modules/vuesax-icons/building/*.svg", { query: "?url", import: "default" }),
  "business": import.meta.glob("@/shared/modules/vuesax-icons/business/*.svg", { query: "?url", import: "default" }),
  "call": import.meta.glob("@/shared/modules/vuesax-icons/call/*.svg", { query: "?url", import: "default" }),
  "car": import.meta.glob("@/shared/modules/vuesax-icons/car/*.svg", { query: "?url", import: "default" }),
  "computers": import.meta.glob("@/shared/modules/vuesax-icons/computers/*.svg", { query: "?url", import: "default" }),
  "content": import.meta.glob("@/shared/modules/vuesax-icons/content/*.svg", { query: "?url", import: "default" }),
  "cyrpto": import.meta.glob("@/shared/modules/vuesax-icons/cyrpto/*.svg", { query: "?url", import: "default" }),
  "cyrpto-currentcy": import.meta.glob("@/shared/modules/vuesax-icons/cyrpto-currentcy/*.svg", {
    query: "?url",
    import: "default"
  }),
  "delivery": import.meta.glob("@/shared/modules/vuesax-icons/delivery/*.svg", { query: "?url", import: "default" }),
  "design": import.meta.glob("@/shared/modules/vuesax-icons/design/*.svg", { query: "?url", import: "default" }),
  "email": import.meta.glob("@/shared/modules/vuesax-icons/email/*.svg", { query: "?url", import: "default" }),
  "essetional": import.meta.glob("@/shared/modules/vuesax-icons/essetional/*.svg", {
    query: "?url",
    import: "default"
  }),
  "files": import.meta.glob("@/shared/modules/vuesax-icons/files/*.svg", { query: "?url", import: "default" }),
  "grid": import.meta.glob("@/shared/modules/vuesax-icons/grid/*.svg", { query: "?url", import: "default" }),
  "location": import.meta.glob("@/shared/modules/vuesax-icons/location/*.svg", { query: "?url", import: "default" }),
  "media": import.meta.glob("@/shared/modules/vuesax-icons/media/*.svg", { query: "?url", import: "default" }),
  "money": import.meta.glob("@/shared/modules/vuesax-icons/money/*.svg", { query: "?url", import: "default" }),
  "money-2": import.meta.glob("@/shared/modules/vuesax-icons/money-2/*.svg", { query: "?url", import: "default" }),
  "notification": import.meta.glob("@/shared/modules/vuesax-icons/notification/*.svg", {
    query: "?url",
    import: "default"
  }),
  "programing": import.meta.glob("@/shared/modules/vuesax-icons/programing/*.svg", {
    query: "?url",
    import: "default"
  }),
  "school": import.meta.glob("@/shared/modules/vuesax-icons/school/*.svg", { query: "?url", import: "default" }),
  "search": import.meta.glob("@/shared/modules/vuesax-icons/search/*.svg", { query: "?url", import: "default" }),
  "security": import.meta.glob("@/shared/modules/vuesax-icons/security/*.svg", { query: "?url", import: "default" }),
  "settings": import.meta.glob("@/shared/modules/vuesax-icons/settings/*.svg", { query: "?url", import: "default" }),
  "shop": import.meta.glob("@/shared/modules/vuesax-icons/shop/*.svg", { query: "?url", import: "default" }),
  "support": import.meta.glob("@/shared/modules/vuesax-icons/support/*.svg", { query: "?url", import: "default" }),
  "time": import.meta.glob("@/shared/modules/vuesax-icons/time/*.svg", { query: "?url", import: "default" }),
  "type": import.meta.glob("@/shared/modules/vuesax-icons/type/*.svg", { query: "?url", import: "default" }),
  "users": import.meta.glob("@/shared/modules/vuesax-icons/users/*.svg", { query: "?url", import: "default" }),
  "weather": import.meta.glob("@/shared/modules/vuesax-icons/weather/*.svg", { query: "?url", import: "default" })
}

declare global {
  type IconCollection = Record<string, any>
}
