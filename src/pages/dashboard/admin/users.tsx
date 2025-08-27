import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useUsersQuery } from "@/redux/features/user/user.api";
import React, { useEffect, useState } from "react";

type UserRole = "rider" | "driver";

interface User {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	isBlocked: boolean;
}

const Users: React.FC = () => {
	const { data, isLoading } = useUsersQuery(undefined);
	const [users, setUsers] = useState<User[]>([]);
	const [search, setSearch] = useState("");
	const [roleFilter, setRoleFilter] = useState<"all" | UserRole>("all");
	const [blockedFilter, setBlockedFilter] = useState<
		"all" | "blocked" | "unblocked"
	>("all");

	useEffect(() => {
		if (!isLoading) {
			setUsers(data?.data);
		}
	}, [data, isLoading]);

	const handleBlockUnblock = (id: string) => {
		// TODO
		setUsers((prev) =>
			prev.map((user) =>
				user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
			)
		);
	};

	const filteredUsers = users.filter((user) => {
		const matchesSearch =
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase());
		const matchesRole =
			roleFilter !== "all" ? user.role === roleFilter : true;
		const matchesBlocked =
			blockedFilter === "all"
				? true
				: blockedFilter === "blocked"
				? user.isBlocked
				: !user.isBlocked;
		return matchesSearch && matchesRole && matchesBlocked;
	});

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">User Management</h1>
			<div className="mb-6 flex flex-col md:flex-row gap-4">
				<Input
					type="text"
					placeholder="Search by name or email"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full md:w-1/3"
				/>
				<Select
					value={roleFilter}
					onValueChange={(v) => setRoleFilter(v as UserRole | "all")}
				>
					<SelectTrigger className="w-full md:w-40">
						<SelectValue placeholder="All Roles" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Roles</SelectItem>
						<SelectItem value="rider">Rider</SelectItem>
						<SelectItem value="driver">Driver</SelectItem>
					</SelectContent>
				</Select>
				<Select
					value={blockedFilter}
					onValueChange={(v) =>
						setBlockedFilter(v as "all" | "blocked" | "unblocked")
					}
				>
					<SelectTrigger className="w-full md:w-40">
						<SelectValue placeholder="All Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All</SelectItem>
						<SelectItem value="blocked">Blocked</SelectItem>
						<SelectItem value="unblocked">Unblocked</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Role</TableHead>
						<TableHead>Blocked</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredUsers.length === 0 ? (
						<TableRow>
							<TableCell
								colSpan={5}
								className="text-center py-8"
							>
								No users found.
							</TableCell>
						</TableRow>
					) : (
						filteredUsers.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell className="capitalize">
									{user.role}
								</TableCell>
								<TableCell>
									{user.isBlocked ? "Yes" : "No"}
								</TableCell>
								<TableCell>
									<Button
										variant={
											user.isBlocked
												? "outline"
												: "default"
										}
										onClick={() =>
											handleBlockUnblock(user.id)
										}
										className="w-24"
									>
										{user.isBlocked ? "Unblock" : "Block"}
									</Button>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default Users;
