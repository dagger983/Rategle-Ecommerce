const TotalProductsList = [
    {
        "id": 1,
        "name": "HP Victus Gaming Laptop",
        "price": "₹ 104,999",
        "category": "Electronics",
        "imageUrl": "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_6_1.png",
        "description": "Experience immersive gaming with the HP Victus Gaming Laptop, Featuring a powerful Intel Core i7 processor, NVIDIA GeForce RTX graphics, 16GB DDR4 RAM and 512GB SSD storage, it delivers smooth performance and stunning graphics."
    },
    {
        "id": 2,
        "name": "Microsoft Laptop 4",
        "price": "₹ 74,990",
        "category": "Electronics",
        "imageUrl": "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
        "description": "Enhance your productivity with the Microsoft Laptop 4, With its high-resolution PixelSense touchscreen display, Intel Core i5 processor, 8GB RAM and 256GB SSD storage, it offers a seamless computing experience for work and entertainment."
    },
    {
        "id": 3,
        "name": "Nike Running Shoes",
        "price": "₹ 599",
        "category": "Fashion",
        "imageUrl": "https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg",
        "description": "Hit the track with confidence in Nike Running Shoes, Designed for comfort and performance, These lightweight shoes feature breathable mesh uppers, responsive cushioning and durable rubber outsoles for superior traction."
    },
    {
        "id": 4,
        "name": "Iphone 15",
        "price": "₹ 79,000",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718545/iphone14_ecums0.png",
        "description": "Discover the future of smartphones with the iPhone 15, Boasting an advanced triple-camera system, A15 Bionic chip, Super Retina XDR display, and 5G connectivity, it redefines what a smartphone can do."
    },
    {
        "id": 5,
        "name": "Samsung S22 Ultra",
        "price": "₹ 81,199",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718551/samsungs22ultra_wlwiwk.jpg",
        "description": "Unleash your creativity with the Samsung S22 Ultra, Featuring a pro-grade camera system with 108MP sensor, dynamic AMOLED display with S Pen support, Exynos 2200 processor, and all-day battery life, it's the ultimate smartphone for power users."
    },
    {
        "id": 6,
        "name": "OnePlus 9 5G",
        "price": "₹ 46,990",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718548/oneplus9_ifpa33.jpg",
        "description": "Experience flagship performance with the OnePlus 9 5G, Featuring a 120Hz Fluid AMOLED display, Snapdragon 888 processor, Hasselblad triple-camera system, and Warp Charge 65T, it delivers smooth performance and stunning photos."
    },
    {
        "id": 7,
        "name": "Vivo X80 5G",
        "price": "₹ 79,999",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718550/vivox80_u4e2e1.jpg",
        "description": "Elevate your mobile experience with the Vivo X80 5G, Featuring a sleek design, 120Hz AMOLED display, Snapdragon 8 Gen 1 processor, versatile camera system, and long-lasting battery, it's designed to keep up with your busy lifestyle."
    },
    {
        "id": 8,
        "name": "Redmi 13 Note Pro 5G",
        "price": "₹ 34,999",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718549/redmi13notepro5g_zt7dtq.jpg",
        "description": "Get more done with the Redmi 13 Note Pro 5G, Featuring a 6.7-inch FHD+ display, Snapdragon 750G processor, quad-camera setup with 108MP main sensor, and a large 5000mAh battery, it's the perfect companion for work and play."
    },
    {
        "id": 9,
        "name": "Infinix Zero Ultra",
        "price": "₹ 36,999",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718550/inifinixzeroultra_k6vwj1.jpg",
        "description": "Experience flagship features without breaking the bank with the Infinix Zero Ultra, Featuring a 6.8-inch FHD+ display, MediaTek Helio G95 processor, quad-camera setup with 64MP main sensor, and a massive 6000mAh battery, it offers exceptional value for money."
    },
    {
        "id": 10,
        "name": "Motorola Edge 40 Neo 5G",
        "price": "₹ 20,999",
        "category": "Electronics",
        "imageUrl": "https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718549/motorolaedge40neo_pfalra.jpg",
        "description": "Stay connected and productive with the Motorola Edge 40 Neo 5G, Featuring 8GB RAM 128GB ROM, a 16.51 cm (6.5 inch) HD+ display, a 50MP + 2MP rear camera, a 16MP front camera, a 5000mAh battery, Snapdragon 695 5G processor, and a stylish vegan leather design."
    },
    {
        "id": 11,
        "name": "Levi's Men's 511 Slim Fit Jeans",
        "price": "₹ 2,999",
        "category": "Fashion",
        "imageUrl": "https://levi.in/cdn/shop/files/182981393_02_Front_cf51fd0b-7e14-4999-b87a-84b91cceb5cc.jpg?v=1712742742&width=1445",
        "description": "Upgrade your wardrobe with Levi's Men's 511 Slim Fit Jeans, These jeans feature a modern slim fit through the thigh, And leg for a stylish look that's perfect for any occasion."
    },
    {
        "id": 12,
        "name": "Organic Quinoa Grain",
        "price": "₹ 399",
        "category": "Grocery",
        "imageUrl": "https://images-cdn.ubuy.co.in/6453bd0e720f9a126e60d8b5-wellsley-farms-organic-quinoa-3lb-100.jpg",
        "description": "Enjoy the nutritional benefits of organic quinoa grain, Packed with protein | fiber and essential nutrients, it's a versatile ingredient for salads | soups and more."
    },
    {
        "id": 13,
        "name": "Dyson V11 Absolute Pro Cord-Free Vacuum",
        "price": "₹ 52,990",
        "category": "HomeAppliances",
        "imageUrl": "https://m.media-amazon.com/images/I/418vSp+SqzL.jpg",
        "description": "Make cleaning easier with the Dyson V11 Absolute Pro Cord-Free Vacuum, With powerful suction and a range of attachments, It can tackle dirt and debris on any surface."
    }
];

export default TotalProductsList;
