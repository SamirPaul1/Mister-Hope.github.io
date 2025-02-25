import { defineUserConfig } from "@vuepress/cli";
import { appendDatePlugin } from "vuepress-plugin-append-date";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "dist",

  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.Hope",
      description: "Where there is light, there is hope.",
    },

    "/en/": {
      title: "My name is Mr.Hope",
      description: "Mr.Hope personal blog",
    },
  },

  markdown: {
    code: {
      lineNumbers: 10,
    },
  },

  theme,

  plugins: [appendDatePlugin()],

  shouldPrefetch: false,
});
