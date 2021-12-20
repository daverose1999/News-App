<template>
  <div class="home">
    <Navbar />
    <div class="main"><router-view /></div>
    <BottomNav />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BottomNav from "../components/BottomNav.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: { Navbar, BottomNav },
};
</script>
<style scoped>
.home {
  padding-inline: var(--side-padding);
}
</style>
