import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const activities = [
  {
    title: "Cocktails naturels savoureux",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Séances photos pour immortaliser vos moments précieux",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Buffet généreux et raffiné",
    image: "https://us.123rf.com/450wm/deepbluero/deepbluero1811/deepbluero181100291/111293027-table-avec-assiettes-alimentaires-de-roumanie-et-de-moldavie.jpg?ver=6&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Spectacle envoûtant avec l’orchestre Nova Soleil",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Atelier de complicité pour renforcer vos liens",
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Bal romantique Et bien d’autres surprises à découvrir sur place !",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Instant Vœux",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export default function Activities() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Au programme
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="activities-swiper"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}