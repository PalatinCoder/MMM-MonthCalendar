Module.register("MMM-MonthCalendar", {

    weekdays: [],
    start: function() {
        this.weekdays = [0,1,2,3,4,5,6].map(d => moment().weekday(d).format("ddd"));
    },

    getHeader: function() {
        return `${this.data.header} ${moment().format('MMMM YYYY')}`
    },

    getStyles: function() {
        return [
            `${this.data.path}/main.css`
        ]
    },

    getTemplate: function() {
        return `${this.name}.njk`;
    },

    getTemplateData: function() {
        return {
            weekdays: this.weekdays,
            days: this.getCalendarDays()
        }
    },

    getCalendarDays: function() {
        let days = [];
        let FillBefore = moment().startOf('month').weekday();
        for (let i = 0; i < FillBefore; i++) {
            days.push('');
        }
        for (let day = 1; day <= moment().daysInMonth(); day++) {
            days.push(day);
        }
        Log.info(days);
        return days;
    }

});
