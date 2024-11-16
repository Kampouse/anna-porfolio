<template>
  <div>
    <h1>Make appoitment</h1>
    <ul>
      <li v-for="slot in availableSlots" :key="slot.id">
        {{ formatSlot(slot.start, slot.end) }}
        <button @click="reserveSlot(slot.id)">Reserve</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slots: [], // Усі слоти, отримані з API
    };
  },
  computed: {
    availableSlots() {
      return this.slots.filter((slot) => slot.available); // Фільтруємо доступні слоти
    },
  },
  methods: {
    formatSlot(start, end) {
      const startTime = new Date(start).toLocaleTimeString();
      const endTime = new Date(end).toLocaleTimeString();
      return `${startTime} - ${endTime}`;
    },
    async reserveSlot(slotId) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/reserve-slot/${slotId}`,
          {
            method: "POST",
          }
        );
        if (response.ok) {
          alert("Slot reserved successfully!");
          // Оновлення списку слотів після резервації
          this.slots = await fetch(
            "http://localhost:8080/api/available-slots"
          ).then((res) => res.json());
        } else {
          alert(
            "Failed to reserve the slot. Please contact me vie imail: annaboiko1@icloud.com"
          );
        }
      } catch (error) {
        console.error("Error reserving slot:", error);
      }
    },
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3000/api/available-slots");
      this.slots = await response.json();
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  },
};
</script>
