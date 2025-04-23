import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "zhishipai", link: "/demo/" },
  {
    text: "笔记分类",
    icon: "biji1",
    children: [
      {
        text: "代码笔记",
        prefix:"/posts/",
        children: [
          { text: "Git教程", icon: "git", link: "Git教程/" },
          { text: "建站记录", icon: "jianzhan", link: "建站记录/" },
          { text: "Markdown语法", icon: "markdown", link: "Markdown语法/" },
          // { text: "前端笔记", icon: "code", link: "Web/" },
          // { text: "Linux", icon: "linux", link: "Linux/" },
          // { text: "Python", icon: "python", link: "Python/" },
          // { text: "Rust", icon: "hk-rust", link: "Rust/" },
          // { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
          // {
          //   text: "Flutter",
          //   icon: "hk-flutter",
          //   link: "cross-platform/Flutter/",
          // },
        ],
      },
      // {
      //   text: "博客相关",
      //   prefix:"/blog/",
      //   children: [
      //     { text: "博客相关", icon: "blog", link: "" },
      //   ],
      // },
    ],
  },
  // {
  //   text: "软件教程",
  //   icon: "software",
  //   link: "/tutorial/",
  // },
  {
    text: "收藏",
    icon: "shoucang",
    link: "/collect",
  },
  {
    text: "说说",
    icon: "shuoshuo",
    link: "/news/",
  },
  {
    text: "留言板",
    icon: "liuyanban",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "lianjie",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "guanyu",
    children:[
      { text: "关于我", icon: "user", link: "/about" },
      // { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
]);
