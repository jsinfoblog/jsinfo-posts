const moment = require("moment-jalaali");

moment.loadPersian();
hexo.extend.filter.register("template_locals", locals => {
  if (locals.page.posts) {
    locals.page.posts.data = locals.page.posts.data.map(document => {
      document.date = moment(document.date);
      document.updated = moment(document.updated);
      return document;
    });
  }
  return locals;
});
