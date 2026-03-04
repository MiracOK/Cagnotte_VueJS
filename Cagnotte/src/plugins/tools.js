export default {
  install(app, options) {
    app.mixin({
      methods: {
        dateToDB: function (date) {
          const parts = date.split('/');
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        },
        dbDateToFr: function (date) {
          const parts = date.split('-');
          return `${parts[2]}/${parts[1]}/${parts[0]}`;
        },
        dbDateHourToFr: function (date) {
          const parts = date.split(' '); 
          const partToFr = date.split('-')
          return `${partToFr[2]}/${partToFr[1]}/${partToFr[0]} ${parts[1]}`;
        },
        formatAmount: function (amount) {
          return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
          }).format(amount)
        },
        cutText: function (text, length) {
          return text.substr(0, length) + "...";
        }
      }
    })
    app.directive('focus', {
      mounted(el) {
        // L'élément prend le focus
        el.focus()
      }
    })
  }
}
