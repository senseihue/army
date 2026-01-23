export const useOfferApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getOffer = (id: number): AsyncResponseContainer<IOffer> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getOfferList = (): AsyncResponseContainer<IOffer[]> => {
        return $http.$get(`${BASE_URL}/references/offers/last`)
    }

    return {
        getOfferList,
        getOffer,
    }
}
