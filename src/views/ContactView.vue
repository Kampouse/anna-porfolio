<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <ContactForm />
    <HireMe />
    <CalendarView />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from "@/components/ContactForm.vue";
import HireMe from "@/components/HireMe.vue";
import CalendarView from "../components/CalendarView.vue";
export default {
  name: "ContactsView",
  components: {
    ContactForm,
    HireMe,
    CalendarView,
  },
};
</script>
