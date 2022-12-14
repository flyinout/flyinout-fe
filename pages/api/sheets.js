import { google } from "googleapis";
import path from "path";
import fs from "fs";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, linkedIn } = req.body;

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });

      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      const drive = google.drive({
        auth,
        version: "v3",
      });

      const emailsData = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "test!A:A", // sheet name
      });
      let emails = emailsData.data.values;
      emailsData.data.values.forEach((row) => {
        emails.push(row[0]);
      });
      if (emails.includes(email.trim())) {
        console.log("already exists");
      } else {
        console.log("doesnt exists");

        // dummy code to get file. use another method to get file from frontend such as multer or bus-boy
        const filePath = path.join(process.cwd(), "public", "dummy.pdf");
        const fileStream = await fs.createReadStream(filePath);
        console.log("file is", fileStream);
        let fileId = await fileUpload(fileStream, drive, email);
        console.log("file id callback", fileId);

        // file id is not coming here because of the await not working properly, We need to promisify This

        const response = await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.SHEET_ID,
          range: "test", // sheet name
          insertDataOption: "INSERT_ROWS", // TODO: Update placeholder value.
          valueInputOption: "RAW", // TODO: Update placeholder value.
          resource: {
            // TODO: Add desired properties to the request body.
            majorDimension: "ROWS",
            values: [[email, linkedIn, fileId]],
          },
          //   auth: auth,
        });

        console.log("response after ", response);
      }

      res.status(201).json({ message: "It works!" });
    } catch (err) {
      console.log("error", err);
      res.status(500).json(err);
    }
  } else {
    res.status(200).json({ message: "Hey!" });
  }
}

async function fileUpload(stream, drive, email) {
  const fileMetadata = {
    name: `${email}-${path.basename(stream.path)}`, // get actual file name what you want to put on drive here
    parents: ["17srP09Q1JZiL9QPPQDHvr1eIEr0d67tf"], // Id of the folder in the account where the files will be stored
  };
  const media = {
    mimeType: "application/octet-stream",
    body: stream,
  };
  drive.files.create(
    {
      resource: fileMetadata,
      media: media,
      fields: "id",
    },
    (err, file) => {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        console.log("File Id: ", file.id, file);
        return file.data.id;
      }
    }
  );
}

export default handler;
