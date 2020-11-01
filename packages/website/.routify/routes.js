
/**
 * @sveltech/routify 1.9.9
 * File generated Sun Nov 01 2020 10:29:22 GMT+0700 (Western Indonesia Time)
 */

export const __version = "1.9.9"
export const __timestamp = "2020-11-01T03:29:22.292Z"

//buildRoutes
import { buildClientTree } from "@sveltech/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "_layout.svelte",
      "filepath": "/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/_layout.svelte",
      "importPath": "../src/pages/_layout.svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "about",
      "filepath": "/about",
      "name": "about",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/about",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/about/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/about/index.svelte",
          "importPath": "../src/pages/about/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/about/index",
          "id": "_about_index",
          "component": () => import('../src/pages/about/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/about"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "admin",
      "filepath": "/admin",
      "name": "admin",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/admin",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/admin/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/admin/_layout.svelte",
          "importPath": "../src/pages/admin/_layout.svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/admin",
          "id": "_admin__layout",
          "component": () => import('../src/pages/admin/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/admin/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/admin/index.svelte",
          "importPath": "../src/pages/admin/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/admin/index",
          "id": "_admin_index",
          "component": () => import('../src/pages/admin/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/admin"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "blog.svx",
          "filepath": "/blog/blog.svx",
          "name": "blog",
          "ext": "svx",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/blog/blog.svx",
          "importPath": "../src/pages/blog/blog.svx",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/blog",
          "id": "_blog_blog",
          "component": () => import('../src/pages/blog/blog.svx').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "blog1.svx",
          "filepath": "/blog/blog1.svx",
          "name": "blog1",
          "ext": "svx",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/blog/blog1.svx",
          "importPath": "../src/pages/blog/blog1.svx",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/blog1",
          "id": "_blog_blog1",
          "component": () => import('../src/pages/blog/blog1.svx').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "test.md",
          "filepath": "/blog/test.md",
          "name": "test",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/blog/test.md",
          "importPath": "../src/pages/blog/test.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/test",
          "id": "_blog_test",
          "component": () => import('../src/pages/blog/test.md').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/blog"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "login",
      "filepath": "/login",
      "name": "login",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/login",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/login/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/login/_layout.svelte",
          "importPath": "../src/pages/login/_layout.svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/login",
          "id": "_login__layout",
          "component": () => import('../src/pages/login/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/login/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Volumes/workspace/repo/git/dsr/npm-libs/@deboxsoft/svelte-libs/packages/website/src/pages/login/index.svelte",
          "importPath": "../src/pages/login/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/login/index",
          "id": "_login_index",
          "component": () => import('../src/pages/login/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/login"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

