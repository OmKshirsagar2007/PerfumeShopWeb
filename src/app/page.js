import Image from "next/image";
import ProductCards from "../components/product";

export default function Home() {
  return (
<div>
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/main.jpg') " }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 blur-none">
        
        <p
          className="text-xs tracking-[0.4em] mb-6 opacity-80"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          FINE FRAGRANCE HOUSE
        </p>

        <h1
          className="text-4xl md:text-[5rem] font-light tracking-[0.2em] mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PATOLA
        </h1>

        <button
          className="px-10 py-4 border border-white text-white text-xs tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
           <a
  href="#products"> DISCOVER THE COLLECTION </a>
        </button>

      </div>
    </section>
   <section
  id="gender-banners"
  className="flex flex-col md:flex-row gap-8 px-6 md:px-12 lg:px-20 pt-16"
>
  {/* Femme */}
  <div className="relative overflow-hidden rounded-3xl group shadow-xl transition-all duration-700">
    <Image
      src="/body1.jpg"
      alt="Pour Femme"
      width={1000}
      height={700}
      className="w-full h-105 md:h-125 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-10">
      <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase transition-transform duration-700 group-hover:translate-y-2">
        Pour Femme
      </h2>
    </div>
  </div>

  {/* Homme */}
  <div className="relative overflow-hidden rounded-3xl group shadow-xl transition-all duration-700">
    <Image
      src="/body2.jpg"
      alt="Pour Homme"
      width={1000}
      height={700}
      className="w-full h-105 md:h-125 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-10">
      <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-[0.25em] uppercase transition-transform duration-700 group-hover:translate-y-2">
        Pour Homme
      </h2>
    </div>
  </div>
</section>


{/* About Section */}
<section
  id="about-section"
  className="grid md:grid-cols-2 gap-16 items-center mt-16 px-6 md:px-12 lg:px-20 py-10 bg-amber-50"
>
  {/* Image */}
  <div className="rounded-3xl overflow-hidden shadow-xl">
    <Image
      src="/body3.jpg"
      alt="About Patola"
      width={1000}
      height={900}
      className="w-full h-150 md:h-163 object-cover object-center"
    />
  </div>

  {/* Content */}
  <div className="space-y-8">
    <span className="inline-block text-sm uppercase tracking-[0.3em] text-amber-600 font-medium">
      Heritage & Art
    </span>

    <h2 className="text-4xl md:text-5xl font-serif leading-tight text-gray-900">
      The Soul of Grasse, The Heart of Luxury.
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
      Patola is not just perfume; it is a liquid emotion. Since 1924,
      we have sourced the rarest ingredients from around the globe,
      crafting fragrances that tell stories of passion, elegance, and
      timeless beauty.
    </p>

    <div className="pt-6 border-l-4 border-amber-600 pl-6">
      <blockquote className="text-xl italic font-serif text-gray-800">
        "Crafted with Obsession."
      </blockquote>
      <cite className="text-sm text-gray-500 mt-2 block">
        — Patola Heritage
      </cite>
    </div>
  </div>
</section>

{/* Product Cards Section */}

<div id="products" className="product min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-12">
      Featured Collection
    </h2>

    <ProductCards />
  </div>
</div>



     </div>
  );
}
