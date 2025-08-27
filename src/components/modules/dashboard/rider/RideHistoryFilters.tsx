import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RideHistoryFiltersProps {
	search: string;
	setSearch: (v: string) => void;
	statusFilter: string;
	setStatusFilter: (v: string) => void;
	dateFilter: string;
	setDateFilter: (v: string) => void;
	fareMin: string;
	setFareMin: (v: string) => void;
	fareMax: string;
	setFareMax: (v: string) => void;
	onFilterChange: () => void;
}

const RideHistoryFilters = ({
	search,
	setSearch,
	statusFilter,
	setStatusFilter,
	dateFilter,
	setDateFilter,
	fareMin,
	setFareMin,
	fareMax,
	setFareMax,
	onFilterChange,
}: RideHistoryFiltersProps) => {
	return (
		<>
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<Input
					placeholder="Search by location..."
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						onFilterChange();
					}}
					className="md:w-1/2"
				/>
				<div className="flex gap-2 items-center">
					<Button
						variant={statusFilter === "" ? "default" : "outline"}
						onClick={() => {
							setStatusFilter("");
							onFilterChange();
						}}
					>
						All
					</Button>
					<Button
						variant={
							statusFilter === "Completed" ? "default" : "outline"
						}
						onClick={() => {
							setStatusFilter("Completed");
							onFilterChange();
						}}
					>
						Completed
					</Button>
					<Button
						variant={
							statusFilter === "Cancelled" ? "default" : "outline"
						}
						onClick={() => {
							setStatusFilter("Cancelled");
							onFilterChange();
						}}
					>
						Cancelled
					</Button>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<Input
					type="date"
					value={dateFilter}
					onChange={(e) => {
						setDateFilter(e.target.value);
						onFilterChange();
					}}
					className="md:w-1/4"
					placeholder="Filter by date"
				/>
				<Input
					type="number"
					min={0}
					value={fareMin}
					onChange={(e) => {
						setFareMin(e.target.value);
						onFilterChange();
					}}
					className="md:w-1/4"
					placeholder="Min Fare"
				/>
				<Input
					type="number"
					min={0}
					value={fareMax}
					onChange={(e) => {
						setFareMax(e.target.value);
						onFilterChange();
					}}
					className="md:w-1/4"
					placeholder="Max Fare"
				/>
			</div>
		</>
	);
};

export default RideHistoryFilters;
