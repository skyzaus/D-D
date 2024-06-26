
const removeBtn = document.querySelector("#remove");
const imgContainer = document.querySelector("#heroNPC");



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









function newChr() {
  let myCharacter = new player();
  console.log(myCharacter);
  return myCharacter
}


//test character
let myCharacter2 = new player();
console.log(myCharacter2);














function getImg() {
  let dndImg = [
    "https://assetsio.gnwcdn.com/dnd-5e-strixhaven-curriculum-of-chaos-artwork-3.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jnA5P1ESZtl3D_V6FYt1vIYNJmn3BvNm1h3W6duoOA&s",
    "https://cdn.arstechnica.net/wp-content/uploads/2016/01/wallpaper_1280-x-960-wallpaper-640x480.jpg",
    "https://cdn.geekwire.com/wp-content/uploads/2021/07/Strixhaven_Cover_Art.jpg",
    "https://images.ctfassets.net/0piqveu8x9oj/7xkbfuRW3hWVoneQ13sI94/f97f0e8982c6ef35a71eeeea42f9d6a1/Articles_Header_Image_w07_2.jpg?q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZjmVAtCn5lgDeANzSnnPgCW79vs2mG5ZxM6AzSoopw&s",
    "https://i.pinimg.com/236x/03/4b/de/034bde783ea726b922100c86547831e8.jpg",
    "https://diffusionart.co/wp-content/uploads/2023/04/Character-Anime-Manga-NFT-Profile-Pictures2.png",
    "https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq",
    "https://wallpapers.com/images/hd/aesthetic-anime-profile-pictures-7itw2zu0i0mhhwwl.jpg",
    "https://i.pinimg.com/736x/80/53/76/805376efa690607d2fc932f9f1e49cbb.jpg",
    "https://cdn.imgchest.com/files/e4gdcveeg34.png",
    "https://i.etsystatic.com/37020257/r/il/7247b2/5757417126/il_300x300.5757417126_h6ft.jpg"






  ];

  let rdmImg = Math.floor(Math.random() * dndImg.length);

  let randomIMG = dndImg[rdmImg];

  chrRdmImg = randomIMG;

  console.log(chrRdmImg);
  return (chrRdmImg)

}






function createNPC() {
  for (const [key, value] of Object.entries(newChr())) {
    console.log(`${key}: ${value}`);
  }
  let entries = Object.entries(newChr());
  let data = entries.map(([key, val] = entry) => {
    return `${key}: ${val}`;
  });
  console.log(data);

  let ul = document.createElement("ul");
  ul.setAttribute("id", "remove");
  
  const div = document.createElement("div");
  div.classList.add("cancleSymbol");
  div.innerHTML = "&#10060";
  ul.appendChild(div);

   div.addEventListener("click", function(e) {
 e.target.parentNode.remove();
 })



  let img = document.createElement("img");
  img.className = `chrImg`;
  img.src = getImg();
  ul.appendChild(img);

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.textContent = data[i];
    ul.appendChild(li);


    const div = document.createElement("div");



  }
  document.getElementById("heroNPC").appendChild(ul);


}



document.getElementById("submitNPC").addEventListener("click", createNPC);

//removeBtn.addEventListener("click", function(e) {
//  console.log(e.target);
//  heroNPC.innerHTML = "";
//});

// const div = document.createElement("div");
// div.classList.add("cancleSymbol");
// div.innerHTML = "&#10060";
// ul.appendChild(div);

removeBtn.addEventListener("click", function (e) {
  console.log(e.target);
  heroNPC.innerHTML = "";
})