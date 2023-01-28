function game(input) {

    let readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let randomizer = Math.floor(Math.random() * 100);
    let count = 5;

    let recursive = function () {
        readline.question('Guess the number (0 - 100): ', input => {

            if (Number(input) <= 100 && Number(input) >= 0) {
                if (Number(input) === randomizer) {
                    console.log('You guess it!');
                    return;
                } else if (Number(input) < randomizer) {
                    console.log('Too Low!');
                    count--;
                    if (count > 1) {
                        console.log(`You have ${count} more tries`);
                    } else if (count === 1) {
                        console.log(`You have ${count} more try`);
                    } else if (count === 0) {
                        console.log(`You lost the game!\nGAME OVER`);
                        return;
                    }
                    recursive();
                } else if (Number(input) > randomizer) {
                    console.log('Too High!');
                    count--;
                    if (count > 1) {
                        console.log(`You have ${count} more tries`);
                    } else if (count === 1) {
                        console.log(`You have ${count} more try`);
                    } else if (count === 0) {
                        console.log(`You lost the game!\nGAME OVER`);
                        return;
                    }
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

game();