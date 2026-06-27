/**
 * Objective
 * create a program using Node.js EventEmitter that:
 * - Listens for multiple types of user events (e.g., login, logout, purchase and profile update).
 * - Tracks how many times each event is emitted.
 * - Logs summary of all event occurence when a special event is triggered.
 * 
 * Requirements:
 * - Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
 * - Emit these events multiple times with different arguments (e.g., username, item-purchased).
 * - Track and store the count of each event type.
 * - Define a summary event that logs a detailed report of how many times each event was triggered.
 * 
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0
};

emitter.on("user-login", (username) => {
    eventCounts['user-login']++;
    console.log(`${username} logged in to this website`);
});
emitter.on("user-logout", (username) => {
    eventCounts['user-logout']++;
    console.log(`${username} logged out to this website`);
});
emitter.on("user-purchase", (username, item) => {
    eventCounts['user-purchase']++;
    console.log(`${username} just purchased ${item} on this website`);
});
emitter.on("profile-update", (username, info) => {
    eventCounts['profile-update']++;
    console.log(`${username} just updated their  ${info} on this website`);
});

emitter.on("summary", () => {
    console.log(eventCounts);
});

emitter.emit("user-login", "krish");
emitter.emit("user-logout", "krish");
emitter.emit("user-purchase", "krish", "laptop");
emitter.emit("profile-update", "krish", "krishkumarbgp2022@gmail.com");
emitter.emit("summary");