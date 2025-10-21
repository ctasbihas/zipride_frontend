import ContactForm from "@/components/modules/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - ZipRide",
	description:
		"Get in touch with ZipRide, our team is here to assist you with any inquiries or support you may need.",
};

const Contact = () => {
	return (
		<main className="py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<ContactForm />
			</div>
		</main>
	);
};

export default Contact;
