

import images from "./images"

const categories = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins ",
        category: "Pasta",
        isBookmark: false,
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 10,
        videoId: "W-Oqe8Ph_eM"


    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "20 mins ",
        isBookmark: true,
        category: "Pasta",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 4,
        videoId: "W-Oqe8Ph_eM"



    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "50 mins ",
        isBookmark: true,
        category: "Pasta",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 1,
        videoId: "W-Oqe8Ph_eM"




    }

]
const trendingRecipes = [
    {
        id: 4,
        name: "Nasi Lemak",
        image:images.spagetti,
        duration: "1 hour ",
        isBookmark: true,
        category: "Local",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 18,

    },
    {
        id: 5,
        name: "Hamburger",
        image: images.laksa,
        duration: "1 hour ",
        isBookmark: false,
        category: "FastFood",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 15,

    },
    {
        id: 6,
        name: "Lasangna",
        image: images.lasangna,
        duration: "50 mins ",
        isBookmark: false,
        category: "FastFood",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 15,

    }
]

const allCategories=trendingRecipes.concat(categories)

export default {
    trendingRecipes,
    categories,
    allCategories
}
