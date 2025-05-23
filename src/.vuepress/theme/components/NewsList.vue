<template>
  <div id="article-list" class="vp-article-list">
    <h3>{{ hitokotoContent }}</h3>
    <p class="sub-title" :data-item-count="String(items.length)">
      共{{ items.length }}条碎碎念~ (｡♥‿♥｡)
    </p>
    <figure>
      <img class="news-top-img" src="https://s2.loli.net/2025/04/20/EUOcNXJusaFnhp1.jpg" alt="图"
        :key="imageKey" />
    </figure>
    <template v-if="currentArticles.length">
      <template v-for="({ info, path }, index) in currentArticles">
        <DropTransition :appear="true" :delay="index * 0.04">
          <NewsItem :info="info" :path="path" :key="path" />
        </DropTransition>
      </template>
      <Pagination :current="currentPage" :perPage="articlePerPage" :total="items.length"
        @update-current-page="updatePage" />
    </template>
    <EmptyIcon v-else />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DropTransition } from "@theme-hope/components/transitions/DropTransition";
import type { Article } from '@vuepress/plugin-blog/client';
import Pagination from "@theme-hope/modules/blog/components/Pagination";
import { EmptyIcon } from "@theme-hope/modules/blog/components/icons/index";
import { useBlogOptions } from "@theme-hope/modules/blog/composables/index";
import { isSupported, usePageview } from "@vuepress/plugin-comment/pageview";
import NewsItem from "./NewsItem.vue";
import { HitokotoApi } from "../../plugins/vuepress-plugin-hitokoto/client/hitokoto-api";
import { ArticleInfoData } from "vuepress-theme-hope/shared";

const props = defineProps<{
  items: Article<ArticleInfoData>[];
}>();
const route = useRoute();
const router = useRouter();
const blogOptions = useBlogOptions();
const updatePageview = usePageview();
const currentPage = ref(1);
const articlePerPage = computed(() => blogOptions.value.articlePerPage ?? 10);
const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
const hitokotoContent = ref('');

const imageKey = ref(Math.random());

router.beforeEach((to, from, next) => {
  // 执行重新加载图片的逻辑
  imageKey.value = Math.random();
  next();
});
// 获取一言
(async function () {
  const res = await HitokotoApi.request();
  if (res.status == 200) {
    hitokotoContent.value = res.data.hitokoto;
  }
})();

const updatePage = async (page) => {
  currentPage.value = page;
  const query = { ...route.query };
  const needUpdate = !(query["page"] === page.toString() || // Page equal as query
    // Page is 1 and query is empty
    (page === 1 && !query["page"]));
  if (needUpdate) {
    if (page === 1)
      delete query["page"];
    else
      query["page"] = page.toString();
    await router.push({ path: route.path, query });
  }
  if (isSupported) {
    await nextTick();
    updatePageview({ selector: ".vp-pageview" });
  }
};
onMounted(() => {
  const { page } = route.query;
  void updatePage(page ? Number(page) : 1);
  watch(currentPage, () => {
    // List top border distance
    const distance = document.querySelector("#article-list").getBoundingClientRect().top +
      window.scrollY;
    setTimeout(() => {
      window.scrollTo(0, distance);
    }, 100);
  });
});

</script>
<style lang="scss" scoped>
h3 {
  font-family: PRshouxie;

  @media (max-width: hope-config.$pad) {
    font-size: 1.8rem;
  }

  background: linear-gradient(120deg,
    var(--theme-color-light),
    var(--theme-color) 30%,
    #50e3eb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 1.5;
  -webkit-text-fill-color: transparent;
}

.sub-title {
  font-family: ZWZT;
  font-size: 1.5rem;

  @media (max-width: hope-config.$pad) {
    font-size: 1.0rem;
  }

  font-weight: bold;
  text-align: right;
}

.sub-title::before {
  content: "共" attr(data-item-count) "条碎碎念~ (｡♥‿♥｡)";
  position: absolute;
  color: #353434;
  transform: translate(-20px, 12px) scaleY(0.5) skew(50deg);
  z-index: -1;
  filter: blur(3px);
  -webkit-mask-image: linear-gradient(transprent, #6c6868);
  mask-image: linear-gradient(transprent, #6c6868);
}

figure {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 1rem auto;
  text-align: center;
  transition: transform var(--vp-tt);
}

.news-top-img {
  overflow: hidden;
  border-radius: 8px;
}

.news-top-img:hover {
  box-shadow: 2px 2px 10px 0 var(--card-shadow);
}
</style>
