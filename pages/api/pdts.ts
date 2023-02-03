// import { NextApiRequest, NextApiResponse } from "next/types";
// import Products from '../products';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const { method } = req;
//     switch (method) {
//         case "GET":
//         const response = await fetch(
//             "https://fakestoreapi.com/products?limit=10"
//         );
//         const data = await response.json();
//         res.status(200).json(data);
//         break;
//         default:
//         res.setHeader("Allow", ["GET"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// }

export const productsData = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        status: "Published"
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, ribbed cuffs",
        status: "Unpublished"
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for spring, autumn and winter, suitable for various occasions",
        status: "Unpublished"
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice",
        status: "Unpublished"
    },
    {
        id: 5,
        title: "Full Stack Blockchain Course",
        price: 100,
        description: "Learn Blockchain from scratch to advanced level",
        status: "Published"
    },
]