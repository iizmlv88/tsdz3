"use strict";
// задача 1: Реалізація інтерфейсу для геометричних фігур
class Circle {
    constructor(radius) {
        this.name = 'Circle';
        this.radius = radius;
    }
    calculateArea() {
        return Math.floor(Math.PI * this.radius * this.radius);
    }
}
class Rectangle {
    constructor(width, height) {
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(9);
console.log(`${circle.name} area = ${circle.calculateArea()}`);
const rectangle = new Rectangle(5, 5);
console.log(`${rectangle.name} area = ${rectangle.calculateArea()}`);
function updateSettings(settings) {
    if (settings.theme) {
        console.log(`theme is ${settings.theme}`);
    }
    if (settings.fontSize) {
        console.log(`font Size is  ${settings.fontSize}`);
    }
    if (settings.isDarkMode !== undefined) {
        console.log(`dark mode is ${settings.isDarkMode ? "On" : "Off"}`);
    }
}
const newSettings = {
    theme: "light",
    fontSize: 22,
    isDarkMode: false,
};
updateSettings(newSettings);
function getUserProfile(user, account) {
    const userProfile = Object.assign(Object.assign({}, user), account);
    return userProfile;
}
const user = {
    name: 'Dido',
    age: 99,
};
const account = {
    username: 'Boroda',
    email: 'acdc@tnt.com',
};
console.log(getUserProfile(user, account));
