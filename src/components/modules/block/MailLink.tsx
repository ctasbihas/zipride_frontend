import { Mail as Icon } from "lucide-react";
import React from "react";

const MailLink = ({ email }: { email: string }) => {
	const mailtoHref = React.useMemo(() => {
		const subject = encodeURIComponent("Unblock request");

		const body = encodeURIComponent(
			[
				"Hello ZipRide Support Team,",
				"",
				"I hope you're well. I'd like to apologize for any actions that may have led to my account being blocked.",
				"I value the ZipRide community and will make sure to follow the guidelines moving forward.",
				"If possible, please let me know how I can resolve this and have my access restored.",
				"",
				`Email: ${email}`,
				"",
				"Thank you for your understanding and help.",
			].join("\n")
		);
		return `mailto:ctasbihas+zipride@gmail.com?subject=${subject}&body=${body}`;
	}, [email]);
	return (
		<a
			href={mailtoHref}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Contact support"
		>
			<Icon className="h-4 w-4" />
			Contact support
		</a>
	);
};

export default MailLink;
