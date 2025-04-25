import { ReviewSortOption, Review } from "@src/types";
import { useMemo } from "react";

export const useSortedReviews = (
	reviews: Review[],
	sort: ReviewSortOption
): Review[] => {
	return useMemo(() => {
		switch (sort) {
			case 'latest':
				return reviews.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
			case 'oldest':
				return reviews.sort((a, b) => new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime())
			case 'highest':
				return reviews.sort((a, b) => b.rating - a.rating)
			case 'lowest':
				return reviews.sort((a, b) => a.rating - b.rating)
			default:
				return reviews
		}
	}, [reviews, sort])
}