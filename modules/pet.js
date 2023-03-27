export default class Pet {
    asleep = false;
    health = {max: 100, value: 100};
    hunger = {max: 100, value: 0};
    happiness = 50;
    bond = 0;
    energy = 100;
    hygiene = 100;
    poop = 0;
    recentlyAte = false;
    petType = "";

    defaultImg = "";
    sleepImg = "";

    hungerMod = 1;
    happinessMod = 1;
    bondMod = 1;
    energyMod = 1;
    hygieneMod = 1;
    

    recentlyAte = false;
    poop = false;

    constructor(name, petType) {
        this.name = name;
        this.petType = petType;
    }

    update() {
        /* if (this.hunger > 80 || this.hygiene < 20 || this.happiness < 20) {
            this.health -= 10;
        }

        if (this.asleep === true) {
            this.hunger += (0.5 * this.hungerMod);
        } else {
            this.energy -= (1 * this.energyMod);
            this.hunger += (1 * this.hungerMod);
        }

        if (this.energy === 0) {
            this.#sleep();
        }

        this.hygene -= (1 * (this.hygieneMod * this.poop));
        this.happinessCalc = 1 / this.hunger;
        this.happinessCalc = this.happinessCalc * 100;
        this.happiness -= (this.happinessCalc * this.happinessMod); */
        
        document.getElementById('pet-status-name').textContent = this.name;
        
        // Update the status bar
        (this.health.value > 0) ? this.health.value -= 10 : this.health.value = this.kill();
        (this.hunger.value > 0) ? this.hunger.value += 5 : this.hunger.value = this.kill();

        this.status(this.health.value, this.health.max, 'pet-health');
        this.status(this.hunger.value, this.hunger.max, 'pet-hunger');
        
        if (this.recentlyAte = true) {
            this.recentlyAte = false;
            this.defecate();
        }
        
        
        this.petUpdate();
    }

    petUpdate() {
        // does nothing (on purpose);
    }

    eat() {
        document.getElementById('pet-speech').textContent = `${this.name} ate!`;
        if (this.hunger.value > 40) {
            this.hunger.value -= 40;
        } else {
            this.health.max;
        }
        // can put line here to change text in the HTML saying that the pet ate
        // for example --->  petMessage.textContent = `${this.name} ate!)`;
        this.recentlyAte = true;
    }

    play() {
        document.getElementById('pet-speech').textContent = `${this.name} played around!`;
        if (this.happiness < 80) {
            this.happiness += 20;
        } else {
            this.happiness = 100;
        }
        // can put line here to change text in the HTML saying that the pet played
    }

    clean() {
        document.getElementById('pet-speech').textContent = `${this.name} had a bath!`;
        this.hygiene = 100;
        this.poop = 0;
    }

    #sleep() {
        document.getElementById('pet-speech').textContent = `${this.name} is sleeping...`;
        this.asleep = true;
        document.getElementById("pet-image").src = this.sleepImg;
        setTimeout(() => {
            this.energy = 100;
            this.asleep = false;
            document.getElementById("pet-image").src = this.defaultImg;
        }, (Math.floor((Math.random() * 30000) + 60000)));
    }

    #defecate() {
        // random time after eating pet will defecate, will increase dirtiness levels
        // put an if statement in the tick handler that checks each tick if recentlyAte = true and calls this method if that's the case
        document.getElementById('pet-speech').textContent = `${this.name} pooped!`;
        setTimeout(() => {
            this.poop++;
        }, (Math.floor((Math.random() * 20000) + 20000)));

    }
    
    #kill() {
        alert(`${this.name} died :(`);
    }

    status(value, max, name) {
        const bar = document.getElementById(name);
        bar.style.width = `${(value / max * 100)}%`;
        bar.innerText = `${Math.ceil((value / max) * 100)}%`;
    }
}
