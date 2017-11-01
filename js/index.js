function Tiger(name) {
    this.name = name || 'Tiger';
    this.hunger = 5;
    this.thirst = 5;
    this.sleeping = 5;
    this.mood = 5;
    this.training = 5;
    this.healthy = 5;
    var params = ["hunger", "thirst", "sleeping", "mood", "training", "healthy"];
    var messageFail = {
        hunger: 'I\'m hungry',
        thirst: 'I want to drink',
        sleeping: 'I want to sleep',
        mood: 'I\'m upset',
        healthy: 'I\'m seek',
        training: 'I want studying'
    };
    var randomMessages = ['Test', 'Brrrr, It\'s so cold'];

    this.state = function () {
        for(var i = 0; i < params.length; i++) {
            switch (this[params[i]]) {
                case 0:
                    this[params[i]] = 0;
                case 1:
                    console.log(messageFail[params[i]]);
                    break;
                case 2:
                    console.log(messageFail[params[i]]);
                    break;
                default:
                    break;

           }
        }
        if (this.hunger < 2 || this.sleeping < 2) {
            this.healthy--;
        } else if (this.hunger > 8 && this.sleeping > 8) {
            this.healthy++;
        }
        if (this.healthy <= 0) {
            console.log('RIP');
            setTimeout(function(){ location.reload(); }, 3000);
        }
    }
}

Tiger.prototype.sleep = function () {
    if (this.sleeping > 8) {
        console.log('I don\'t want to sleep');
    } else {
        console.log('Zzzz...');
        this.hunger--;
        this.thirst--;
        this.sleeping++;
        this.healthy++;
    }
    this.state();
}

Tiger.prototype.eat = function () {
    if (this.hunger > 8) {
        console.log('I\'m not hungry');
    } else {
        var r = Math.random();
        if (r > 0.2) {
            console.log('Yummy!');
            this.hunger++;
            this.thirst--;
            this.sleeping--;
        } else {
            console.log('It\'s a poison');
            setTimeout(function(){ location.reload(); }, 3000)
        }
        
    }
    this.state();
}

Tiger.prototype.drink = function () {
    if (this.thirst > 8) {
        console.log('I don\'t want drinks');
    } else {
        console.log('Yupi!');
        this.thirst++;
        this.mood--;
    }
    this.state();
}

Tiger.prototype.play = function () {
    if (this.mood > 8) {
        console.log('I\'m so tired...');
    } else {
        console.log('So fun!');
        this.mood++;
        this.sleeping--;
    }
    this.state();
}

Tiger.prototype.learn = function () {
    if (this.training > 8) {
        console.log('Too much lessons for today');
    } else {
        console.log('It was so interesting');
        this.training++;
        this.mood--;
    }
    this.state();
}

Tiger.prototype.health = function () {
    console.log('I become stronger');
    this.helthy+=3;
    this.mood--;
    this.sleeping--;
    this.state();
}

Tiger.prototype.help = function () {
    console.log('I have such opportunities: \n' +
        'I can sleep with the command - "sleep", \n' +
        'I can drink with the command - "drink", \n' +
        'I can eat with the command - "eat", \n' +
        'I can play with the command - "play", \n' +
        'I need to be stronger with the command - "health"'
    );
}

var tiger = new Tiger('Tim');
tiger.help();