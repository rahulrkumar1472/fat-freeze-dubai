type ReviewItem = {
  name: string;
  rating: number;
  review: string;
};

type ReviewsStripProps = {
  reviews: ReviewItem[];
};

export function ReviewsStrip({ reviews }: ReviewsStripProps) {
  return (
    <div className="reviews-strip" role="list" aria-label="Client testimonials">
      {reviews.map((review) => (
        <article key={review.name} className="review-card" role="listitem">
          <div className="review-stars" aria-label={`${review.rating} stars`}>
            {"★".repeat(review.rating)}
          </div>
          <p>{review.review}</p>
          <h3>{review.name}</h3>
        </article>
      ))}
    </div>
  );
}
