const dav = require("dav");

async function connectToCalDAV() {
  const credentials = {
    username: "annaboiko1@icloud.com",
    password: "iryy-hzsi-ocya-fpgo",
  };

  try {
    const xhr = new dav.transport.Basic(credentials);
    const account = await dav.createAccount({
      server: "https://caldav.icloud.com/",
      xhr,
    });

    console.log("Connected to iCloud CalDAV");
    return account;
  } catch (error) {
    console.error("Error connecting to CalDAV:", error);
  }
}

connectToCalDAV();

// server.js
const express = require("express");
const app = express();
const port = 8080;

// Middleware для парсингу JSON
app.use(express.json());
app.use(express.static("public"));

// Додайте свій код для підключення до CalDAV
const fetchCalendars = require("./testCalDav");

// Створіть маршрут для отримання подій
app.get("/api/events", async (req, res) => {
  try {
    const calendars = await fetchCalendars(); // Ваша функція для роботи з CalDAV
    res.json(calendars); // Відправляємо події у фронтенд
  } catch (error) {
    console.error("Error fetching calendars:", error);
    res.status(500).send("Failed to fetch events");
  }
});

app.get("/calendars", (req, res) => {
  res.send("This is the /calendars route");
});

console.log("Available routes:");
app._router.stack
  .filter((layer) => layer.route) // Фільтруємо лише ті елементи, які мають маршрут
  .map((layer) => {
    console.log(
      Object.keys(layer.route.methods).join(", ").toUpperCase() +
        " " +
        layer.route.path
    );
  });

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
