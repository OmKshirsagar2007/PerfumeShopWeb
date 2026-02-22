import Image from "next/image";
import clientPromise from "@/lib/mongodb";
export default async  function ProductCards() {

  let client = await clientPromise
  let db = client.db("mydatabase")

  let products = await db.collection("products").find({}).toArray()

  products = products.map(item => ({
    id: item._id.toString(),
    image: item.image,
    name: item.name,
    description: item.description,
    price: item.price,
    originalPrice: item.originalPrice,
    badge: item.badge
  }))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
        >
          
          {/* Image */}
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Badge */}
            <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-[10px] rounded-full">
              {product.badge}
            </div>

            {/* Wishlist */}
            <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition text-sm">
              ❤️
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold mb-1">
              {product.name}
            </h3>

            <p className="text-gray-500 text-xs mb-3">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>

                <span className="text-xs text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              </div>

              <button className="bg-black text-white px-3 py-1.5 text-xs rounded-md hover:bg-gray-800 transition">
                🛒 Add
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}