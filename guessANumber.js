function game(input) {

    let readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let randomizer = Math.floor(Math.random() * 100);

    let recursive = function () {
        readline.question('Guess the number (0 - 100): ', input => {
           
            if (Number(input) <= 100 && Number(input) >= 0) {
                if (Number(input) === randomizer) {
                    console.log('You guess it!');
                    recursive();
                } else if (Number(input) < randomizer) {
                    console.log('Too Low!');
                    recursive();
                } else if (Number(input) > randomizer) {
                    console.log('Too High!');
                    recursive();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursive();
            }

        });
    }

    recursive();
}

game(35);