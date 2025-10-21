"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// TODO: Provide valid information about this project.
const FAQS = [
	{
		question: "How do I book a ride with ZipRide?",
		answer: "Open the app, enter your pickup and drop-off locations, choose your ride type, and confirm your booking. A nearby driver will be assigned instantly.",
	},
	{
		question: "Is my payment information secure?",
		answer: "Yes, all payments are processed securely using industry-standard encryption. We never store your card details on our servers.",
	},
	{
		question: "How can I become a ZipRide driver?",
		answer: "Go to the 'Drive with ZipRide' section, fill out the application, and upload the required documents. Our team will review and contact you.",
	},
	{
		question: "What should I do if I leave something in a ZipRide?",
		answer: "Contact support through the app or website with your trip details. We'll help you connect with your driver to retrieve your item.",
	},
	{
		question: "Can I schedule rides in advance?",
		answer: "Yes, you can schedule a ride for a future date and time directly from the app.",
	},
	{
		question: "How do I contact customer support?",
		answer: "You can reach us 24/7 via the in-app chat, email, or our support hotline listed on the Contact page.",
	},
	{
		question: "Are there any promo codes or discounts?",
		answer: "We regularly offer promo codes and discounts. Check the app notifications or our social media for the latest offers.",
	},
	{
		question: "Can I share my ride with others?",
		answer: "Yes, ZipRide offers ride-sharing options so you can split fares with friends or other passengers heading in the same direction.",
	},
	{
		question: "What payment methods are accepted?",
		answer: "We accept major credit/debit cards, digital wallets, and select local payment methods depending on your region.",
	},
	{
		question: "How do I rate my driver?",
		answer: "After your trip ends, you'll be prompted in the app to rate your driver and provide feedback.",
	},
	{
		question: "Can I change my destination during a ride?",
		answer: "Yes, you can update your destination in the app while your ride is in progress. Fare adjustments may apply.",
	},
	{
		question: "What safety measures does ZipRide have?",
		answer: "All drivers undergo background checks, vehicles are regularly inspected, and you can share your trip status with trusted contacts.",
	},
	{
		question: "How do I cancel a ride?",
		answer: "You can cancel a ride in the app before the driver arrives. Cancellation fees may apply depending on the timing.",
	},
	{
		question: "Is ZipRide available in my city?",
		answer: "ZipRide is expanding rapidly. Check our website or app for the latest list of supported cities.",
	},
	{
		question: "How do I update my profile information?",
		answer: "Go to the Profile section in the app to update your name, contact details, and payment information.",
	},
];

const FAQ = () => {
	const [search, setSearch] = useState("");
	const filtered = FAQS.filter(
		(faq) =>
			faq.question.toLowerCase().includes(search.toLowerCase()) ||
			faq.answer.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<main className="py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
				<Card>
					<CardContent className="p-8">
						<h1 className="text-2xl sm:text-3xl font-bold mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-muted-foreground mb-6">
							Find answers to common questions about ZipRide. Use
							the search box to quickly locate information.
						</p>
						<Input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search FAQs..."
							className="mb-8"
						/>
						<Accordion
							type="single"
							collapsible
							className="w-full"
						>
							{filtered.length === 0 && (
								<div className="text-center text-muted-foreground py-8">
									No results found.
								</div>
							)}
							{filtered.map((faq) => (
								<AccordionItem
									value={faq.question}
									key={faq.question}
								>
									<AccordionTrigger className="text-left text-base font-medium">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</CardContent>
				</Card>
			</div>
		</main>
	);
};

export default FAQ;
