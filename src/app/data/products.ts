// src/app/data/products.ts
interface BaseProduct {
    id: number;
    name: string;
    description?: string;
    image?: string;
    hoverImage?: string; // Image shown on hover
    images: string[]; // Gallery images for product detail page
    inStock?: boolean;
    stock?: number;
    category?: string;
    rating?: number;
    reviews?: number;
    features?: string[];
    slug?: string;
    brand?: string;
    warranty?: string;
    colors?: string[];
    specifications?: {
        [key: string]: string
    };
    tags?: string[];
    whatsInTheBox?: string[];
}

export type Product = BaseProduct & (
    | { isSale?: false; price: number }
    | { isSale: true; originalPrice: number; discount: number; price?: number }
);

// Helper function to get the actual price of a product
export function getProductPrice(product: Product): number {
    if (product.isSale) {
        // If price is provided, use it; otherwise calculate from originalPrice and discount
        return product.price ?? product.originalPrice * (1 - product.discount / 100);
    }
    return product.price;
}

export const ProductList: Product[] = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        description: "Apple's flagship smartphone with powerful AI features, stunning 200MP camera, and S Pen built-in.",
        image: "/images/products/phone/17.png",
        hoverImage: "/images/products/phone/17.png",
        brand: "Apple",
        category: "Apple", //Smartphones
        colors: ["Gold", "Graphite", "Silver", "Sierra Blue"],
        features: [
            "A17 Pro chip with 6-core CPU and 6-core GPU",
            "6.7-inch Super Retina XDR display with ProMotion",
            "200MP main camera with advanced computational photography",
            "Apple Pencil (2nd generation) support",
            "5G connectivity",
            "iOS 17 with new AI-powered features",
            "E-SIM support",
            "Ceramic Shield front cover"

        ],
        specifications: {
            Processor: "A17 Pro chip",
            Display: "6.7-inch Super Retina XDR with ProMotion",
            Resolution: "2796 x 1290 pixels",
            RAM: "8GB",
            Storage: "256GB",
            "Main Camera": "200MP f/1.6",
            "Ultra Wide": "12MP f/2.4",
            "Telephoto": "12MP f/2.8 5x optical zoom",
            "Front Camera": "12MP f/1.9",
            Battery: "4323mAh",
            Weight: "221g",
            Dimensions: "160.7 x 77.6 x 7.85 mm"
        },
        warranty: "1 Year Manufacturer Warranty",
        whatsInTheBox: [
            "iPhone 17 Pro Max",
            "USB-C to Lightning Cable",
            "SIM Ejector Tool",
            "Documentation"
        ],
        images: ["/images/products/phone/4.webp", "/images/products/phone/5.webp"],
        slug: "samsung-galaxy-s24-ultra",
        isSale: true,
        originalPrice: 1299.99,
        discount: 15,
    },
    {
        id: 2,
        name: "Xiaomi 14 Pro",
        description: "Flagship smartphone with Leica optics, powerful Snapdragon processor, and stunning 120Hz AMOLED display.",
        image: "/images/products/phone/2.webp",
        hoverImage: "/images/products/phone/2.webp",
        brand: "Xiaomi",
        category: "Xiaomi", //Smartphones
        colors: ["Black", "White", "Titanium"],
        features: [
            "Snapdragon 8 Gen 3 processor",
            "6.73-inch AMOLED display with 120Hz",
            "Leica triple camera system",
            "12GB RAM with 256GB storage",
            "4880mAh battery with 120W HyperCharge",
            "50W wireless charging",
            "IP68 water resistance",
            "Dolby Atmos stereo speakers"
        ],
        specifications: {
            Processor: "Snapdragon 8 Gen 3",
            Display: "6.73-inch AMOLED, 120Hz",
            Resolution: "3200 x 1440 pixels",
            RAM: "12GB LPDDR5X",
            Storage: "256GB UFS 4.0",
            "Main Camera": "50MP f/1.4 Leica Summilux",
            "Ultra Wide": "50MP f/2.2",
            "Telephoto": "50MP f/2.0 floating telephoto",
            "Front Camera": "32MP f/2.0",
            Battery: "4880mAh",
            Weight: "223g",
            Dimensions: "161.4 x 74.6 x 8.2 mm"
        },
        warranty: "1 Year Manufacturer Warranty",
        whatsInTheBox: [
            "Xiaomi 14 Pro",
            "120W Charger",
            "USB-C Cable",
            "Protective Case",
            "SIM Ejector Tool",
            "Quick Start Guide"
        ],
        price: 999.99,
        images: ["/images/products/phone/4.webp", "/images/products/phone/5.webp"],
        slug: "xiaomi-14-pro",
        isSale: true,
        originalPrice: 1199.99,
        discount: 17,
    },
    {
        id: 3,
        name: "Samsung Galaxy A54 5G",
        description: "Mid-range powerhouse with premium features, smooth 120Hz display, and versatile camera system.",
        image: "/images/products/phone/3.png",
        hoverImage: "/images/products/phone/3.png",
        brand: "Samsung",
        category: "Samsung", //Smartphones
        colors: ["Awesome Graphite", "Awesome Violet", "Awesome Lime", "Awesome White"],
        features: [
            "Exynos 1380 processor",
            "6.4-inch Super AMOLED display",
            "50MP triple camera with OIS",
            "8GB RAM with 256GB storage",
            "5000mAh battery with 25W charging",
            "IP67 water and dust resistance",
            "One UI 6 based on Android 14",
            "Expandable storage up to 1TB"
        ],
        specifications: {
            Processor: "Exynos 1380 (5nm)",
            Display: "6.4-inch Super AMOLED, 120Hz",
            Resolution: "2340 x 1080 pixels (FHD+)",
            RAM: "8GB",
            Storage: "256GB (expandable)",
            "Main Camera": "50MP f/1.8 OIS",
            "Ultra Wide": "12MP f/2.2",
            "Macro": "5MP f/2.4",
            "Front Camera": "32MP f/2.2",
            Battery: "5000mAh",
            Weight: "202g",
            Dimensions: "158.2 x 76.7 x 8.2 mm"
        },
        warranty: "1 Year Manufacturer Warranty",
        whatsInTheBox: [
            "Samsung Galaxy A54 5G",
            "USB-C Cable",
            "SIM Ejector Tool",
            "Quick Start Guide"
        ],
        price: 449.99,
        images: ["/images/products/phone/4.webp", "/images/products/phone/5.webp"],
        slug: "samsung-galaxy-a54-5g"
    },
    {
        id: 4,
        name: "Xiaomi Redmi Note 13 Pro",
        description: "Feature-packed mid-range phone with 200MP camera, stunning AMOLED display, and fast charging.",
        image: "/images/products/phone/5.webp",
        hoverImage: "/images/products/phone/5.webp",
        brand: "Xiaomi",
        category: "Xiaomi", //Smartphones
        colors: ["Midnight Black", "Ocean Blue", "Stardust White"],
        features: [
            "Snapdragon 7s Gen 2 processor",
            "6.67-inch AMOLED display with 120Hz",
            "200MP main camera",
            "8GB RAM with 256GB storage",
            "5000mAh battery with 67W charging",
            "IP54 splash resistance",
            "Stereo speakers with Dolby Atmos",
            "Side-mounted fingerprint sensor"
        ],
        specifications: {
            Processor: "Snapdragon 7s Gen 2",
            Display: "6.67-inch AMOLED, 120Hz",
            Resolution: "2712 x 1220 pixels",
            RAM: "8GB LPDDR4X",
            Storage: "256GB UFS 2.2",
            "Main Camera": "200MP f/1.7 OIS",
            "Ultra Wide": "8MP f/2.2",
            "Macro": "2MP f/2.4",
            "Front Camera": "16MP f/2.4",
            Battery: "5000mAh",
            Weight: "199g",
            Dimensions: "161.2 x 74.2 x 7.98 mm"
        },
        warranty: "1 Year Manufacturer Warranty",
        whatsInTheBox: [
            "Xiaomi Redmi Note 13 Pro",
            "67W Charger",
            "USB-C Cable",
            "Protective Case",
            "SIM Ejector Tool",
            "Quick Start Guide"
        ],
        price: 349.99,
        images: ["/images/products/phone/4.webp", "/images/products/phone/5.webp"],
        slug: "xiaomi-redmi-note-13-pro"
    },
    {
        id: 5,
        name: "Samsung Galaxy Z Fold 5",
        description: "Revolutionary foldable smartphone with large tablet-like display and multitasking powerhouse features.",
        image: "/images/products/phone/4.webp",
        hoverImage: "/images/products/phone/4.webp",
        brand: "Samsung",
        category: "Samsung",    //Smartphones
        colors: ["Phantom Black", "Cream", "Icy Blue"],
        features: [
            "Snapdragon 8 Gen 2 for Galaxy",
            "7.6-inch foldable Dynamic AMOLED 2X",
            "Triple camera system with 50MP main",
            "12GB RAM with 256GB storage",
            "4400mAh dual battery",
            "S Pen compatible",
            "IPX8 water resistance",
            "Flex Mode for hands-free use"
        ],
        specifications: {
            Processor: "Snapdragon 8 Gen 2 for Galaxy",
            "Main Display": "7.6-inch Dynamic AMOLED 2X, 120Hz",
            "Cover Display": "6.2-inch Dynamic AMOLED 2X, 120Hz",
            Resolution: "2176 x 1812 (main), 2316 x 904 (cover)",
            RAM: "12GB",
            Storage: "256GB",
            "Main Camera": "50MP f/1.8 OIS",
            "Ultra Wide": "12MP f/2.2",
            "Telephoto": "10MP f/2.4 3x optical zoom",
            "Front Cameras": "10MP cover + 4MP under-display",
            Battery: "4400mAh",
            Weight: "253g",
            "Dimensions (Unfolded)": "154.9 x 129.9 x 6.1 mm"
        },
        warranty: "1 Year Manufacturer Warranty",
        whatsInTheBox: [
            "Samsung Galaxy Z Fold 5",
            "USB-C Cable",
            "SIM Ejector Tool",
            "Quick Start Guide"
        ],
        price: 1799.99,
        images: ["/images/products/phone/4.webp", "/images/products/phone/5.webp"],
        slug: "samsung-galaxy-z-fold-5"
    },
    {
        id: 6,
        name: "iPhone 16 Pro Max",
        description: "Apple's most advanced iPhone with A18 Pro chip, titanium design, and revolutionary camera system with 5x telephoto zoom.",
        image: "/images/products/phone/iphone16.png",
        hoverImage: "/images/products/phone/iphone16.png",
        brand: "Apple",
        category: "Apple",
        colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
        features: [
            "A18 Pro chip with next-generation Neural Engine",
            "6.9-inch Super Retina XDR display with ProMotion",
            "48MP Fusion camera with second-generation quad-pixel sensor",
            "5x Telephoto camera for stunning zoom shots",
            "Action button for quick access to features",
            "Titanium design with textured matte glass back",
            "USB-C with USB 3 speeds up to 10Gb/s",
            "Emergency SOS via satellite"
        ],
        specifications: {
            Processor: "A18 Pro chip",
            Display: "6.9-inch Super Retina XDR with ProMotion",
            Resolution: "2868 x 1320 pixels",
            RAM: "8GB",
            Storage: "256GB",
            "Main Camera": "48MP f/1.78 Fusion",
            "Ultra Wide": "48MP f/2.2",
            "Telephoto": "12MP f/2.8 5x optical zoom",
            "Front Camera": "12MP f/1.9 TrueDepth",
            Battery: "4685mAh",
            Weight: "227g",
            Dimensions: "163.0 x 77.6 x 8.25 mm"
        },
        warranty: "1 Year Apple Limited Warranty",
        whatsInTheBox: [
            "iPhone 16 Pro Max",
            "USB-C Charge Cable (1m)",
            "Documentation"
        ],
        isSale: true,
        originalPrice: 1499.99,
        discount: 10,
        images: ["/images/products/phone/iphone16.png"],
        slug: "iphone-16-pro-max"
    },
    
];


export interface Brand {
    id: number;
    name: string;
    image: string;
    website?: string;
}

export const BrandList: Brand[] = [
    {
        id: 1,
        name: "Apple",
        image: "/images/brands/apple.webp",
        website: "https://www.apple.com"
    },
    {
        id: 2,
        name: "Samsung",
        image: "/images/brands/samsung.webp",
        website: "https://www.samsung.com"
    },
    {
        id: 3,
        name: "Anker",
        image: "/images/brands/anker.webp",
        website: "https://www.anker.com"
    },
    {
        id: 4,
        name: "Huawei",
        image: "/images/brands/huawei.webp",
        website: "https://www.huawei.com"
    },
    {
        id: 5,
        name: "Infinix",
        image: "/images/brands/infinix.webp",
        website: "https://www.infinixmobility.com"
    },
    {
        id: 6,
        name: "tecno",
        image: "/images/brands/tecno.webp",
        website: "https://www.tecno-mobile.com"
    },
    {
        id: 7,
        name: "Xiaomi",
        image: "/images/brands/xiaomi.webp",
        website: "https://www.mi.com"
    }
];


