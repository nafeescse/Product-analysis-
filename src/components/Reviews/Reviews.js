import useReviews from '../../hooks/useReviews';
import Cards from '../Cards/Cards';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2>Total Reviews:  {reviews.length}</h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 m-5 p-3'>
            {
                reviews.map(review => <Cards key={review.sell} review={review}></Cards>)
            }
            
            </div>
        </div>
    );
};

export default Reviews;