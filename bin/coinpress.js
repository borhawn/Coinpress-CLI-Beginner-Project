#!/usr/bin/env node
const { Command } = require('commander');
const pkg = require('../package.json')

const program = new Command();

program
  .name('coinpress')
  .description('A CLI to get some crypto information!')
  .version(pkg.version)
  .command('check','Checks for a coin and lists its information.')
  .command('list','Provides a list of top crypto currency coins.')
  .parse(process.argv);
  
