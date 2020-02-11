Module.register("MMM-MonthCalendar", {

    defaults: {
        updateDelay: 5,
        showAdjacentMonths: true
    },

    weekdays: [],
    start: function() {
        moment.locale(config.language);
        this.weekdays = [0,1,2,3,4,5,6].map(d => moment().weekday(d).format("ddd"));
        this.scheduleUpdate();
    },

    update: function() {
        this.updateDom(0);
        this.scheduleUpdate();
    },

    scheduleUpdate: function() {
        let nextUpdate = moment().startOf('day').add({ days: 1, seconds: this.config.updateDelay});
        let timeout = nextUpdate.diff(moment());
        setTimeout(() => {
           this.update();
        }, timeout);
        Log.info(`${this.name} Next update scheduled at ${nextUpdate} which is in exactly ${timeout}ms`);
    },

    getHeader: function() {
        return `${this.data.header} ${moment().format('MMMM YYYY')}`
    },

    getStyles: function() {
        return [
            `${this.data.path}/main.css`
        ]
    },

    getScripts: function() { return ["moment.js"] },

    getTemplate: function() {
        return `${this.name}.njk`;
    },

    getTemplateData: function() {
        return {
            weekdays: this.weekdays,
            prefill: this.getPrefill(),
            postfill: this.getPostfill(),
            days: this.getCalendarDays(),
            today: moment().date()
        }
    },

    getPrefill: function() {
        /** Fills up the first calendar row with days of the previous month, 
         * when the config.showAdjacentMonths param is set to true. 
         * Otherwise it fills with empty space. */
        let days = [];
        let lastMonthDayCount = moment().startOf('month').subtract(1, 'day').date();
        // The weekday int is equal the amount of days we need to fill before
        let fillBefore = moment().startOf('month').weekday();
        let fillStart = (lastMonthDayCount + 1) - fillBefore;

        if (!this.config.showAdjacentMonths) return Array(fillBefore).fill("");

        for (let preDay = fillStart; preDay <= lastMonthDayCount; preDay++) {
            days.push(preDay);
        }
        return days;
    },

    getPostfill: function() {
        /** Fills up the last calendar row with days of the next month, 
         * when the config.showAdjacentMonths param is set to true. 
         * Otherwise it fills with empty space. */
        let days = [];
        if (!this.config.showAdjacentMonths) return days;

        let lastDay = moment().endOf('month').weekday()
        let fillAfter = 7 - lastDay;

        for (let postDay = 1; postDay < fillAfter; postDay++) {
                days.push(postDay);
        }
        return days;
    },

    getCalendarDays: function() {
        let days = [];

        for (let day = 1; day <= moment().daysInMonth(); day++) {
            days.push(day);
        }
        return days;
    }
});
