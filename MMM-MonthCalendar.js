Module.register("MMM-MonthCalendar", {

    weekdays: [],
    start: function() {
        this.weekdays = [0,1,2,3,4,5,6].map(d => moment().weekday(d).format("ddd"));
    },

    getHeader: function() {
        return `${this.data.header} ${moment().format('MMMM YYYY')}`
    },

    getTemplate: function() {
        return `${this.name}.njk`;
    },

    getTemplateData: function() {
        return {
            weekdays: this.weekdays
        }
    }

});
