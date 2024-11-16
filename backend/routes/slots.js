const express = require("express");
const router = express.Router();

// Тимчасовий масив слотів (заміни на базу даних у майбутньому)
let slots = [
  {
    id: "1",
    start: "2024-11-16T09:00:00",
    end: "2024-11-16T10:00:00",
    available: true,
  },
  {
    id: "2",
    start: "2024-11-16T10:00:00",
    end: "2024-11-16T11:00:00",
    available: false,
  },
];

// Отримати список всіх слотів
router.get("/available-slots", (req, res) => {
  res.json(slots);
});

// Резервація слоту
router.post("/reserve-slot/:id", (req, res) => {
  const slotId = req.params.id;
  const slot = slots.find((s) => s.id === slotId);

  if (slot && slot.available) {
    slot.available = false; // Оновлюємо статус слоту
    res.status(200).json({ message: "Slot reserved successfully." });
  } else {
    res.status(400).json({ message: "Slot not available." });
  }
});

module.exports = router;
