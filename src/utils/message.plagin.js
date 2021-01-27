export default {
  install(app, options) {
    app.config.globalProperties.$message = function(html) {
      let toastMessage = `<span class="pt-2"> <i class="far fa-check-circle"> </i>  ${html}</span>`
      M.toast({html: toastMessage, classes: 'rounded' });
    };

    app.config.globalProperties.$error = function(html) {
      let toastMessage = `<span class="pt-2"> <i class="fas fa-exclamation-circle"></i>  ${html}</span>`
      M.toast({ html:  toastMessage , classes: 'rounded' });
    };
  }
};
