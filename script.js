// Options
const options = ["Lapis", "Papyrus", "Scalpellus"];

// Player's chooses button:
function buttonSelect(event) {
  
  // Player
  const player = {
    choice: null
  };
  // Computer
  const computer = {
    choice: null
  };
  // Name of the winner
  let winner = null; //'player' or 'computer'

  // Computer's choice:
  // Random number based on number of options
  function computerChooses() {
    return Math.floor(Math.random() * options.length);
  }
  computer.choice = options[computerChooses()];
  
  
  // Get which button the user pressed
  const e = event.target;
  player.choice = e.innerText;
  

  // --  Evaluating choices  --
  function compareChoices(computerChoice, playerChoice) {
    // Test for tie
    if(playerChoice === computerChoice) {
      return "It's a tie! The computer and the player chose " + computerChoice + ".";
    } else {
    // Lapis
      if(computerChoice === options[0]) {
      if(playerChoice === options[1]) {
        winner = "player";
      } else if(playerChoice === options[2]) {
        winner = "computer";
      }
    }
    // Papyrus
     else if(computerChoice === options[1]) {
      if(playerChoice === options[2]) {
        winner = "player";
      } else if(playerChoice === options[0]) {
        winner = "computer";
      }
    }
    // Scalpellus
     else if(computerChoice === options[2]) {
      if(playerChoice === options[0]) {
        winner = "player";
      } else if(playerChoice === options[1]) {
        winner = "computer";
      }
    }
      return "The " + winner + " wins! The computer chose " + computerChoice + " and the player chose " + playerChoice + ".";
    }

  }

  // CONSOLE OUTPUT
  function displayResult() {
    // Get results
    const resultText = compareChoices(computer.choice, player.choice);
    // Create display element
    const p = document.createElement("p");
    // Apply result to element
    p.innerText = resultText;
    // Add element to the end of the body.
    document.body.appendChild(p);
  }
  //Call function
  displayResult();
}