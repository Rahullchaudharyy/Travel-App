import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FoodRecomm = [
  {
    id: 1,
    name: 'The Gourmet Bistro',
    description: 'A cozy place with a delightful menu of gourmet dishes.',
    imageUrl: 'https://images.unsplash.com/photo-1609846246604-e9e123decdb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R291cm1ldCUyMEJpc3Ryb3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Sushi Haven',
    description: 'Fresh sushi and Japanese delicacies in a relaxed atmosphere.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1674169166760-89ac9c5842c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGklMjBoZWF2ZW58ZW58MHx8MHx8fDA%3D',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Pasta Paradise',
    description: 'Italian classics with a modern twist. Perfect for pasta lovers.',
    imageUrl: 'https://images.unsplash.com/photo-1470114755716-3e1124c6c3bd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8
  }
];

const Placeecomm = [
  {
    id: 1,
    name: 'Taj Mahal',
    description: 'One of the Seven Wonders of the World, a symbol of love and beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1662032230861-3d621e75b652?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9
  },
  {
    id: 2,
    name: 'India Gate',
    description: 'A war memorial located in the heart of New Delhi.',
    imageUrl: 'https://images.unsplash.com/photo-1705861146215-893c716481e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Red Fort',
    description: 'A historic fort in Delhi that served as the main residence of Mughal emperors.',
    imageUrl: 'https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6
  }
];

const Recomm = () => {
  return (
    <>
      {/* Food Recommendations */}
      <div className="bg-gray-100 p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Top Food Places</h1>
          <p className="text-lg text-gray-600">Discover the best places to eat and enjoy a great meal.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FoodRecomm.map((place) => (
            <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{place.name}</h2>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 text-gray-700">{place.rating} / 5</span>
                </div>
                <Link to={`/details/${place.id}`} className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Places to Visit Recommendations */}
      <div className="bg-gray-100 p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Top Places To Visit</h1>
          <p className="text-lg text-gray-600">Discover iconic landmarks and attractions.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Placeecomm.map((place) => (
            <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{place.name}</h2>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 text-gray-700">{place.rating} / 5</span>
                </div>
                <Link to={`/details/${place.id}`} className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recomm;
