import React from 'react';
import OrangeTop from '../../../assets/orange_top.webp';

// Testimonial data array
const testimonials = [
  {
    name: 'Holden Caulfield',
    role: 'Senior Product Designer',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk."
  },
  {
    name: 'Alper Kamu',
    role: 'UI Developer',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk."
  },
  {
    name: 'Henry Letham',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    quote: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk."
  }
];

const TestimonialsComp = () => {
  return (
    <>
      <div className='bg-[#f76d3c] flex justify-center flex-col'>
        <div>
          <img className='shade hidden md:block md:-translate-y-28 rotate-180' src={OrangeTop} alt="Orange Top Background" />
        </div>

        <div className='flex flex-col space-y-10 justify-center items-center'>
          <h1 className='font-hand text-4xl text-white'>Testimonials</h1>
          
          <section className="text-white body-font">
            <div className="container w-4/5 px-5 pb-24 mx-auto">
              <div className="grid lg:grid-cols-3 grid-col-1 gap-10 -m-4">
                {/* Map over testimonial data */}
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="lg:mb-0 mb-6 p-4" data-aos="fade-up">
                    <div className="h-full text-center">
                      <img alt={`Portrait of ${testimonial.name}`} className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image} />
                      <p className="leading-relaxed">{testimonial.quote}</p>
                      <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                      <h2 className="text-white font-medium title-font tracking-wider text-2xl font-hand">{testimonial.name}</h2>
                      <p className="text-white">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default TestimonialsComp;
