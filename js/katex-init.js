// KaTeX client-side rendering initialization
function isWhitespaceNode(node) {
  return node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "";
}

function isStandaloneDelimiter(node, delimiter) {
  return (
    node &&
    node.nodeType === Node.ELEMENT_NODE &&
    node.tagName === "P" &&
    node.textContent.trim() === delimiter
  );
}

function normalizeSplitBlockMath(root) {
  const parents = [root].concat(Array.from(root.querySelectorAll("*")));

  parents.forEach(function (parent) {
    const nodes = Array.from(parent.childNodes);

    for (let i = 0; i < nodes.length; i++) {
      const open = nodes[i];
      if (!isStandaloneDelimiter(open, "$$")) {
        continue;
      }

      const contentNodes = [];
      let closeIndex = -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const node = nodes[j];

        if (isWhitespaceNode(node)) {
          continue;
        }

        if (isStandaloneDelimiter(node, "$$")) {
          closeIndex = j;
          break;
        }

        contentNodes.push(node);
      }

      if (closeIndex === -1 || contentNodes.length === 0) {
        continue;
      }

      const formula = contentNodes
        .map(function (node) {
          return node.textContent.trim();
        })
        .filter(Boolean)
        .join("\n");

      if (!formula) {
        continue;
      }

      const merged = document.createElement("p");
      merged.textContent = "$$\n" + formula + "\n$$";
      parent.insertBefore(merged, open);

      for (let j = i; j <= closeIndex; j++) {
        parent.removeChild(nodes[j]);
      }

      nodes.splice(i, closeIndex - i + 1, merged);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  normalizeSplitBlockMath(document.body);

  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
  });
});
