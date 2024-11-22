<template>
  <ContactForm />
  <CalendarReservation />
  <HireMe />
  <CalendarView />
</template>






<script>
import ContactForm from "@/components/ContactForm.vue";
import HireMe from "@/components/HireMe.vue";
// eslint-disable-next-line no-unused-vars
import CalendarReservation from "../components/CalendarReservation.vue";
export default {
  name: "ContactsView",
  components: {
    ContactForm,
    HireMe,
    CalendarReservation,
  },
};
</script>
