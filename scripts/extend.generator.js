'use strict';

module.exports = function(hexo) {
  const { config } = hexo;

  hexo.extend.generator.register('tagIndex', function(locals) {
    const tagDir = config.tag_dir + '/';
    const tags = locals.tags;

    return {
      path: tagDir,
      layout: ['tag', 'archive', 'index'],
      data: { tags: tags, type: 'index' }
    };
  });

  hexo.extend.generator.register('categoryIndex', function(locals) {
    const catDir = config.category_dir + '/';
    const cats = locals.categories;

    return {
      path: catDir,
      layout: ['category', 'archive', 'index'],
      data: { cats: cats, type: 'index' }
    };
  });

  hexo.extend.generator.register('archiveIndex', function(locals) {
    const archiveDir = config.archive_dir + '/';
    const posts = locals.posts;

    return {
      path: archiveDir,
      layout: ['archive', 'index'],
      data: { posts: posts, type: 'index' }
    };
  });

  hexo.extend.generator.register('wikiIndex', function(locals) {
    const wikiDir = hexo.theme.config.wiki_dir + '/';
    const reg = new RegExp('^' + wikiDir);
    const wikis = [];

    locals.pages.forEach(function(page) {
      if (reg.test(page.path)) {
        wikis.push(page);
      }
    });

    return {
      path: wikiDir,
      layout: ['wiki', 'index'],
      data: { wikis: wikis, title: 'Wiki' }
    };
  });
};
