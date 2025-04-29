import React from 'react';

const products = [
    {
        id: 1,
        name: 'Icy Silver Jacket',
        price: '$120',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png',
    },
    {
        id: 2,
        name: 'Frost Runner Shoes',
        price: '$80',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png',
    },
    {
        id: 3,
        name: 'Glacier Sunglasses',
        price: '$60',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png',
    },
];

const ChampionBLue = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Champion Icy Blue</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.price}</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampionBLue;