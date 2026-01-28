// import the `RouteRecordInfo` type from vue-router to type your routes
import type { RouteRecordInfo } from "vue-router"
// Define an interface of routes
export interface RouteNamedMap {

  admission: RouteRecordInfo<
    "admission",
    "/admission/:season_id",
    { season_id: number },
    { season_id: number }
  >
}

// Last, you will need to augment the Vue Router types with this map of routes
declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
