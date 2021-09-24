// example mixin

const formatDate = {
  methods: {
    formatDate(d) {
      const curr = new Date();
      const prev = new Date(d);
      var ms_Min = 60 * 1000; // milliseconds in Minute
      var ms_Hour = ms_Min * 60; // milliseconds in Hour
      var ms_Day = ms_Hour * 24; // milliseconds in day
      var ms_Mon = ms_Day * 30; // milliseconds in Month
      var ms_Yr = ms_Day * 365; // milliseconds in Year
      var diff = curr - prev; //difference between dates.
      // If the diff is less then milliseconds in a minute
      if (diff < ms_Min) {
        return Math.round(diff / 1000) + ' seconds ago';

        // If the diff is less then milliseconds in a Hour
      } else if (diff < ms_Hour) {
        return Math.round(diff / ms_Min) + ' minutes ago';

        // If the diff is less then milliseconds in a day
      } else if (diff < ms_Day) {
        return Math.round(diff / ms_Hour) + ' hours ago';

        // If the diff is less then milliseconds in a Month
      } else if (diff < ms_Mon) {
        return 'Around ' + Math.round(diff / ms_Day) + ' days ago';

        // If the diff is less then milliseconds in a year
      } else if (diff < ms_Yr) {
        return 'Around ' + Math.round(diff / ms_Mon) + ' months ago';
      } else {
        return 'Around ' + Math.round(diff / ms_Yr) + ' years ago';
      }
    }
  }
};

export default formatDate;
