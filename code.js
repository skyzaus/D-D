class Character {
  constructor(name, Class) {
    this.Name = name;

    this.Class = subClass;

    this.Strength = this.getAttribute();

    this.Dexterity = this.getAttribute();
    this.Constitution = this.getAttribute();
    this.Intelligence = this.getAttribute();
    this.Wisdom = this.getAttribute();
    this.Charisma = this.getAttribute();
  }

  getAttribute() {
    let rolls = [
      this.rollDice(),
      this.rollDice(),
      this.rollDice(),
      this.rollDice(),
    ];
    rolls.sort((a, b) => b - a);
    rolls.pop();
    return rolls.reduce((a, b) => a + b, 0);
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

let names = ["John", "Jane", "Sam", "Susan", "Mike", "Lily"];

let randomIndex = Math.floor(Math.random() * names.length);

let randomName = names[randomIndex];

let classes = ["fighter", "rogue", "priest", "wizard", "ranger", "defender"];

let randomclassIndex = Math.floor(Math.random() * classes.length);

let randomclass = classes[randomclassIndex];

subClass = randomclass;

//let myNewCharacter = new Character(subClass);
//console.log(myNewCharacter);

let myCharacter = new Character(randomName);
console.log(myCharacter);

let maxKey = Object.keys(myCharacter).reduce((a, b) =>
  myCharacter[a] > myCharacter[b] ? a : b
);

console.log(maxKey);

function checkClass(maxKey) {
  if (maxKey == "Strength") {
    console.log("fighter");
    return "fighter";
  } else if (maxKey == "Charisma") {
    console.log("rogue");
    return "rogue";
  } else if (maxKey == "Wisdom") {
    console.log("priest");
    return "priest";
  } else if (maxKey == "Intelligence") {
    console.log("wizard");
    return "wizard";
  } else if (maxKey == "Dexterity") {
    console.log("ranger");
    return "ranger";
  } else if (maxKey == "Constitution") {
    console.log("defender");
    return "defender";
  } else {
    console.log(null);
    return null;
  }
}

let classChr = checkClass(maxKey);
console.log(classChr);

let myNewCharacter = new Character(classChr);
console.log(myNewCharacter);

let img1 =
  "https://assetsio.gnwcdn.com/dnd-5e-strixhaven-curriculum-of-chaos-artwork-3.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp";
let img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jnA5P1ESZtl3D_V6FYt1vIYNJmn3BvNm1h3W6duoOA&s";
let img3 =
  "https://cdn.arstechnica.net/wp-content/uploads/2016/01/wallpaper_1280-x-960-wallpaper-640x480.jpg";
let img4 =
  "https://cdn.geekwire.com/wp-content/uploads/2021/07/Strixhaven_Cover_Art.jpg";
let img5 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZjmVAtCn5lgDeANzSnnPgCW79vs2mG5ZxM6AzSoopw&s";
let img6 =
  "https://images.ctfassets.net/0piqveu8x9oj/7xkbfuRW3hWVoneQ13sI94/f97f0e8982c6ef35a71eeeea42f9d6a1/Articles_Header_Image_w07_2.jpg?q=80";
console.log(img2);

let dndImg = [
  "https://assetsio.gnwcdn.com/dnd-5e-strixhaven-curriculum-of-chaos-artwork-3.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jnA5P1ESZtl3D_V6FYt1vIYNJmn3BvNm1h3W6duoOA&s",
  "https://cdn.arstechnica.net/wp-content/uploads/2016/01/wallpaper_1280-x-960-wallpaper-640x480.jpg",
  "https://cdn.geekwire.com/wp-content/uploads/2021/07/Strixhaven_Cover_Art.jpg",
  "https://images.ctfassets.net/0piqveu8x9oj/7xkbfuRW3hWVoneQ13sI94/f97f0e8982c6ef35a71eeeea42f9d6a1/Articles_Header_Image_w07_2.jpg?q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZjmVAtCn5lgDeANzSnnPgCW79vs2mG5ZxM6AzSoopw&s",
];

let rdmImg = Math.floor(Math.random() * dndImg.length);

let randomIMG = dndImg[rdmImg];

chrRdmImg = randomIMG;

console.log(chrRdmImg);

for (const [key, value] of Object.entries(myCharacter)) {
  console.log(`${key}: ${value}`);
}
let entries = Object.entries(myCharacter);
let data = entries.map(([key, val] = entry) => {
  return `${key}: ${val}`;
});
console.log(data);

let ul = document.createElement("ul");

let img = document.createElement("img");
img.className = `chrImg`;
img.src = `${chrRdmImg}`;
ul.appendChild(img);

for (let i = 0; i < data.length; i++) {
  let li = document.createElement("li");
  li.textContent = data[i];
  ul.appendChild(li);
}
document.getElementById("myList").appendChild(ul);
