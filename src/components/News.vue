<template>
  <div :key="category">
    <h2 class="header">{{ category }}</h2>
    <div class="main">
      <Card
        v-for="(news, id) in headlines(category)"
        :key="id"
        :news="news"
        :variants="{ width: 250 }"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "News",
  created() {
    this.fetchHeadlines(this.category);
  },
  props: { category: String },
  computed: {
    ...mapGetters(["headlines"]),
  },
  methods: {
    ...mapActions(["fetchHeadlines"]),
  },
  watch: {
    category: function () {
      this.fetchHeadlines(this.category);
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 20px;
  justify-content: center;
}
.header {
  text-align: left;
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 40px;
  padding: 0px 100px;
  text-transform: capitalize;
}
</style>
