<template>
  <div class="card" :style="{ maxWidth: `${variants.width}px` }">
    <div class="image"><img :src="news.urlToImage" alt="" /></div>
    <div class="text">
      <div class="top">
        <p>{{ news.source.name }}</p>
        <p>{{ date }}</p>
      </div>
      <h4 class="title">{{ title }}</h4>
      <p class="desc" v-if="!variants.hideDesc">{{ description }}</p>
    </div>
    <div class="btm">
      <p class="author" v-show="author">By: {{ author }}</p>
      <a class="ext-link" :href="news.url" target="_blank"
        >Read more
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
            /></svg
        ></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Object,
    variants: Object,
  },
  computed: {
    date() {
      return new Date(this.news.publishedAt).toDateString();
    },
    description() {
      let desc = this.news.description;
      if (!desc) {
        return "Click Read more for more information.";
      }
      return this.shorten(this.news.title, 150);
    },
    title() {
      return this.shorten(this.news.title, 50);
    },
    author() {
      if (!this.news.author) {
        return "";
      }
      let authors = this.news.author.split("and");
      if (authors.length > 1) {
        return authors.slice(0, 1).join(", ") + " et al";
      }
      return authors.toString();
    },
  },
  methods: {
    shorten(str, len) {
      return str.length > len ? str.slice(0, len) + "..." : str;
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.text {
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top,
.author {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--slate-400);
}
.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.author {
  text-align: left;
  margin-top: auto;
}
.image {
  height: 150px;
}
.image img {
  display: block;
  width: 100%;
  height: 100%;
}
.title {
  color: var(--slate-900);
  font-weight: 700;
  font-size: 1rem;
}
.desc {
  color: var(--slate-600);
  font-size: 0.9rem;
  margin: 10px 0;
}
.ext-link {
  text-decoration: none;
  color: var(--primary-600);
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  margin-top: auto;
  transition: all 100ms ease-in;
}
.ext-link:hover {
  color: var(--primary-500);
  text-decoration: underline;
}
.btm {
  padding: 0 10px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
}
</style>
