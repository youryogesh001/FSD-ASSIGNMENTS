const fs = require('fs');

function readFilesSequentially() {
    // Read File 1 first
    fs.readFile('file1.txt', 'utf8', (err, data1) => {
        if (err) return console.error(err);
        console.log(data1);

        // Once File 1 finishes, read File 2
        fs.readFile('file2.txt', 'utf8', (err, data2) => {
            if (err) return console.error(err);
            console.log(data2);

            // Once File 2 finishes, read File 3
            fs.readFile('file3.txt', 'utf8', (err, data3) => {
                if (err) return console.error(err);
                console.log(data3);
            });
        });
    });
}

readFilesSequentially();