//! ===== Challenge 1 =====

//? 1. Create a class named Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    //? 2. Create a method called watch()
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

//? 3. Instantiate a new Video instance and call the watch() method
const video1 = new Video("Introduction to OOP", "Alice", 300);
video1.watch();

//? 4. Instantiate a second Video instance with different values
const video2 = new Video("JavaScript Prototypes", "Bob", 450);
video2.watch();

//? 5. Bonus: Use an array to store data for five Video instances
//? Think of the best data structure to save this information within the array.
const videoData = [
    { title: "React Hooks explained", uploader: "Charlie", time: 600 },
    { title: "Mastering CSS Grid", uploader: "Dave", time: 900 },
    { title: "Node.js Basics", uploader: "Eve", time: 1200 },
    { title: "TypeScript Crash Course", uploader: "Frank", time: 1800 },
    { title: "Advanced Regex techniques", uploader: "Grace", time: 750 }
];

//? 6. Bonus: Loop through the array to instantiate those instances.
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

//? 7. Test bonus instances
videos.forEach(video => video.watch());
