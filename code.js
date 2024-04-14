class player {
  constructor() {
    this.Name = this.getRandomName();
    this.Class = 0;
    this.Class = this.getClass();
    this.Strength = this.getAttribute();
    this.Dexterity = this.getAttribute();
    this.Constitution = this.getAttribute();
    this.Intelligence = this.getAttribute();
    this.Wisdom = this.getAttribute();
    this.Charisma = this.getAttribute();
    this.Class = this.getClass();
  }

  getRandomName() {
    let names = ["John", "Jane", "Sam", "Susan", "Mike", "Lily"];
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
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

  getClass() {
  

    const initVal = 1;
    let maxKey = Object.values(this).reduce((a, b) => (a > b ? a : b), initVal);
    
    if (maxKey == this.Strength) {
     
      return "fighter";
    } else if (maxKey == this.Charisma) {
      
      return "rogue";
    } else if (maxKey == this.Wisdom) {
     
      return "priest";
    } else if (maxKey == this.Intelligence) {
     
      return "wizard";
    } else if (maxKey == this.Dexterity) {
     
      return "ranger";
    } else if (maxKey == this.Constitution) {
      
      return "defender";
    } else {
      
      return null;
    }
  }
}



let myCharacter = new player();
console.log(myCharacter);





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
