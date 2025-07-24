import type { IHeaderNav } from "~/features/layout"

export const useSitemap = () => {
  const { t } = useI18n()

  const list = computed<IHeaderNav[]>(() => [
    {
      label: t("sitemap.about.label"),
      to: "/about",
      dropdown: [
        { label: t("sitemap.about.about_us"), to: "/about" },
        { label: t("sitemap.about.how_to_help"), to: "/about#how_to_help" },
        { label: t("sitemap.about.faq"), to: "/about#faq" },
        { label: t("sitemap.about.contact_us"), to: "/about#contact_us" },
      ]
    },{
      label: t("nav.reason.label"),
      to: "/reason/economy",
      dropdown: [
        { label: t("nav.reason.economy"), to: "/reason/economy" },
        { label: t("nav.reason.talent"), to: "/reason/talent" },
        { label: t("nav.reason.resource"), to: "/reason/resource" },
        { label: t("nav.reason.innovation"), to: "/reason/innovation" },
        { label: t("nav.reason.culture"), to: "/reason/culture" },
        { label: t("nav.reason.living"), to: "/reason/living" },
        { label: t("nav.reason.strategy"), to: "/reason/strategy" },
        { label: t("nav.reason.environment"), to: "/reason/environment" }
      ]
    },
    {
      label: t("sitemap.investment_guide.label"),
      to: "/guide/explore",
      dropdown: [
        { label: t("sitemap.investment_guide.agriculture"), to: "/guide/explore/agriculture" },
        { label: t("sitemap.investment_guide.automotive"), to: "/guide/explore/automotive" },
        { label: t("sitemap.investment_guide.chemicals"), to: "/guide/explore/chemicals" },
        { label: t("sitemap.investment_guide.construction"), to: "/guide/explore/construction" },
        { label: t("sitemap.investment_guide.education"), to: "/guide/explore/education" },
        { label: t("sitemap.investment_guide.energy"), to: "/guide/explore/energy" },
        { label: t("sitemap.investment_guide.finance"), to: "/guide/explore/finance" },
        { label: t("sitemap.investment_guide.metals"), to: "/guide/explore/metals" },
        { label: t("sitemap.investment_guide.pharma"), to: "/guide/explore/pharma" },
        { label: t("sitemap.investment_guide.textiles"), to: "/guide/explore/textiles" },
        { label: t("sitemap.investment_guide.technology"), to: "/guide/explore/technology" }
      ]
    },
    {
      label: t("sitemap.media.label"),
      to: "/media/news",
      dropdown: [
        { label: t("sitemap.media.news"), to: "/media/news" },
        { label: t("sitemap.media.publications"), to: "/media/publications" },
        { label: t("sitemap.media.pr_materials"), to: "/media/pr_materials" },
        { label: t("sitemap.media.blogs"), to: "/media/blogs" },
      ]
    },
    {
      label: t("nav.about.label"),
      to: "/about",
      dropdown: [{ label: t("nav.about.about_us"), to: "/about" }]
    },
    { label: t("nav.about.event"), to: "/event" }
  ])

  return { list }
}
