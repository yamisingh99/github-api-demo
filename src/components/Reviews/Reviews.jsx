import React, { useState } from 'react';

const GitHubReviewsSection = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Mukesh',
      date: 'March 15, 2024',
      rating: 5,
      comment: 'Dr. Manish is an exceptional doctor. He was very attentive and knowledgeable. I highly recommend him! Thankyou for saving my life sir ',
    },
    {
      id: 2,
      name: 'Sandhya Rathi',
      date: 'April 2, 2024',
      rating: 4,
      comment: 'I had a great experience with Dr. Manish. He listened to my concerns and provided excellent care and support.',
    },
    {
      id: 3,
      name: 'Yashi Chauhan',
      date: 'April 9, 2024',
      rating: 5,
      comment: 'Dr Manish is very caring and i highly recommend everyone to trust him. Thank you sir ',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = reviews.length + 1;
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const review = { ...newReview, id, date };
    setReviews([...reviews, review]);
    setNewReview({
      name: '',
      rating: 0,
      comment: '',
    });
  };

  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>&#9733;</span>);
    }
    return <div>{stars}</div>;
  };

  return (
    <section className="bg-transparent py-12" style={{ background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xixd6vnc_dmxBnRk_o_k-jV7z_IEVn5f4unEFG-4Vg&s)` }}>
      <div className="container mx-auto backdrop-blur-lg bg-opacity-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Patient Feedback</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="relative bg-white rounded-lg shadow-md p-6 backdrop-blur-lg bg-opacity-50">
              <button onClick={() => handleDelete(review.id)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">X</button>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4 text-2xl text-white" style={{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Write Your Own Review</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Your Name</label>
              <input type="text" id="name" name="name" value={newReview.name} onChange={handleInputChange} required className="w-full border rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-800 font-semibold mb-1">Rating</label>
              <input type="number" id="rating" name="rating" value={newReview.rating} onChange={handleInputChange} min="1" max="5" required className="w-full border rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-800 font-semibold mb-1">Your Comment</label>
              <textarea id="comment" name="comment" value={newReview.comment} onChange={handleInputChange} required rows="4" className="w-full border rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Review</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GitHubReviewsSection;
