const gitRemoteOriginUrl = require('git-remote-origin-url');

console.log(getCurrentDir());
(async () => {
  try {
    const remoteUrl = await gitRemoteOriginUrl(process.cwd());
    console.log(`remote origin url is ${remoteUrl}`);
  } catch (e) {
    console.error(e.message);
  }
})();

function getCurrentDir(): string {
  const currentDir = process.cwd();
  return `current directory is ${currentDir}`;
}
