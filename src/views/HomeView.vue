<template>
  <div class="home">
    <HireMe />
  </div>
</template>

<script>
// @ is an alias to /src
import HireMe from "@/components/HireMe.vue";

export default {
  name: "HomeView",
  components: {
    HireMe,
  },
};
</script>
