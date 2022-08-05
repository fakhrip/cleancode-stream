/**
 * Usage: node main.js left_triangle
 */

import { argv, exit } from 'node:process';

if (argv.length !== 3) {
    console.log(`
        \rUsage: node main.js left_triangle
    `)
    exit(1);
}

const programParam = argv[argv.length - 1];

function main() {
    const strings = [" ", "*"];
    const isFlipped = programParam.split("_")[0] === "up";

    switch (programParam) {
        case "up_left_triangle":
        case "down_right_triangle":
            for (let x = 10; x > 0; x--) {
                for (let y = 10-x; y >= 0; y--) {
                    process.stdout.write(
                        strings[+isFlipped]
                    );
                }
                for (let y = x; y > 0; y--) {
                    process.stdout.write(
                        strings[+!isFlipped]
                    );
                }
                process.stdout.write("\n");
            }
            break;

        case "up_right_triangle":
        case "down_left_triangle":
            for (let x = 10; x > 0; x--) {
                for (let y = x; y > 0; y--) {
                    process.stdout.write(
                        strings[+isFlipped]
                    );
                }
                for (let y = 10-x; y >= 0; y--) {
                    process.stdout.write(
                        strings[+!isFlipped]
                    );
                }
                process.stdout.write("\n");
            }
            break;
    
        default:
            break;
    }
}

main();
