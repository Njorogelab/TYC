// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allAuthors } from './Author/_index.mjs'
import { allSuccessStories } from './SuccessStory/_index.mjs'
import { allYouthPerspectives } from './YouthPerspective/_index.mjs'
import { allExpertOpinions } from './ExpertOpinion/_index.mjs'

export { allAuthors, allSuccessStories, allYouthPerspectives, allExpertOpinions }

export const allDocuments = [...allAuthors, ...allSuccessStories, ...allYouthPerspectives, ...allExpertOpinions]

