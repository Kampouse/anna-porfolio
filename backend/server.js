const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dav = require("dav"); // Бібліотека для CalDAV

const app = express();
const slotsRoutes = require("./routes/slots"); // Підключаємо новий файл
// Middleware
app.use(express.json()); // Для роботи з JSON у запитах
// Роутинг
app.use("/api", slotsRoutes); // Додаємо префікс /api до всіх роутів
app.use(cors());
app.use(bodyParser.json());

// Підключення до iCloud через CalDAV
const caldavOptions = {
  username: "annaboiko1@icloud.com",
  password: "iryy-hzsi-ocya-fpgo",
  server: "https://caldav.icloud.com",
};

async function testCalDavConnection() {
  try {
    const client = new dav.Client(caldavOptions);

    // Отримання календарів
    const calendars = await client.fetchCalendars();
    console.log("Calendars:", calendars); // Якщо є календарі, вони будуть виведені
  } catch (error) {
    console.error("Error connecting to CalDAV:", error);
  }
}

testCalDavConnection();

// API для отримання подій
app.get("/api/calendar", async (req, res) => {
  try {
    const client = new dav.Client(caldavOptions);
    const calendars = await client.fetchCalendars();
    const events = await client.fetchCalendarObjects(calendars[0]);
    res.json(events);
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
