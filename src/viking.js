// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
  
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);   
        if (this.saxonArmy[randomSaxon].health <= 0) { 
           this.saxonArmy.splice(randomSaxon, 1)  
        }
        return result;
    }
    

    saxonAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);   
        if (this.vikingArmy[randomViking].health <= 0) { 
           this.vikingArmy.splice(randomViking, 1); 
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.saxonArmy.length === this.vikingArmy.length) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else {
            return "Saxons have fought for their lives and survived another day...";
        }
    }
}
