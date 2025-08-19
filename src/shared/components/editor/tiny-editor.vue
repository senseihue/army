<template>
  <editor v-bind="$attrs" v-model="model" :init="init"></editor>
</template>

<script setup>
// TinyMCE-Vue
import "tinymce"
import "tinymce/skins/ui/oxide/skin.css"
import "tinymce/themes/silver"

// Icon
import "tinymce/icons/default"

// Plugins
import "tinymce/plugins/emoticons"
import "tinymce/plugins/emoticons/js/emojis.js"
import "tinymce/plugins/table"
import "tinymce/plugins/quickbars"
import "tinymce/plugins/image"
import "tinymce/plugins/imagetools"
import "tinymce/plugins/link"
import "tinymce/plugins/preview"
import "tinymce/plugins/code"
import "tinymce/plugins/textcolor"
import "tinymce/plugins/autosave"
import "tinymce/plugins/tabfocus"
import "tinymce/plugins/autoresize"
import "tinymce/plugins/lists"
import "tinymce/plugins/advlist"
import "tinymce/plugins/fullscreen"

import Editor from "@tinymce/tinymce-vue"

const props = defineProps({
  plugins: {
    type: [String, Array],
    default: "quickbars emoticons table image imagetools link preview code textcolor autosave lists fullscreen advlist"
  },
  menubar: {
    type: [String, Array],
    default: "view format"
  },
  toolbar: {
    type: [String, Array],
    default:
      "outdent indent | undo redo | fontsizeselect | forecolor | lists advlist | alignleft aligncenter alignright alignjustify | bullist numlist | table link image imagetools emoticons | bold italic underline strikethrough blockquote | fontfamily fullscreen code preview"
  },
  width: {
    type: [Number, String],
    default: "100%"
  },
  height: {
    type: [Number, String],
    default: 500
  }
})

const model = defineModel()

const init = ref({
  schema: "html5",
  height: props.height,
  width: props.width,
  formats: {
    bold: [{ inline: "strong", remove: "all", exact: true }]
  },
  menubar: props.menubar,
  content_css: false,
  skin: false,
  deprecation_warnings: false,
  toolbar_mode: "sliding",
  plugins: props.plugins,
  toolbar: props.toolbar,
  quickbars_insert_toolbar: true,
  content_style:
    "body { font-family: 'Inter', sans-serif; font-size: 14px; }" + "a { color: #0099B5; text-decoration: none; }",
  branding: false,
  object_resizing: true,
  table_sizing_mode: "relative",
  images_upload_handler: (blobInfo, success, failure) => {
    const formData = new FormData()
    formData.append("$file", blobInfo.blob(), blobInfo.filename())

    fetch("/api/image", {
      method: "POST",
      body: formData,
      headers: {
        contentType: "multipart/form-data"
      }
    })
      .then(async (e) => {
        if (!e.ok) {
          throw new Error("Network response was not ok")
        }

        const data = await e.json()

        success(data.default)
      })
      .catch((e) => {
        console.error("Image upload failed:", e)
        failure("Image upload failed")
      })
  }
})
</script>
