<template>
  <div class="projects">
    <h1>This is a projects page</h1>
    <HireMe />
    <div class fake>
      <p>Lorem ipsum .</p>
    </div>
  </div>
</template>
<script>
import HireMe from "@/components/HireMe.vue";

export default {
  name: "ProjectsView",
  components: {
    HireMe,
  },
};
</script>
