// Your Birthday Date (Format: yyyy-mm-ddTHH:MM:SS)
export const BIRTHDAY_DATE = "2025-08-28T00:00:00"; // Omkar insta @omkarkore_007

// Add recipient's name here.
export const NAME = "Shiya"


// Special Messages Screen
// You can edit each card from here.
// - "title" is optional, if you don’t want it, just remove it.
// - "showIcon" is true to show icon, false to hide it.
// - You can change the "color" and "message" as you like.
export const messages = [
    {
        id: 1,
        color: "from-pink-500 to-rose-500",
        title: "With Love",
        message: "You bring so much joy and happiness to everyone around you! Your smile lights up every room💕",
        showIcon: true,
    },
    {
        id: 2,
        color: "from-yellow-500 to-orange-500",
        title: "Dream Big",
        message: "May all your dreams come true and your year be filled with magic and wonder✨",
        showIcon: true,
    },
    {
        id: 3,
        color: "from-green-500 to-teal-500",
        message: "You're absolutely wonderful and deserve all the happiness in the world🌟",
        title: "You're Amazing",
        showIcon: true,
    },
];


// Photo Gallery Screen
// Heading text for the Photo Gallery section (displayed at the top)
export const photoScreenHeading = "Happy Birthday Princess"

// Subheading text for the Photo Gallery section (optional - you can remove or leave it blank if not needed)
export const photoScreenSubHeading = "You are Beautiful, Pretty & Cute"

// List of photo objects to display in the gallery
// - Add more photos by copying the same line and changing the id and src
// - Make sure each id is unique and the src points to a valid image path
// Make sure all image files are placed in the `/public/images/` folder
export const photos = [
    { id: 1, src: "/images/1.jpg" },
    { id: 2, src: "/images/2.jpg" },
    { id: 3, src: "/images/3.jpg" },
    { id: 4, src: "/images/4.jpg" },
]


// Letter Screen
// Main heading for the letter screen
export const letterScreenHeading = "A Special Letter"

// Optional subheading for the letter screen
// If you don't want any subheading, just leave it blank like this: ""
export const letterScreenSubHeading = "Just for you, on your special day 💌"

// Actual letter content to display on the screen
export const letterText = `Shiya!! On this special day, I want to take a moment to celebrate you and all the joy you bring into my life. Each day with you is a beautiful gift, and I am so grateful for every moment we share.

As you blow out your candles, I wish for all your dreams to come true. May this year bring you endless opportunities, countless smiles, and an abundance of love. I hope you chase your passions and embrace new adventures, knowing that I will be right by your side, cheering you on every step of the way.

I love you, i love you more than words can express! ❤️

Happy birthday Shiya.. my princess.. my qt pie.. 🎂✨

With all my love and warmest wishes...`

// Background Music file path
// Place your .mp3 file inside the "public/audio" folder and give the path like below.
export const backgroundMusic = "/audio/bg.mp3"
