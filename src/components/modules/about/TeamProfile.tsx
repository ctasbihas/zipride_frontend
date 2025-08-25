import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const TeamProfile = () => {
	// TODO: Add future developers
	const teamMembers = [
		{
			name: "Tasbih Ahmed",
			role: "Full Stack Developer & Founder",
			bio: "Passionate full-stack developer creating innovative transportation solutions for Bangladesh. Building ZipRide to connect communities and improve urban mobility.",
			skills: [
				"React",
				"TypeScript",
				"Node.js",
				"Express",
				"MongoDB",
				"UI/UX Design",
			],
			social: {
				linkedin: "https://www.linkedin.com/in/ctasbihas/",
				twitter: "https://x.com/ctasbihas",
				github: "https://github.com/ctasbihas/",
			},
		},
	];

	return (
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-muted/80 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
						Meet the Developers
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						The passionate developers behind ZipRide's mission to
						revolutionize transportation in Bangladesh.
					</p>
				</div>

				{/* Team Grid */}
				<div className="flex justify-center">
					<div className="w-full max-w-md">
						{teamMembers.map((member, index) => (
							<Card
								key={index}
								className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl rounded-xl"
							>
								{/* Decorative glow */}
								<span
									aria-hidden
									className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-b from-primary/30 to-secondary/30 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
								/>
								<CardContent className="p-6">
									{/* Header */}
									<div className="flex items-center gap-4">
										<div className="relative">
											<span
												aria-hidden
												className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-md group-hover:opacity-40 transition-opacity"
											/>
											<div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary flex items-center justify-center ring-2 ring-primary/20 text-2xl sm:text-3xl font-bold text-primary shadow-inner">
												{member.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</div>
										</div>

										<div className="min-w-0">
											<h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">
												{member.name}
											</h3>
											<p className="text-sm text-primary font-medium">
												{member.role}
											</p>
										</div>
									</div>

									{/* Bio */}
									<p className="mt-4 text-sm text-muted-foreground leading-relaxed">
										{member.bio}
									</p>

									{/* Skills */}
									<div className="mt-4 flex flex-wrap gap-2">
										{member.skills
											.slice(0, 4)
											.map((skill, skillIndex) => (
												<Badge
													key={skillIndex}
													variant="secondary"
													className="text-xs rounded-full px-2 py-1"
												>
													{skill}
												</Badge>
											))}
										{member.skills.length > 4 && (
											<Badge
												variant="outline"
												className="text-xs rounded-full px-2 py-1"
											>
												+{member.skills.length - 4}
											</Badge>
										)}
									</div>

									{/* Social Links */}
									<div className="mt-5 flex justify-center gap-3">
										<a
											href={member.social.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn"
											className="w-9 h-9 rounded-full border border-border/60 bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
										>
											<Linkedin className="w-4 h-4" />
										</a>
										<a
											href={member.social.twitter}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Twitter/X"
											className="w-9 h-9 rounded-full border border-border/60 bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
										>
											<Twitter className="w-4 h-4" />
										</a>
										<a
											href={member.social.github}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="GitHub"
											className="w-9 h-9 rounded-full border border-border/60 bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
										>
											<Github className="w-4 h-4" />
										</a>
									</div>

									{/* Accent bar */}
									<div className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/60 to-secondary/60 opacity-60 group-hover:opacity-100 transition-opacity" />
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamProfile;
