const dav = require("dav");

async function testCalDavConnection() {
  try {
    const xhr = new dav.transport.Basic(
      new dav.Credentials({
        username: "annaboiko1@icloud.com",
        password: "iryy-hzsi-ocya-fpgo",
      })
    );

    const account = await dav.createAccount({
      server: "https://caldav.icloud.com/",
      xhr: xhr,
    });

    const calendars = account.calendars;

    console.log("Fetched calendars:", calendars);
  } catch (error) {
    console.error("Error connecting to CalDAV:", error);
  }
}

testCalDavConnection();

// testCalDav.js
const { Client } = require("dav");

async function fetchCalendars() {
  const client = new Client({
    // Ваші налаштування для CalDAV
  });

  try {
    const calendars = await client.getCalendars(); // Функція для отримання календарів
    return calendars;
  } catch (error) {
    throw new Error("Failed to fetch calendars: " + error.message);
  }
}

module.exports = fetchCalendars;
