import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f2241f4b6f794894ba292106f26efb58',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId:nothings,

  // basic site info (required)
  name: '碎弦',
  domain: 'https://nothings.notion.site/f2241f4b6f794894ba292106f26efb58',
  author: '碎弦',

  // open graph metadata (optional)
  description: 'Example Next.js Notion 碎弦 Site',

  // social usernames (optional)
  twitter: 'fezar',
  zhihu: 'fezar',
  // github: 'fezar',
  // linkedin: '#',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
     navigationStyle: 'custom',
     navigationLinks: [
       {
         title: 'About',
         pageId: '1c48472f04fc4a5daa29c295b2f85cf8'
       },
})
