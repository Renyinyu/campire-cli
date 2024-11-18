#! /usr/bin/env node
import { Command } from "commander";
import { create } from "../lib/create.js";

const program = new Command();
program.command('create <project-name>')
.description('create a new project')
.action(function (projectName, options) {
  create(projectName)
})
program.parse();