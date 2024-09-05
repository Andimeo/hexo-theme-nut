const { marked } = require('marked');

const headingAnchor = function(data, options) {
  const renderer = new marked.Renderer();
  
  renderer.heading = function (text, level) {
    const escapedText = text.toLowerCase().replace(/[\s]+/g, '-');
    return `<h${level} id="${escapedText}">${text}</h${level}>`;
  };

  const src = data.text.toString();
  return marked(src, { renderer: renderer });
};

hexo.extend.renderer.register('md', 'html', headingAnchor, true);
hexo.extend.renderer.register('markdown', 'html', headingAnchor, true);
hexo.extend.renderer.register('mkd', 'html', headingAnchor, true);
hexo.extend.renderer.register('mkdn', 'html', headingAnchor, true);
hexo.extend.renderer.register('mdwn', 'html', headingAnchor, true);
hexo.extend.renderer.register('mdtxt', 'html', headingAnchor, true);
hexo.extend.renderer.register('mdtext', 'html', headingAnchor, true);
