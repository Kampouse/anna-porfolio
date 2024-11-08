<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HireMe />
  </div>
</template>
<script>
import HireMe from "@/components/HireMe.vue";

export default {
  name: "AboutView",
  components: {
    HireMe,
  },
};
</script>
