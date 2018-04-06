const AsciiTable = require('ascii-table');
const data = require('../data/joshfinnie.json');

let table = new AsciiTable('Josh Finnie');
table.setBorder("|", "-", "•", "•")
    .setAlign(0, AsciiTable.RIGHT)
    .setAlign(1, AsciiTable.LEFT);

Object.keys(data).forEach((key) => {
    table.addRow(key, data[key]);
})

console.log(table.toString());
