<script setup lang="ts">
import { PostHero, PostSection } from "#layers/landing/modules/posts"

definePageMeta({ fixedHeader: true })

interface IPost {
  fields: {
    author: string
    category: string
    subtitle: string
    publishDate: number
    image: string
    label: string
  }
  blocks: any[]
}

// const data: IPost = {}

const data = {
  id: 50,
  path: "/en/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation",
  url: "https://dev-portal.miit.uz/en/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation",
  collection: "posts",
  blocks: [
    {
      block: {
        name: "Content",
        fields: {
          heading:
            '<p style="text-align: justify">On December 24, events promoting Uzbek-Egyptian trade and investment cooperation took place&nbsp;in Tashkent.</p><p style="text-align: justify">The day\'s agenda began with a bilateral meeting between the delegation leaders: Laziz Kudratov, Uzbekistan’s Minister of Investments, Industry, and Trade, and Rania Al-Mashat, Egypt’s Minister of Planning, Economic Development, and International Cooperation.</p><p style="text-align: justify">The meeting reviewed the partnership\'s current state and future prospects, identifying key goals in trade, investment, and industrial cooperation.</p><p style="text-align: justify">Trade turnover between Uzbekistan and Egypt doubled last year and continues to grow this year, with significant increases in exports of yarn, petroleum products, chemicals, pharmaceuticals, electrical equipment, agricultural products, and services.</p><p style="text-align: justify">Fifteen Egyptian-owned enterprises are currently active in Uzbekistan, working on food production, geological exploration, and modernizing water supply and sewage systems.</p><p style="text-align: justify">The discussions prepared for the 7th session of the Intergovernmental Commission on Trade, Economic, and Scientific-Technical Cooperation between Uzbekistan and Egypt.</p><p style="text-align: justify">Leaders from ministries, agencies, and industry associations presented reports on executing bilateral agreements. Each project stage was analyzed, solutions for faster implementation were developed, deadlines set, and responsibilities assigned.</p><p style="text-align: justify">The day\'s program included a business forum with over 150 executives from leading companies in both countries, featuring notable Egyptian participants such as El Sewedy Electric, Hassan Allam Holding, ACDIMA, EPICO, Nile sugar, Badawy Group, Masriya machine, Ebtkarat Smart Systems, Solyphar, Al Farouk For Import &amp; Export and others.</p><p style="text-align: justify">Minister Laziz Kudratov emphasized the need to strengthen business ties, deepen trade relations, and leverage regional market and logistics opportunities.</p><p style="text-align: justify">The forum highlighted Uzbekistan\'s economic potential and investment initiatives with promising net present value indicators across sectors such as digital technology, education, pharmaceuticals, food processing, agriculture, and tourism.</p><p style="text-align: justify">Participants learned about Uzbekistan\'s supportive environment for entrepreneurs, including strong rights protections and significant investment potential.</p><p style="text-align: justify">The program included B2B and B2G meetings, enabling entrepreneurs to build connections, discuss projects, and negotiate trade agreements.</p><p style="text-align: justify">The events concluded with the signing of the Protocol from the 7th session of the Uzbek-Egyptian Intergovernmental Joint Commission and several bilateral agreements. These included cooperation on environmental protection, regional partnerships between Samarkand and Alexandria, collaboration between Egypt\'s Supreme Council of Antiquities and Uzbekistan\'s Center of Islamic Civilization, and an education agreement between Ain Shams University and Tashkent State University of Oriental Studies, Memorandum of understanding between the Agency for the Development of Pharmaceutical Industry and the Company ACDIMA.</p>',
          content: "<p>      </p>"
        },
        slots: {}
      }
    },
    {
      block: {
        name: "MultipleImages",
        fields: {
          images: [
            {
              image: {
                src: "/uploads/4520df4b-15cb-804e-257a-58ed69ebdf63_lists_slider_31313.webp",
                alt: "",
                width: 1280,
                height: 853,
                type: "image/webp",
                sources: []
              },
              size: {
                width: {
                  value: 100,
                  unit: "%"
                }
              },
              aspectRatio: "auto"
            },
            {
              image: {
                src: "/uploads/bad55ea1-95d2-717f-8d14-82748f7a5df5_lists_slider_31313.webp",
                alt: "",
                width: 1280,
                height: 853,
                type: "image/webp",
                sources: []
              },
              size: {
                width: {
                  value: 100,
                  unit: "%"
                }
              },
              aspectRatio: "auto"
            },
            {
              image: {
                src: "/uploads/f6e769da-40d4-ec0f-f910-e14e005aafb2_lists_slider_31313.webp",
                alt: "",
                width: 1280,
                height: 853,
                type: "image/webp",
                sources: []
              },
              size: {
                width: {
                  value: 100,
                  unit: "%"
                }
              },
              aspectRatio: "auto"
            },
            {
              image: {
                src: "/uploads/884884b1-9e9b-90e4-b26c-f6997a034624_lists_slider_31313.webp",
                alt: "",
                width: 1280,
                height: 853,
                type: "image/webp",
                sources: []
              },
              size: {
                width: {
                  value: 100,
                  unit: "%"
                }
              },
              aspectRatio: "auto"
            }
          ]
        },
        slots: {}
      }
    }
  ],
  language: "en",
  translations: {
    "uz-latn": "https://dev-portal.miit.uz/uz-latn/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation",
    "ru": "https://dev-portal.miit.uz/ru/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation",
    "en": "https://dev-portal.miit.uz/en/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
  },
  layout: "post",
  publishDate: 1735034400000,
  createdAt: 1735289342047,
  updatedAt: 1735289342047,
  title: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation | IPA",
  description: "",
  htmlAttrs: {
    lang: "en"
  },
  meta: [
    {
      property: "og:site_name",
      content: "IPA"
    },
    {
      property: "og:locale",
      content: "en"
    },
    {
      property: "og:title",
      content: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation | IPA"
    },
    {
      property: "og:url",
      content: "https://dev-portal.miit.uz/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
    },
    {
      property: "twitter:title",
      content: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation | IPA"
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "twitter:card",
      content: "summary_large_image"
    }
  ],
  link: [
    {
      rel: "alternate",
      hreflang: "uz-latn",
      href: "https://dev-portal.miit.uz/uz-latn/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
    },
    {
      rel: "alternate",
      hreflang: "ru",
      href: "https://dev-portal.miit.uz/ru/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://dev-portal.miit.uz/en/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://dev-portal.miit.uz/en/posts/events-in-tashkent-to-boost-uzbek-egyptian-cooperation"
    }
  ],
  script: [],
  fields: {
    label: '<h1 style="text-align: center">Events in Tashkent to Boost Uzbek-Egyptian Cooperation</h1>',
    subtitle: '<h2 style="text-align: justify">Events in Tashkent to Boost Uzbek-Egyptian Cooperation</h2>',
    category: "news",
    author: {
      firstName: "Қурбонов",
      lastName: "Рахматилло"
    },
    publishDate: 1735034400000,
    image: {
      src: "https://dev-portal.miit.uz/uploads/7b101357-dfad-2c33-1329-e18051c14ba9_lists_slider_.webp",
      alt: "",
      width: 1280,
      height: 960,
      type: "image/webp",
      sources: []
    }
  }
}
</script>

<template>
  <div>
    <post-hero :background="data.fields.image.src" :title="data.fields.label" />
    <post-section
      :author="data.fields.author"
      :category="data.fields.category"
      :subtitle="data.fields.subtitle"
      :publish-date="data.fields.publishDate"
      :blocks="data.fields.blocks"
    />
  </div>
</template>

<style scoped></style>
