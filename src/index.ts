console.log(getCurrentDir());

function getCurrentDir(): string {
  const currentDir = process.cwd();
  return `current directory is ${currentDir}`;
}
