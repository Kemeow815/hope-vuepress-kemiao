import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "biji",
      prefix: "posts/",
      // collapsible: true,
      children: [
        {
          text: "Git教程",
          icon: "git",
          prefix: "Git教程/",
          link: "Git教程/",
          // children: ["swift/", "source/", "other/", "tool/", "system/", "ui/"],
        },
        {
          text: "建站记录",
          icon: "jianzhan",
          prefix: "建站记录/",
          link: "建站记录/",
          // children: ["Flutter/", "ReactNative/"],
        },
        {
          text: "Markdown语法",
          icon: "markdown",
          prefix: "Markdown语法/",
          link: "Markdown语法/",
          // children: ["Browser/", "JavaScript/", "CSS/", "node/", "Vue/"],
        },
        // {
        //   text: "Linux",
        //   icon: "linux",
        //   prefix: "Linux/",
        //   link: "Linux/",
        // },
        // {
        //   text: "Python",
        //   icon: "python",
        //   prefix: "Python/",
        //   link: "Python/",
        // },
        // {
        //   text: "Rust",
        //   icon: "hk-rust",
        //   prefix: "Rust/",
        //   link: "Rust/",
        // },
      ],
    },
    // {
    //   text: "软件/工具教程",
    //   icon: "software",
    //   prefix: "tutorial/",
    //   link: "tutorial/",
    // },
    // {
    //   text: "博客相关",
    //   icon: "blog",
    //   prefix: "blog/",
    //   link: "blog/",
    // },
    {
      text: "站点收藏",
      icon: "shoucang",
      prefix: "site",
      link: "site/",
      children: "structure",
    },
    // {
    //   text: "随笔",
    //   icon: "flower",
    //   prefix: "private/",
    //   children: "structure",
    // },
    {
      text: "关于",
      icon: "user",
      prefix: "about/",
      link: "about",
    },
  ],
  // "/posts/Git教程/": "structure",
  // "/posts/Python/": "structure",
  // "/posts/cross-platform/Flutter/": "structure",
  // "/posts/cross-platform/ReactNative/": "structure",
  // "/posts/iOS/": "structure",
  // "/posts/Web/": "structure",
  // "/site/": "structure",
  // "/blog": "structure",
  // "/tutorial": "structure",
});
