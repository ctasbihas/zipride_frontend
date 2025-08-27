import { Button } from "@/components/ui/button";

interface RideHistoryPaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (newPage: number) => void;
}

const RideHistoryPagination = ({
	page,
	totalPages,
	onPageChange,
}: RideHistoryPaginationProps) => {
	if (totalPages <= 1) return null;
	return (
		<div className="flex justify-center items-center gap-2 mt-4">
			<Button
				variant="outline"
				size="sm"
				disabled={page === 1}
				onClick={() => onPageChange(page - 1)}
			>
				Prev
			</Button>
			<span>
				Page {page} of {totalPages}
			</span>
			<Button
				variant="outline"
				size="sm"
				disabled={page === totalPages}
				onClick={() => onPageChange(page + 1)}
			>
				Next
			</Button>
		</div>
	);
};

export default RideHistoryPagination;
