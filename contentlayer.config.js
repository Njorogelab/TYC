import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'


/**  @type {import ('contentlayer/source-files').ComputedFields}*/
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Successstory = defineDocumentType(()=>({
    name: 'SuccessStory',
    filePathPattern: `success-stories/**/*.mdx`,
    contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}))

export const YouthPerspective = defineDocumentType(()=>({
  name: 'YouthPerspective',
  filePathPattern: `youth-perspectives/**/*.mdx`,
  contentType: "mdx",
fields: {
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
  date: {
    type: "date",
    required: true,
  },
  published: {
    type: "boolean",
    default: true,
  },
  image: {
    type: "string",
    required: true,
  },
  authors: {
    // Reference types are not embedded.
    // Until this is fixed, we can use a simple list.
    // type: "reference",
    // of: Author,
    type: "list",
    of: { type: "string" },
    required: true,
  },
},
computedFields,
}))

export const ExpertOpinion = defineDocumentType(()=>({
  name: 'ExpertOpinion',
  filePathPattern: `expert-opinions/**/*.mdx`,
  contentType: "mdx",
fields: {
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
  date: {
    type: "date",
    required: true,
  },
  published: {
    type: "boolean",
    default: true,
  },
  image: {
    type: "string",
    required: true,
  },
  authors: {
    // Reference types are not embedded.
    // Until this is fixed, we can use a simple list.
    // type: "reference",
    // of: Author,
    type: "list",
    of: { type: "string" },
    required: true,
  },
},
computedFields,
}))

export const CoreValue = defineDocumentType(()=>({
  name: 'CoreValue',
  filePathPattern: `core-values/**/*.mdx`,
  contentType: "mdx",
fields: {
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
  image: {
    type: "string",
    required: true,
  },
},
computedFields,
}))

export const Author = defineDocumentType(() => ({
    name: "Author",
    filePathPattern: `authors/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      avatar: {
        type: "string",
        required: true,
      },
    },
    computedFields,
  }))

  export default makeSource({
    contentDirPath: "./content",
    documentTypes: [ Author, Successstory, YouthPerspective, ExpertOpinion, CoreValue ],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted")
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"]
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
  })