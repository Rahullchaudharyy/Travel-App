// src/components/UpcomingEvents.js

import React from 'react';

const events = [
  { name: 'City Festival', date: 'October 15, 2024', description: 'Enjoy local music, food, and crafts at the annual city festival.', image: 'https://images.unsplash.com/photo-1525869811964-53594bfcb4b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Food Expo', date: 'November 5, 2024', description: 'Taste a variety of cuisines from local chefs and restaurants.', image: 'https://images.unsplash.com/photo-1679060689538-602a9fd156fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZvb2QlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D' },
  // Add more events here
];

const UpcomingEvents = () => (
  <section className="py-8">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg mb-6">Don’t miss these exciting events happening soon!</p>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-64">
            <img src={event.image} alt={event.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
