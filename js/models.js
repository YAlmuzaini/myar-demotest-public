var builders = [],
    tools = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      {
        name: 'Cleric',
        dialogue: 'Hi there, I\'m The Cleric! I\'ve lost my Staff. Let me know if you see it!',
        tool: new Tool('Staff', 'You have found Cleric\'s Staff!'),
        successDialogue: 'Thanks for my Staff!'
      },
      {
        name: 'Ranger',
        dialogue: 'Hey, I\'m The Ranger! I left my Arrow somewhere in the wood... can you help me find it?',
        tool: new Tool('Arrow', 'You have found Ranger\'s Arrow!'),
        successDialogue: 'My Arrow have been found!'
      },
      {
        name: 'Rogue',
        dialogue: 'Hey, I\'m The Rogue! I\'ve misplaced my favorite builder Dagger!',
        tool: new Tool('Dagger', 'You have found Rogue\'s Dagger!'),
        successDialogue: 'Merci!'
      },
      {
        name: 'Warrior',
        dialogue: 'Hello, I\'m The Warrior! I have to finish my fight, but I can\'t find my Sword...',
        tool: new Tool('Sword', 'You have found Warrior\'s Sword!'),
        successDialogue: 'Thanks for the Sword!'
      },
      {
        name: 'Wizard',
        dialogue: 'I\'m The Wizard, Pleased meeting you...have you seen my Staff?',
        tool: new Tool('Wizard_Staff', 'You have found Wizard\'s Staff!'),
        successDialogue: 'Thanks for finding my Staff!'
      },
      {
        name: 'demo',
        dialogue: 'Meow! Welcome to CBRE Build.',
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
