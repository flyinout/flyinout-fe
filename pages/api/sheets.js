import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';


async function handler(req, res) {
    if (req.method === 'POST') {

        console.log(req.body);
        const { email, linkedIn } = req.body;

        try {

            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.CLIENT_EMAIL,
                    client_id: process.env.CLIENT_ID,
                    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
                },
                scopes: [
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets',
                ],
            });

            const sheets = google.sheets({
                auth,
                version: 'v4',
            });

            const emailsData = await sheets.spreadsheets.values.get({
                spreadsheetId: process.env.SHEET_ID,
                range: "test!A:A", // sheet name
            });
            console.log('response is', emailsData.data.values)
            let emails = emailsData.data.values;
            emailsData.data.values.forEach(row => {
                emails.push(row[0])
            })
            if (emails.includes(email.trim())) {
                console.log('already exists')
            } else {
                console.log('doesnt exists')
                const response = await sheets.spreadsheets.values.append({
                    spreadsheetId: process.env.SHEET_ID,
                    range: "test", // sheet name
                    insertDataOption: "INSERT_ROWS", // TODO: Update placeholder value.
                    valueInputOption: "RAW", // TODO: Update placeholder value.
                    resource: {
                        // TODO: Add desired properties to the request body.
                        majorDimension: "ROWS",
                        values: [[email, linkedIn]],
                    },
                    //   auth: auth,
                });

                console.log("response after ", response)


                // dummy code to get file. use another method to get file from frontend such as multer or busboy

                const filePath = path.join(process.cwd(), 'public');
                const file = await fs.readdir(filePath);
                console.log("file is", file)
                await fileUpload(file[0])
            }


            res.status(201).json({ message: 'It works!' });
        } catch (err) {
            console.log('error', err)
            res.status(500).json(err)
        }
    } else {
        res.status(200).json({ message: 'Hey!' });
    }
}

async function fileUpload(file) {

    // let fileName = path.basename(file)
    console.log('uploading file', file.getName())

}

export default handler;
