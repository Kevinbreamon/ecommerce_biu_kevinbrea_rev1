import React, { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  [
    "https://media.istockphoto.com/id/1733124463/photo/stylish-dark-skinned-man-wearing-a-yellow-blazer.jpg?s=612x612&w=0&k=20&c=Cym3apJurmcvuBIE-Hrwg0J_7p32V3I2XncZcYuw7i4=",
    "https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=612x612&w=0&k=20&c=_CLawpZw6l9z0uV4Uon-7lqaS013E853ub883pkIK3c=",
    "https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?s=612x612&w=0&k=20&c=JULY1xsUtiur9QPMxqrzgC2VbnhuT4dSnHWcpFQnuAQ="
  ],
  [
    "https://media.istockphoto.com/id/1297633362/photo/her-beauty-makes-it-hard-not-to-stare.jpg?s=612x612&w=0&k=20&c=_9EUpPSnGGbnkD-Ejfa-wTcso_ET10QQhpgglHcyUyM=",
    "https://media.istockphoto.com/id/835277744/photo/plus-size-fashion-model-in-casual-clothes-fat-woman-on-beige-background-overweight-female-body.jpg?s=612x612&w=0&k=20&c=JGH6eA_8iNNt3-UwpRk348lsYARkc-91Ex7gQ8kp62s=",
    "https://media.istockphoto.com/id/93906762/photo/young-woman-in-dress-made-of-coloured-ribbons.jpg?s=612x612&w=0&k=20&c=1XJeBdy_awNRSgGKw2iDpWOzKNXL9Uq2tQ1qImv6E_4="
  ]
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section>
      <div className="max-w-7xl mx-4 md:mx-auto py-6 sm:px-6 lg:px-8">
        <div className="items-center flex justify-between">
          <h2 className="my-4 font-bold text-xl">Featured Products</h2>
          <div className="flex items-center gap-2">
            <div className="border hover:cursor-pointer border-gray-200 h-full p-2" onClick={handlePrev}>
              <HiArrowLeft />
            </div>
            <div className="border hover:cursor-pointer border-gray-200 h-full p-2" onClick={handleNext}>
              <HiArrowRight />
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex w-full grid md:grid-cols-3 gap-6"
            >
              {images[currentIndex].map((src, imgIndex) => (
                <div key={imgIndex} className="w-auto relative rounded-md shadow-md h-full">
                  <img className="rounded-md" src={src} alt="" />
                  <span className="absolute font-bold py-1/2 px-3 top-2 left-2 rounded-md text-sm bg-red-600 text-white">SALE</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
