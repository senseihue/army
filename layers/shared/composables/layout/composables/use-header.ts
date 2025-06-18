import type { IHeaderNav } from "~/layers/features/layout"

export const useHeader = () => {
  const navMenu = useState<IHeaderNav | undefined>("navMenu")
  const isMenuOpen = useState<boolean>("isMenuOpen", () => false)

  const showNavMenu = (nav: IHeaderNav) => (navMenu.value = nav)
  const hideNavMenu = () => (navMenu.value = undefined)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value

    if (isMenuOpen.value) document.body.classList.add("overflow-hidden")
    else document.body.classList.remove("overflow-hidden")
  }

  return { navMenu, isMenuOpen, showNavMenu, hideNavMenu, toggleMenu }
}
