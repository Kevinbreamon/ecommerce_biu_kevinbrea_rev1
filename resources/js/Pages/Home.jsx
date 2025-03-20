import { FaStar,FaSmile, FaTag, FaThumbsUp } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ProductCarousel from "../components/ProductCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, usePage } from '@inertiajs/react';
import Chatbot from "../Components/Chatbox";


const Home = () => {
    console.log(usePage());
    const { user } = usePage().props;  // Obtener el 'user' del prop de Inertia
  return (
        <>
        <Navbar />
        <Chatbot />
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-6 sm:px-6 lg:px-8">
                <div className="relative">
                    <img src="https://cdn.prod.website-files.com/5e73b00410e4b42fae046074/5ead999ab8d39c3c096e6843_Menswear-ecommerce-packshot-photography.jpg" alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                        Changing Styles, Changing Lives
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-6 sm:px-6 lg:px-8 text-center">
                <h2 className="my-4 font-bold text-xl">
                    We provide best <br/> customer experiences
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="my-4">
                      <div className="w-full">
                            <FaStar class="mx-auto"/>
                      </div>
                        <div className="mt-2">
                            <h3 className="font-semibold">
                                Original Prodcuts
                            </h3>
                            <span className="text-sm text-gray-500">
                                We provide money back guarantee if the product are not original
                            </span>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="w-full">
                          <FaSmile class="mx-auto"/>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold">
                                Satisfaction Guarantee
                            </h3>
                            <span className="text-sm text-gray-500">
                                Exchange the product you've purchased if it doesn't fit you
                            </span>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="w-full">
                            <FaTag className="mx-auto" />
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold">
                                New Arrival Monthly
                            </h3>
                            <span className="text-sm text-gray-500">
                                We update our collections every month having the newest products in market
                            </span>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="w-full">
                            <FaThumbsUp className="mx-auto" />
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold">
                                Best Quality
                            </h3>
                            <span className="text-sm text-gray-500">
                                We provide the best quality for customer satisfaction
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 content-center md:grid-cols-4 gap-6">
                    <div className="w-full h-auto relative rounded-md zoom">
                        <img className="rounded-md" src="https://cdn.yoursclothing.com/Images/ProductImages/Big/d75a4179-5262-4b_162551_D.jpg" alt="" />
                        <div className="absolute rounded-md shadow-md inset-0 bg-gray-900/20 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                        </div>
                        <div className=" hover:bg-zinc-800 hover:text-white transition duration-300 absolute hover:cursor-pointer flex items-center justify-between bottom-10 w-5/6 bg-white py-1 px-2 rounded-md left-1/2 -translate-x-1/2">
                            <span>
                                Best Seller
                            </span>
                            <Link href="/products">
                                <HiArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-auto relative rounded-md zoom">
                        <img className="rounded-md" src="https://lp.monki.com/app002prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[768]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=key[resolve.quality],value[80]&set=source[/4e/14/4e14e60b897c72d3e04ee5e25bb88f3b89f41db6.jpg],origin[dam],type[LOOKBOOK],ImageVersion[2]&call=url[file:/product/dynamic.chain]" alt="" />
                        <div className="absolute rounded-md shadow-md inset-0 bg-gray-900/20 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                        </div>
                        <div className="hover:bg-zinc-800 hover:text-white transition duration-300 absolute hover:cursor-pointer flex items-center justify-between bottom-10 w-5/6 bg-white py-1 px-2 rounded-md left-1/2 -translate-x-1/2">
                            <span>
                                Brand New
                            </span>
                            <Link href="/products">
                                <HiArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-auto relative rounded-md zoom">
                        <img className="rounded-md" src="https://shoprevelry.com/cdn/shop/files/desert-rose-jacket_desert-rose_lifestyle_main-featured.png?v=1733428005" alt="" />
                        <div className="absolute rounded-md shadow-md inset-0 bg-gray-900/20 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                        </div>
                        <div className="hover:bg-zinc-800 hover:text-white transition duration-300 absolute hover:cursor-pointer flex items-center justify-between bottom-10 w-5/6 bg-white py-1 px-2 rounded-md left-1/2 -translate-x-1/2">
                            <span>
                                Shop Men
                            </span>
                            <Link href="/products">
                                <HiArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-auto relative rounded-md zoom">
                        <img className="rounded-md" src="https://onceaday.se/cdn/shop/products/onceaday-suit-jacket-the-minimalist-blue-italian-reda-fabric_1200x.jpg?v=1733811641" alt="" />
                        <div className="absolute rounded-md shadow-md inset-0 bg-gray-900/20 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                        </div>
                        <div className="hover:bg-zinc-800 hover:text-white transition duration-300 absolute hover:cursor-pointer flex items-center justify-between bottom-10 w-5/6 bg-white py-1 px-2 rounded-md left-1/2 -translate-x-1/2">
                            <span>
                                Shop Casual
                            </span>
                            <Link href="/products">
                                <HiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ProductCarousel />
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-center text-2xl font-bold">
                            Subscribe to our newsletter to get updates
                            <br/>
                            to our latest collections
                        </h3>
                        <span className="text-sm text-gray-400 text-center">
                            Get 25% off on your first order just by subscribing to our newsletter
                        </span>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                            <input className="w-full bg-gray-100/50 border border-gray-300 rounded-md shadow-md p-2 text-gray-400" placeholder="Enter your email..." />
                            <button className="bg-gray-900 text-white rounded-md p-2 zoom" type="submit">Subscribe</button>
                        </div>
                        <span className="text-xs text-center text-gray-400">You will be able to unsuscribe at any time.</span>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
  );
};

export default Home;




