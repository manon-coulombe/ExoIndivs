class Animal {  
  constructor(nom, age, pattes, espece, status) {
    this.nom = nom;
    this.age = age;
    this.pattes = pattes;
    this.espece = espece;
    this.status = status;
  }
  sePresenter() {
    return `Bonjour, mon nom est ${this.nom} et j'ai  ${this.age} ans.`;
  }
}

class Poulpe extends Animal {
  constructor(nom, age, status) {
    super(nom, age, status);
    this.pattes = 8;
    this.espece = "poulpe";
  }
}

class Chat extends Animal {
  constructor(nom, age, status) {
    super(nom, age, status);
    this.pattes = 4;
    this.espece = "chat";
  }
  sePresenter() {
    return `Bonjour, mon nom est ${this.nom} et j'ai  ${this.age} ans miaou miaou.`;

  }
}

class Chien extends Animal {
  constructor(nom, age, maitre, status) {
    super(nom, age, status);
    this.maitre = maitre
    this.pattes = 4;
    this.espece = "chien";
  }
  accueillirSonMaitre() {
    return `Bonjour ${this.maitre}`
  }
}

mrpoulpe = new Poulpe("mrPoulpe", 13);
// console.log(mrpoulpe);
// console.log(mrpoulpe.sePresenter());

// mushu = new Chat("Mushu", 2);
// console.log(mushu);
// console.log(mushu.sePresenter());

doby = new Chien("Doby", 9, "Franck");
console.log(doby);
console.log(doby.sePresenter());
console.log(doby.accueillirSonMaitre());