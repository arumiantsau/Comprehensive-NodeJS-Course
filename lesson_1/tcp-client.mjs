import net from "node:net";

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const client = net.createConnection({
  port: 2000,
  host: '127.0.0.1',
}, () => {
  console.log("Write something in console and this message should be sent to the server")
});

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  //
});