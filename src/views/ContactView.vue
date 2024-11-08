<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <ContactForm />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ContactsView",
  components: {
    ContactForm,
  },
};
</script>
