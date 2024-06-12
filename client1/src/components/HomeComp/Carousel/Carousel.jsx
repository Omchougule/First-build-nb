import React, { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    const carousel = document.querySelector('[data-hs-carousel]');
    const prevBtn = document.querySelector('.hs-carousel-prev');
    const nextBtn = document.querySelector('.hs-carousel-next');

    if (carousel && prevBtn && nextBtn) {
      const carouselConfig = JSON.parse(carousel.dataset.hsCarousel);

      prevBtn.addEventListener('click', () => {
        carousel.scrollLeft -= carousel.offsetWidth;
      });

      nextBtn.addEventListener('click', () => {
        carousel.scrollLeft += carousel.offsetWidth;
      });

      carousel.classList.remove(carouselConfig.loadingClasses);
      carousel.querySelector('.hs-carousel-body').classList.remove('opacity-0');
    }
  }, []);

  return (
    <div className="px-4  lg:px-8 py-10 "  data-aos="fade-up"  >
      <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className="relative">
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* First Slide */}
            <div className="hs-carousel-slide" data-aos="fade-up" data-aos-delay="300">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://plus.unsplash.com/premium_photo-1695035006301-26ec78a4bf9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Nike React</span>
                  <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
                  <div className="mt-5">
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End First Slide */}
            {/* Third Slide */}
            <div className="hs-carousel-slide" data-aos="fade-up" data-aos-delay="500">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1598831745385-0c404c7034a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Nike React</span>
                  <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
                  <div className="mt-5">
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Third Slide */}

            {/* Second Slide */}
            <div className="hs-carousel-slide" data-aos="fade-up" data-aos-delay="700">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1594239505347-51a2879be69a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Nike React</span>
                  <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
                  <div className="mt-5">
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Second Slide */}

          </div>
        </div>

        {/* Previous Button */}
        <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
          <span className="text-2xl" aria-hidden="true">
            {/* Previous icon */}
            &lt;
          </span>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            {/* Next icon */}
            &gt;
          </span>
        </button>
        {/* End Next Button */}
      </div>
    </div>
  );
};

export default Slider;
