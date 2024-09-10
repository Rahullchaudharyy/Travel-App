import UpcomingEvents from '../components/UppcomingEvents'

const Home = () => {
  return (
    <>
       <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8)' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative container mx-auto text-center text-white flex items-center justify-center h-full">
      <div>
        <h1 className="text-5xl font-bold mb-4">Discover the Best of Our City</h1>
        <p className="text-lg mb-6">Explore top attractions, dining, and more.</p>
        <input type="text" placeholder="Search for attractions or dining" className="p-3 rounded w-full text-black max-w-md mb-4" />
        <button className="bg-yellow-500 text-black p-3 rounded hover:bg-yellow-600">Explore Now</button>
      </div>
    </div>
  </section>

   <UpcomingEvents/>
    </>
  )
}

export default Home