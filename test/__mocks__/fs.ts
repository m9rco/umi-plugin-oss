export function readdirSync(path: string): string[] {
  if (path.includes('static')) {
    return ['longlonglonglonglonglonglonglonglonglonglong-filename.png'];
  }
  return ['static', 'umi.js', 'index.html'];
}

export function createReadStream(_: string): null {
  return null;
}

export function statSync(path: string): object {
  if (path.endsWith('static')) {
    return {
      isFile() {
        return false;
      },
      isDirectory() {
        return true;
      },
    };
  } else if (path.endsWith('.js')) {
    return {
      isFile() {
        return true;
      },
      size: 1000,
    };
  } else {
    return {
      isFile() {
        return true;
      },
      size: 500,
    };
  }
}
