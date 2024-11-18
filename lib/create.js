import inquirer from "inquirer";
import { simpleGit, CleanOptions } from 'simple-git';
import ora from 'ora'

const git = simpleGit().clean(CleanOptions.FORCE);

export async function create(projectName) {
  console.log(projectName)
  inquirer
    .prompt([
      {
        type: "list",
        name: "projectType",
        message: "请选择需要创建的项目类型",
        default: "to-b",
        choices: ['to-b', 'to-c'],
      },
    ])
    .then( async (answers) => {
      await cloneProject(answers.projectType, projectName)
    });
}

const type = new Map()
type.set('to-b', 'https://github.com/vbenjs/vue-vben-admin.git')
type.set('to-c', 'https://github.com/vbenjs/vue-vben-admin.git')
const cloneProject = async (projectType, projectName) => {
  const spinner = ora('拉取项目中...').start();
  try {
    await git.clone('https://github.com/vbenjs/vue-vben-admin.git', `${process.cwd()}/${projectName}`)
    spinner.succeed('拉取完成')
  } catch (error) {
    spinner.fail(error.message)
  }
}
