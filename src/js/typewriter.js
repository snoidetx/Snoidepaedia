document.addEventListener('DOMContentLoaded', function () {
  const intro = document.querySelector('[data-typewriter], .page-intro');
  if (!intro) return;

  const wordDelay = 10; // milliseconds per word

  // Create wrapper
  const wrap = document.createElement('div');
  wrap.className = 'typewriter-wrap';

  // Move intro into wrapper
  intro.parentNode.insertBefore(wrap, intro);
  wrap.appendChild(intro);

  // Original intro reserves the final space
  intro.classList.add('typewriter-measure');

  // Clone intro for the visible typed version
  const output = intro.cloneNode(true);
  output.classList.remove('typewriter-measure');
  output.classList.add('typewriter-output');
  output.setAttribute('aria-hidden', 'true');

  wrap.appendChild(output);

  // Collect all text nodes, including whitespace-only nodes
  const walker = document.createTreeWalker(
    output,
    NodeFilter.SHOW_TEXT
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  // Save original text, then clear output text
  const originals = textNodes.map(node => node.nodeValue);

  textNodes.forEach(node => {
    node.nodeValue = '';
  });

  // Split into word/space chunks.
  // This preserves spaces around links.
  const chunks = originals.map((text, index) => {
    const parent = textNodes[index].parentElement;
    if (parent && parent.closest('.ref-link')) {
      return [text];
    }

    return text.match(/\S+\s*|\s+/g) || [];
  });

  let nodeIndex = 0;
  let chunkIndex = 0;

  function type() {
    if (nodeIndex >= textNodes.length) {
      output.classList.remove('typing');
      return;
    }

    const currentNode = textNodes[nodeIndex];
    const currentChunks = chunks[nodeIndex];

    if (currentChunks.length === 0) {
      nodeIndex++;
      chunkIndex = 0;
      type();
      return;
    }

    currentNode.nodeValue += currentChunks[chunkIndex];
    chunkIndex++;

    if (chunkIndex >= currentChunks.length) {
      nodeIndex++;
      chunkIndex = 0;
    }

    setTimeout(type, wordDelay);
  }

  output.classList.add('typing');
  type();
});
