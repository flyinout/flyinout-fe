import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { email } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "test", // sheet name
      insertDataOption: "INSERT_ROWS", // TODO: Update placeholder value.
      valueInputOption: "RAW", // TODO: Update placeholder value.
      resource: {
        // TODO: Add desired properties to the request body.
        majorDimension: "ROWS",
        values: [[email]],
      },
      //   auth: auth,
    });
    let data = response.data;

    res.status(201).json({ message: "It works!", data });
  } else {
    res.status(200).json({ message: "Hey!" });
  }
}

async function checkIfExist(req, res) {
  //  return all emails
}

export default handler;
