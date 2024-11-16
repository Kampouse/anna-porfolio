const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const connectToCalDAV = require("./caldav"); // Функція підключення до CalDAV
const app = express();
const slotsRoutes = require("./routes/slots"); // Підключаємо новий файл
// Middleware
app.use(express.json()); // Для роботи з JSON у запитах
// Роутинг
app.use("/api", slotsRoutes); // Додаємо префікс /api до всіх роутів
app.use(cors());
app.use(bodyParser.json());

const dav = require("dav"); // Бібліотека для CalDAV

async function connectToCalDAV() {
  try {
    const xhr = new dav.transport.Basic(
      new dav.Credentials({
        username: "annaboiko1@icloud.com",
        password: "iryy-hzsi-ocya-fpgo",
      })
    );
    const account = await dav.createAccount({
      server: "https://caldav.icloud.com/",
      xhr,
    });
    return account.calendars; // Повертаємо календарі
  } catch (error) {
    throw new Error("Failed to connect to CalDAV: " + error.message);
  }
}

module.exports = connectToCalDAV;

// API для отримання подій
app.get("/api/calendar", async (req, res) => {
  try {
    const calendars = await connectToCalDAV();
    if (!calendars || calendars.length === 0) {
      return res.status(404).json({ error: "No calendars found" });
    }

    const events = await dav.syncCalendar(calendars[0]); // Синхронізуємо події першого календаря
    res.json(events.objects); // Повертаємо події
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    res.status(500).json({ error: "Failed to fetch calendar events" });
  }
});

// Запуск сервера
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
