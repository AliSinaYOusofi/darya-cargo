import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, otp } = req.body;

        
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            auth: {
                user: process.env.OUTLOOK_ACC, 
                pass: process.env.OUTLOOK_ACC_PASS
            }
        });

        const mailOptions = {
            from: process.env.OUTLOOK_ACC, // Sender address
            to: email, // Recipient address
            subject: "Confirm Your Email", // Subject line
            text: `Use this verification code to confirm your email: ${otp}` // Plain text body
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error while sending email:", error);
            return res.status(400).json({ error: "Error sending email. Please try again later." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
