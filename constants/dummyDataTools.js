import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Martillo general",
        image: images.tool1,
        duration: "2021-06-21 18:00 hrs",
        serving: "Juan Perez",
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: images.UserProfile2,
                description: "Spaghetti pasta",
                quantity: "100"
            },
            {
                id: 2,
                icon: images.UserProfile5,
                description: "Olive Oil",
                quantity: "2"
            },
            {
                id: 3,
                icon: images.UserProfile1,
                description: "Fresh Shrimp",
                quantity: "100"
            },
            {
                id: 4,
                icon: images.UserProfile10,
                description: "Campari tomatoes",
                quantity: "100"
            },
            {
                id: 5,
                icon: images.UserProfile5,
                description: "Salt",
                quantity: "3"
            },
            {
                id: 6,
                icon: images.UserProfile2,
                description: "Black Pepper",
                quantity: "1"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Herramienta numero 2",
        image: images.tool2,
        duration: "2021-01-21 14:14 hrs",
        serving: "Roberto Cordova",
        isBookmark: false,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: images.UserProfile1,
                description: "Boneless Chicken Thighs",
                quantity: "1"
            },
            {
                id: 2,
                icon: images.UserProfile3,
                description: "Lemongrass stalk",
                quantity: "1"
            },
            {
                id: 3,
                icon: images.UserProfile3,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: images.UserProfile10,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: images.UserProfile6,
                description: "Coriander",
                quantity: "1"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Items generales",
        image: images.tool3,
        duration: "2021-06-14 08:14 hrs.",
        serving: "Raul Gonzales",
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: images.UserProfile1,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: images.UserProfile2,
                description: "Lemongrass",
                quantity: "2"
            },
            {
                id: 3,
                icon: images.UserProfile3,
                description: "E",
                quantity: "2"
            },
            {
                id: 4,
                icon: images.UserProfile4,
                description: "Fresh Shrimp",
                quantity: "100"
            },
            {
                id: 5,
                icon: images.UserProfile5,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: images.UserProfile6,
                description: "vermicelli",
                quantity: "100"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.tool4,
        duration: "2021-06-14 08:14 hrs.",
        serving: "Pedro Quiroga",
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile7,
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: images.UserProfile10,
                description: "Dried Chilli",
                quantity: "30"
            },
            {
                id: 2,
                icon:images.UserProfile3,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: images.UserProfile1,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: images.UserProfile4,
                description: "rice",
                quantity: "1"
            },
            {
                id: 5,
                icon: images.UserProfile7,
                description: "Dried anchovies",
                quantity: "3"
            },


        ],
        viewers: [

        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}