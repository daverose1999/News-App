<template>
  <div>
    <div class="nav">
      <div>
        <img class="logo" src="../assets/logo.png" />
      </div>
      <div :class="`links ${expand}`">
        <router-link class="link" to="/main">Home</router-link>
        <router-link class="link" to="/science">Science News</router-link>
        <router-link class="link" to="/health">Health News</router-link>
        <router-link class="link" to="/tech">Tech News</router-link>
        <router-link class="link" to="/sport">Sport News</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return { expanded: false };
  },
  computed: {
    expand() {
      return this.expanded ? "show" : "";
    },

    ...mapGetters(["country"]),
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 100px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
}
.logo {
  width: 140px;
  height: 31px;
}
.link {
  margin: 0 11px;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
}
</style>
