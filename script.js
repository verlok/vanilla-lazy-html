const lazyLoad = new LazyLoad({
  elements_selector: ".lazy-dom",
  callback_enter: (el) => {
    const urlToCall = $(el).data('url');
    $.ajax(urlToCall).done(asyncHtml => {
      $(el).html(asyncHtml);
    })
  }
});