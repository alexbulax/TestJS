
const textFragment = (text, maxLength) => {
  if (typeof text !== 'string' || typeof maxLength !== 'number' ) return text;

  let newText = text.substring(0, maxLength - 3);
  const lastSpace = newText.lastIndexOf(' ');

  if (lastSpace < 0) {  
    return newText + '...';
  }

  return newText.substring(0, lastSpace) + '...';
};

const text = 'Introduce yourself The easiest way to introduce yourself on GitHub is by creating a README in a repository about you! You can start here: Discover interesting projects and people to populate your personal news feed. Your news feed helps you keep up with recent activity on repositories you watch or star and people you follow.'

console.log(textFragment(text,13));