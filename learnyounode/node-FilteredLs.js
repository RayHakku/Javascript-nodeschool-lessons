const fs = require('fs')

fs.readdir(process.argv[2], function (err, lsit) {
    if (!err) {
        for (var i = 0; i < lsit.length; i++) {
            if (lsit[i].split('.')[1] == process.argv[3]) {
                console.log(lsit[i])
            }
        }
    } else {
        throw err
    }
})