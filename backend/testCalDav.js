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
