<template>
  <div class="bottomnav">
    <div class="box">
      <img src="../assets/logo.png" />
      <p>© 2021 Enyata Ghana Academy</p>
      <p>Blog • Twitter • Facebook</p>
    </div>
    <div class="box">
      <p><b>GET IN TOUCH</b></p>
      <p>Partnerships & general enquires partnaship@enyata.come</p>
      <p>Greater Accra, Accra, Ghana.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
};
</script>

<style scoped>
.bottomnav {
  width: 50%;
  margin: 90px 100px 280px 100px;
  justify-content: space-between;
  display: flex;
}
.box {
  width: 235px;
}
img {
  width: 140px;
  height: 31px;
  margin-bottom: 10px;
}

p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  margin: 10px 0px;
  color: #ffffff;
}
</style>
