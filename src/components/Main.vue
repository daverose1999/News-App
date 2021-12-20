<template>
  <div class="main">
    <section>
      <h2 class="header">Top Headlines</h2>
      <div class="main-headlines">
        <Card
          v-for="(news, id) in mainHeadlines.favourite"
          :key="id"
          :news="news"
          :variants="{ width: 250 }"
        />
      </div>
    </section>
    <section>
      <h2 class="header">Recommended Stories</h2>
      <div class="other-headlines">
        <Card
          v-for="(news, id) in mainHeadlines.general.slice(0, 4)"
          :key="id"
          :news="news"
          :variants="{ hideDesc: true, width: 200 }"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "News",
  created() {
    this.fetchMainHeadlines();
  },
  props: { category: String },
  computed: {
    ...mapGetters(["mainHeadlines"]),
  },
  methods: {
    ...mapActions(["fetchMainHeadlines"]),
  },
};
</script>

<style scoped>
section {
  padding: 40px 100px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
}
.header {
  text-align: left;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 30px;
}
.main-headlines {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.other-headlines {
  display: flex;
  gap: 15px;
}
</style>
