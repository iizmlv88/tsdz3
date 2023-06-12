// задача 1: Реалізація інтерфейсу для геометричних фігур

// Створіть інтерфейс Shape, який має дві властивості: name типу string і calculateArea типу функції,
//  яка повертає number. Реалізуйте цей інтерфейс для двох геометричних фігур: коло і прямокутник.

interface Shape {
  name: string;
  calculateArea(): number;
}
class Circle implements Shape {
  name: string 
  radius: number

  constructor(radius: number) {
    this.name = 'Circle';
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}

class Rectangle implements Shape {
  name: string;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(9);
console.log(`${circle.name} area = ${circle.calculateArea()}`);

const rectangle = new Rectangle(5, 5);
console.log(`${rectangle.name} area = ${rectangle.calculateArea()}`);

// Задача 2: Оновлення налаштувань

// Створіть інтерфейс Settings, який має наступні властивості: theme типу string, fontSize типу number
//  і isDarkMode типу boolean, але зробіть всі властивості необов'язковими, використовуючи оператор ?. 
// Далі створіть функцію updateSettings, яка приймає об'єкт типу Settings і оновлює налаштування програми.

interface Settings {
  theme?: string;
  fontSize?: number;
  isDarkMode?: boolean;
}

function updateSettings(settings: Settings): void {

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

const newSettings: Settings = {
  theme: "light",
  fontSize: 22,
  isDarkMode: false,
};

updateSettings(newSettings);

// адача 3: Об'єднання даних з двох джерел

// Створіть два інтерфейси: User і Account. Інтерфейс User містить властивості name типу string і age типу number,
//  а інтерфейс Account містить властивості username типу string і email типу string. Далі створіть інтерфейс UserProfile, 
//  який є результатом інтерсекції User і Account. 
// Напишіть функцію getUserProfile, яка приймає об'єкт типу User і Account і повертає об'єкт типу UserProfile.

interface User {
  name: string
  age: number
}

interface Account {
  username: string
  email: string
}

interface UserProfile extends User, Account {}

function getUserProfile(user: User, account: Account): UserProfile {
  const userProfile: UserProfile = {
    ...user,
    ...account
  };

  return userProfile
}