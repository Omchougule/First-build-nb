import React from 'react';
import img from './image.png';

const BlogCard = ({ image, category, title, description, views, comments }) => (
  <div className="p-4">
    <div className="h-full shadow-lg border-opacity-60 rounded-lg overflow-hidden"
      data-aos="fade-up"
    >
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
        <h1 className="title-font text-3xl font-medium text-gray-900 mb-3 font-hand">{title}</h1>
        <p className="leading-relaxed mb-3">{description}</p>
        <div className="flex items-center flex-wrap">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>{views}
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>{comments}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const OurBlogs = () => {
  const blogs = [
    {
      image: 'https://dishingouthealth.com/wp-content/uploads/2021/04/BroccoliFriedRiceUpdate_Styled2.jpg',
      category: 'MEAL',
      title: 'The Catalyzer',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      views: '1.2K',
      comments: '6',
    },
    {
      image: 'https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg',
      category: 'APPETIZERS',
      title: 'The 400 Blows',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      views: '1.2K',
      comments: '6',
    },
    {
      image: 'https://carveyourcraving.com/wp-content/uploads/2019/09/Quinoa-Paneer-patties-for-burger.jpg',
      category: 'APPETIZERS',
      title: 'Shooting Stars',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      views: '1.2K',
      comments: '6',
    },
  ];

  return (
    <div className='bg-[#f4f73c] flex justify-center flex-col'>
      <div>
        <img className='hidden md:block md:-translate-y-28 rotate-180' src={img} alt="Background" />
      </div>
      <div className='flex flex-col space-y-10 justify-center items-center mb-10 md:-translate-y-24'>
        <h1 className='font-hand text-4xl'>Blog Us</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 w-4/5 pb-24 mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-1 mx-auto">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  description={blog.description}
                  views={blog.views}
                  comments={blog.comments}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurBlogs;
