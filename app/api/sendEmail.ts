import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Only POST requests allowed" });
	}

	const { name, email, message } = req.body;

	// Create a transporter for nodemailer
	let transporter = nodemailer.createTransport({
		// Use a service like Gmail, or use SMTP settings
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER, // Your email
			pass: process.env.EMAIL_PASS, // Your email password
		},
	});

	// Setup email data
	const mailOptions = {
		from: email, // Sender address
		to: process.env.EMAIL_USER, // List of receivers (your email)
		subject: `New Message from ${name}`, // Subject line
		text: message, // Plain text body
	};

	// Send mail with defined transport object
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error sending email", error: error.message });
	}
}
