import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="p-3 transition ease-in delay-500 card hover:bg-teal-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste unde
          rerum reprehenderit assumenda facere minima maxime facilis! Quasi,
          beatae moit amet consectetur adipisicing elit. Beatae, voluptates
          tenetur. Natus, ad tempora odio aliquam, sint voluptas, alias quam
          quis laborum libero corrupti voluptatibus nam velit quibusdam magni
          iste!
        </div>
        <div className="p-3 card">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste unde
          rerum reprehenderit assumenda facere minima maxime facilis! Quasi,
          beatae molestiae! Ipsam a amet eveniet sed, tenetur dolor officiis
          vero corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Beatae, voluptates tenetur. Natus, ad tempora odio aliquam, sint
          voluptas, alias quam quis laborum libero corrupti voluptatibus nam
          velit quibusdam magni iste!sed, tenetur dolor officiis vero corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          voluptates tenetur. Natus, ad tempora odio aliquam, sint vo
        </div>
        <div className="card">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste unde
          rerum rveniet sed, tenetur dolor officiis vero corporis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae, voluptates
          tenetur. Natus, ad tempora odio aliquam, sint voluptas, alias quam
          quis laborum libero corrupti voluptatibus nam velit quibusdam magni
          iste!
        </div>
      </div>
    </Layout>
  )
}

export default Home
