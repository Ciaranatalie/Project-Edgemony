/*OGGETTO*/
/*Abbiamo realizzato un array di oggetti contenente tutte le to do list che servono per indirizzare l'utente a selezionare gli item necessari, successivamente potrà selezionare e deselezionare a piacimento gli item che gli servono */
export const cardColor = [
    "#ffdef2", 
    "#f2e2ff", 
    "#e2eeff", 
    "#ddfffc", 
    "#ffffe3",
    "#e5ffe4",
];

let code = "";
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random()* cardColor.length);
    code += cardColor[randomIndex];
};
console.log(code);



export const toDo = () => [
    {
        category: "Documents",
        icon: "&#128196",
        id: 0,
        items: [
            "Passport",
            "ID card",
            "Plane tickets",
            "Credit cards",
            "Cash",
            "Visas",
            "Driver's license",
            "Hotel reservations",
            "Travel itinerary",
        ],
    },
    {
        category: "Clothes",
        icon: "&#128090",
        id: 1,
        items: [
            "T-shirts",
            "Shorts",
            "Underwear",
            "Socks",
            "Pajamas",
            "Sweatshirt",
            "Jacket",
            "Comfortable shoes",
            "Dress shoes",
            "Swimsuit",
            "Hat",
        ],
    },
    {
        category: "Toiletries",
        icon: "&#129532",
        id: 2,
        items: [
            "Toothbrush",
            "Toothpaste",
            "Brush",
            "Shampoo",
            "Conditioner",
            "Shower gel",
            "Deodorant",
            "Razor",
            "Shaving cream",
            "Sunscreen",
            "Skincare products",
            "Wet wipes",
        ],
    },
    {
        category: "Medical kit",
        icon: "&#128138",
        id: 3,
        items: [
            "Personal medications",
            "First aid kit",
            "Hand sanitiser",
            "Vitamins",
            "Plasters",
            "Paracetamol",
        ],
    },
    {
        category: "Electronics",
        icon: "&#128241",
        id: 4,
        items: [
            "Smartphone",
            "Charger",
            "Power bank",
            "Universal adapter",
            "Laptop/Tablet",
            "Camera",
            "Headphones",
            "eBook reader",
        ],
    },
    {
        category: "Accessories",
        icon: "&#128082",
        id: 5,
        items: ["Sunglasses", "Sun hat", "Belt", "Scarf", "Watch", "Jewelry"],
    },
    {
        category: "Beauty",
        icon: "&#128132",
        id: 6,
        items: [
            "BB cream",
            "Mascara",
            "Eyeliner",
            "Lipstick",
            "Blush",
            "Eyeshadow Palette",
            "Makeup Brush",
            "Cleanser",
            "Foundation",
            "Powder",
        ],
    },
    {
        category: "Leisure",
        icon: "&#128211",
        id: 7,
        items: ["Book", "Travel guide", "Travel games", "Notebook"],
    },
    {
        category: "Other",
        icon: "&#128302",
        id: 8,
        items: [
            "Plastic bags for dirty clothes",
            "Umbrella",
            "Bag",
            "Water bottle",
            "Snacks",
        ],
    },
];
