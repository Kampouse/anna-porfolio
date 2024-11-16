<template>
  <div>
    <h1>Make appoitment</h1>
    <ul>
      <li v-for="slot in availableSlots" :key="slot.id">
        {{ formatSlot(slot.start, slot.end) }}
        <button @click="reserveSlot(slot.id)">Reserve</button>
      </li>
    </ul>
    <p v-if="!availableSlots.length">No available slots at the moment.</p>
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
      const startTime = new Date(start).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const endTime = new Date(end).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
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
          await this.fetchSlots();
        } else {
          alert(
            "Failed to reserve the slot. Please contact me vie imail: annaboiko1@icloud.com"
          );
        }
      } catch (error) {
        console.error("Error reserving slot:", error);
      }
    },
    async fetchSlots() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/available-slots"
        );
        if (response.ok) {
          this.slots = await response.json();
        } else {
          console.error("Failed to fetch slots.");
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    },
  },
  // Завантажуємо слоти при створенні компонента
  async created() {
    await this.fetchSlots();
  },
};
</script>
