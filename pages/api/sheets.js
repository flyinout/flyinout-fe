import { google } from 'googleapis';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, message } = req.body;
        console.log(name, message);

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

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: 'test', // sheet name
        });
        console.log('response is', response.data)
        let data = response.data

        res.status(201).json({ message: 'It works!', data });
    } else {
        res.status(200).json({ message: 'Hey!' });
    }
}

export default handler;
