(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJLEtBQTREO0FBQ2hFLElBQUksU0FDdUQ7QUFDM0QsQ0FBQyxvQkFBb0I7O0FBRXJCO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxpQ0FBaUM7QUFDbEUsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRCxnRUFBZ0UseUVBQXlFO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0NBQXNDLGlEQUFpRCxFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQ0FBa0MsMEJBQTBCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQixFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLDZCQUE2QixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQ0FBb0MsK0NBQStDLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLCtCQUErQixFQUFFO0FBQzdEO0FBQ0EsNEJBQTRCLDhCQUE4QixFQUFFO0FBQzVEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsMkJBQTJCLEVBQUU7QUFDekQ7QUFDQSw0QkFBNEIsNEJBQTRCLEVBQUU7QUFDMUQ7QUFDQSw0QkFBNEIsMkRBQTJELEVBQUU7QUFDekY7QUFDQSw0QkFBNEIsK0JBQStCLEVBQUU7QUFDN0Q7QUFDQSw0QkFBNEIsdUJBQXVCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLGlDQUFpQyxFQUFFO0FBQy9EO0FBQ0EsNEJBQTRCLDRCQUE0QixFQUFFO0FBQzFEO0FBQ0EsNEJBQTRCLDBCQUEwQixFQUFFO0FBQ3hEO0FBQ0EsNEJBQTRCLHVCQUF1QixFQUFFO0FBQ3JEO0FBQ0EsNEJBQTRCLHNCQUFzQixFQUFFO0FBQ3BEO0FBQ0EsNEJBQTRCLGdEQUFnRDtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxtQkFBbUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLG9DQUFvQyxFQUFFO0FBQ3RHO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJDQUEyQyx1Q0FBdUM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMkJBQTJCO0FBQ3RFLHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDRDQUE0QyxFQUFFO0FBQ2xHO0FBQ0Esc0RBQXNELDBDQUEwQyxFQUFFO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxnQkFBZ0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLDBEQUEwRCxFQUFFO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSztBQUN4QixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0VBQW9FO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlCQUFpQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQ0FBa0MsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0Msa0NBQWtDLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDJCQUEyQjtBQUMzRSx1Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZELHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxVQUFVLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlDQUF5QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtDQUFrQyxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYscUJBQXFCLEVBQUU7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlFQUFpRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0MsNkJBQTZCLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZCQUE2QixFQUFFO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esa0NBQWtDLDZCQUE2QixFQUFFO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiLG9EQUFvRDtBQUNwRDtBQUNBLGNBQWM7QUFDZDtBQUNBLGtDQUFrQyw2QkFBNkIsRUFBRTtBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBLGtDQUFrQyw2QkFBNkIsRUFBRTtBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsd0NBQXdDLEVBQUU7QUFDcEY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlFQUFpRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHVDQUF1QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSEFBc0gsaUNBQWlDLEVBQUU7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDLFlBQVk7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGtDQUFrQyxFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxZQUFZLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxZQUFZLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtDQUFrQyxFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QscUNBQXFDLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QscUNBQXFDLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaURBQWlELEVBQUU7QUFDL0c7QUFDQSx5REFBeUQsa0NBQWtDLEVBQUU7QUFDN0Y7QUFDQTtBQUNBLDJDQUEyQyx1QkFBdUI7QUFDbEUsb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixzQ0FBc0MsVUFBVSxFQUFFLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNDQUFzQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQ0FBaUMsRUFBRTtBQUNyRTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkM7QUFDN0MsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiJqcy9jaHVua3MvMTEwLmpzP2lkPWEzNjUxYWZhM2NmMTVlNDhlZjRiIiwic291cmNlc0NvbnRlbnQiOlsiLyogZmxhdHBpY2tyIHY0LjYuMywgQGxpY2Vuc2UgTUlUICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmZsYXRwaWNrciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG4gICAgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuICAgIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG4gICAgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG4gICAgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuICAgIE1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG4gICAgU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbiAgICBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XG5cbiAgICB2YXIgSE9PS1MgPSBbXG4gICAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgICAgXCJvbkNsb3NlXCIsXG4gICAgICAgIFwib25EYXlDcmVhdGVcIixcbiAgICAgICAgXCJvbkRlc3Ryb3lcIixcbiAgICAgICAgXCJvbktleURvd25cIixcbiAgICAgICAgXCJvbk1vbnRoQ2hhbmdlXCIsXG4gICAgICAgIFwib25PcGVuXCIsXG4gICAgICAgIFwib25QYXJzZUNvbmZpZ1wiLFxuICAgICAgICBcIm9uUmVhZHlcIixcbiAgICAgICAgXCJvblZhbHVlVXBkYXRlXCIsXG4gICAgICAgIFwib25ZZWFyQ2hhbmdlXCIsXG4gICAgICAgIFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIsXG4gICAgXTtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIF9kaXNhYmxlOiBbXSxcbiAgICAgICAgX2VuYWJsZTogW10sXG4gICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxuICAgICAgICBhbHRGb3JtYXQ6IFwiRiBqLCBZXCIsXG4gICAgICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICAgICAgYWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcbiAgICAgICAgYW5pbWF0ZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxuICAgICAgICBhcmlhRGF0ZUZvcm1hdDogXCJGIGosIFlcIixcbiAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgY29uanVuY3Rpb246IFwiLCBcIixcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgICAgICBkZWZhdWx0SG91cjogMTIsXG4gICAgICAgIGRlZmF1bHRNaW51dGU6IDAsXG4gICAgICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxuICAgICAgICBkaXNhYmxlOiBbXSxcbiAgICAgICAgZGlzYWJsZU1vYmlsZTogZmFsc2UsXG4gICAgICAgIGVuYWJsZTogW10sXG4gICAgICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxuICAgICAgICBlbmFibGVUaW1lOiBmYWxzZSxcbiAgICAgICAgZXJyb3JIYW5kbGVyOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdlZWs6IGZ1bmN0aW9uIChnaXZlbkRhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgLy8gVGh1cnNkYXkgaW4gY3VycmVudCB3ZWVrIGRlY2lkZXMgdGhlIHllYXIuXG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAzIC0gKChkYXRlLmdldERheSgpICsgNikgJSA3KSk7XG4gICAgICAgICAgICAvLyBKYW51YXJ5IDQgaXMgYWx3YXlzIGluIHdlZWsgMS5cbiAgICAgICAgICAgIHZhciB3ZWVrMSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgICAgICAgICAvLyBBZGp1c3QgdG8gVGh1cnNkYXkgaW4gd2VlayAxIGFuZCBjb3VudCBudW1iZXIgb2Ygd2Vla3MgZnJvbSBkYXRlIHRvIHdlZWsxLlxuICAgICAgICAgICAgcmV0dXJuICgxICtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKCgoZGF0ZS5nZXRUaW1lKCkgLSB3ZWVrMS5nZXRUaW1lKCkpIC8gODY0MDAwMDAgLVxuICAgICAgICAgICAgICAgICAgICAzICtcbiAgICAgICAgICAgICAgICAgICAgKCh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykpIC9cbiAgICAgICAgICAgICAgICAgICAgNykpO1xuICAgICAgICB9LFxuICAgICAgICBob3VySW5jcmVtZW50OiAxLFxuICAgICAgICBpZ25vcmVkRm9jdXNFbGVtZW50czogW10sXG4gICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXG4gICAgICAgIG1pbnV0ZUluY3JlbWVudDogNSxcbiAgICAgICAgbW9kZTogXCJzaW5nbGVcIixcbiAgICAgICAgbW9udGhTZWxlY3RvclR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXG4gICAgICAgIG5vQ2FsZW5kYXI6IGZhbHNlLFxuICAgICAgICBub3c6IG5ldyBEYXRlKCksXG4gICAgICAgIG9uQ2hhbmdlOiBbXSxcbiAgICAgICAgb25DbG9zZTogW10sXG4gICAgICAgIG9uRGF5Q3JlYXRlOiBbXSxcbiAgICAgICAgb25EZXN0cm95OiBbXSxcbiAgICAgICAgb25LZXlEb3duOiBbXSxcbiAgICAgICAgb25Nb250aENoYW5nZTogW10sXG4gICAgICAgIG9uT3BlbjogW10sXG4gICAgICAgIG9uUGFyc2VDb25maWc6IFtdLFxuICAgICAgICBvblJlYWR5OiBbXSxcbiAgICAgICAgb25WYWx1ZVVwZGF0ZTogW10sXG4gICAgICAgIG9uWWVhckNoYW5nZTogW10sXG4gICAgICAgIG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjogW10sXG4gICAgICAgIHBsdWdpbnM6IFtdLFxuICAgICAgICBwb3NpdGlvbjogXCJhdXRvXCIsXG4gICAgICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsXG4gICAgICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXG4gICAgICAgIHNob3dNb250aHM6IDEsXG4gICAgICAgIHN0YXRpYzogZmFsc2UsXG4gICAgICAgIHRpbWVfMjRocjogZmFsc2UsXG4gICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgd3JhcDogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIGVuZ2xpc2ggPSB7XG4gICAgICAgIHdlZWtkYXlzOiB7XG4gICAgICAgICAgICBzaG9ydGhhbmQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgICAgXCJTdW5kYXlcIixcbiAgICAgICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgIFwiRnJpZGF5XCIsXG4gICAgICAgICAgICAgICAgXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBtb250aHM6IHtcbiAgICAgICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgICAgICBcIkRlY1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgICAgIFwiTWFyY2hcIixcbiAgICAgICAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgICAgICBcIkp1bmVcIixcbiAgICAgICAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgICAgIFwiRGVjZW1iZXJcIixcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudGgpIHtcbiAgICAgICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xuICAgICAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICAgICAgc3dpdGNoIChzICUgMTApIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByYW5nZVNlcGFyYXRvcjogXCIgdG8gXCIsXG4gICAgICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcbiAgICAgICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxuICAgICAgICB0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIixcbiAgICAgICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcbiAgICAgICAgeWVhckFyaWFMYWJlbDogXCJZZWFyXCIsXG4gICAgICAgIGhvdXJBcmlhTGFiZWw6IFwiSG91clwiLFxuICAgICAgICBtaW51dGVBcmlhTGFiZWw6IFwiTWludXRlXCIsXG4gICAgICAgIHRpbWVfMjRocjogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIHBhZCA9IGZ1bmN0aW9uIChudW1iZXIpIHsgcmV0dXJuIChcIjBcIiArIG51bWJlcikuc2xpY2UoLTIpOyB9O1xuICAgIHZhciBpbnQgPSBmdW5jdGlvbiAoYm9vbCkgeyByZXR1cm4gKGJvb2wgPT09IHRydWUgPyAxIDogMCk7IH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICAgICAgaWYgKGltbWVkaWF0ZSA9PT0gdm9pZCAwKSB7IGltbWVkaWF0ZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdGltZW91dCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKVxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfSwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lb3V0KVxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBhcnJheWlmeSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gb2JqIDogW29ial07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xuICAgICAgICBpZiAoYm9vbCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgdmFyIGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJcIjtcbiAgICAgICAgZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyTm9kZShub2RlKSB7XG4gICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmRQYXJlbnQobm9kZSwgY29uZGl0aW9uKSB7XG4gICAgICAgIGlmIChjb25kaXRpb24obm9kZSkpXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnQobm9kZS5wYXJlbnROb2RlLCBjb25kaXRpb24pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBub3RoaW5nIGZvdW5kXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZU51bWJlcklucHV0KGlucHV0Q2xhc3NOYW1lLCBvcHRzKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSwgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSwgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSwgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDkuMFwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG51bUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbnVtSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgbnVtSW5wdXQucGF0dGVybiA9IFwiXFxcXGQqXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRzKVxuICAgICAgICAgICAgICAgIG51bUlucHV0LnNldEF0dHJpYnV0ZShrZXksIG9wdHNba2V5XSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93VXApO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93RG93bik7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFdmVudFRhcmdldChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldDtcbiAgICB9XG5cbiAgICB2YXIgZG9Ob3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuICAgIHZhciBtb250aFRvU3RyID0gZnVuY3Rpb24gKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLm1vbnRoc1tzaG9ydGhhbmQgPyBcInNob3J0aGFuZFwiIDogXCJsb25naGFuZFwiXVttb250aE51bWJlcl07IH07XG4gICAgdmFyIHJldkZvcm1hdCA9IHtcbiAgICAgICAgRDogZG9Ob3RoaW5nLFxuICAgICAgICBGOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGhOYW1lLCBsb2NhbGUpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xuICAgICAgICB9LFxuICAgICAgICBHOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgSDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIEo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgICAgICB9LFxuICAgICAgICBLOiBmdW5jdGlvbiAoZGF0ZU9iaiwgYW1QTSwgbG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKChkYXRlT2JqLmdldEhvdXJzKCkgJSAxMikgK1xuICAgICAgICAgICAgICAgIDEyICogaW50KG5ldyBSZWdFeHAobG9jYWxlLmFtUE1bMV0sIFwiaVwiKS50ZXN0KGFtUE0pKSk7XG4gICAgICAgIH0sXG4gICAgICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZihzaG9ydE1vbnRoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFU6IGZ1bmN0aW9uIChfLCB1bml4U2Vjb25kcykgeyByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKTsgfSxcbiAgICAgICAgVzogZnVuY3Rpb24gKGRhdGVPYmosIHdlZWtOdW0sIGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSArIGxvY2FsZS5maXJzdERheU9mV2Vlayk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKGRhdGVPYmosIHllYXIpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIocGFyc2VGbG9hdCh5ZWFyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFo6IGZ1bmN0aW9uIChfLCBJU09EYXRlKSB7IHJldHVybiBuZXcgRGF0ZShJU09EYXRlKTsgfSxcbiAgICAgICAgZDogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgICAgICB9LFxuICAgICAgICBpOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXRNaW51dGVzKHBhcnNlRmxvYXQobWludXRlcykpO1xuICAgICAgICB9LFxuICAgICAgICBqOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbDogZG9Ob3RoaW5nLFxuICAgICAgICBtOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgbjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHU6IGZ1bmN0aW9uIChfLCB1bml4TWlsbFNlY29uZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhNaWxsU2Vjb25kcykpO1xuICAgICAgICB9LFxuICAgICAgICB3OiBkb05vdGhpbmcsXG4gICAgICAgIHk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHRva2VuUmVnZXggPSB7XG4gICAgICAgIEQ6IFwiKFxcXFx3KylcIixcbiAgICAgICAgRjogXCIoXFxcXHcrKVwiLFxuICAgICAgICBHOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBIOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBKOiBcIihcXFxcZFxcXFxkfFxcXFxkKVxcXFx3K1wiLFxuICAgICAgICBLOiBcIlwiLFxuICAgICAgICBNOiBcIihcXFxcdyspXCIsXG4gICAgICAgIFM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIFU6IFwiKC4rKVwiLFxuICAgICAgICBXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBZOiBcIihcXFxcZHs0fSlcIixcbiAgICAgICAgWjogXCIoLispXCIsXG4gICAgICAgIGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIGg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIGk6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIGw6IFwiKFxcXFx3KylcIixcbiAgICAgICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgbjogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgczogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgdTogXCIoLispXCIsXG4gICAgICAgIHc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIHk6IFwiKFxcXFxkezJ9KVwiXG4gICAgfTtcbiAgICB2YXIgZm9ybWF0cyA9IHtcbiAgICAgICAgLy8gZ2V0IHRoZSBkYXRlIGluIFVUQ1xuICAgICAgICBaOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpOyB9LFxuICAgICAgICAvLyB3ZWVrZGF5IG5hbWUsIHNob3J0LCBlLmcuIFRodVxuICAgICAgICBEOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLnNob3J0aGFuZFtmb3JtYXRzLncoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKV07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZ1bGwgbW9udGggbmFtZSBlLmcuIEphbnVhcnlcbiAgICAgICAgRjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZm9ybWF0cy5uKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykgLSAxLCBmYWxzZSwgbG9jYWxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFkZGVkIGhvdXIgMS0xMlxuICAgICAgICBHOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFkKGZvcm1hdHMuaChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gaG91cnMgd2l0aCBsZWFkaW5nIHplcm8gZS5nLiAwM1xuICAgICAgICBIOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7IH0sXG4gICAgICAgIC8vIGRheSAoMS0zMCkgd2l0aCBvcmRpbmFsIHN1ZmZpeCBlLmcuIDFzdCwgMm5kXG4gICAgICAgIEo6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUub3JkaW5hbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgICAgIDogZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFNL1BNXG4gICAgICAgIEs6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHsgcmV0dXJuIGxvY2FsZS5hbVBNW2ludChkYXRlLmdldEhvdXJzKCkgPiAxMSldOyB9LFxuICAgICAgICAvLyBzaG9ydGhhbmQgbW9udGggZS5nLiBKYW4sIFNlcCwgT2N0LCBldGNcbiAgICAgICAgTTogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZGF0ZS5nZXRNb250aCgpLCB0cnVlLCBsb2NhbGUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZWNvbmRzIDAwLTU5XG4gICAgICAgIFM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpOyB9LFxuICAgICAgICAvLyB1bml4IHRpbWVzdGFtcFxuICAgICAgICBVOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwOyB9LFxuICAgICAgICBXOiBmdW5jdGlvbiAoZGF0ZSwgXywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZ2V0V2VlayhkYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZnVsbCB5ZWFyIGUuZy4gMjAxNlxuICAgICAgICBZOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpOyB9LFxuICAgICAgICAvLyBkYXkgaW4gbW9udGgsIHBhZGRlZCAoMDEtMzApXG4gICAgICAgIGQ6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpOyB9LFxuICAgICAgICAvLyBob3VyIGZyb20gMS0xMiAoYW0vcG0pXG4gICAgICAgIGg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyKTsgfSxcbiAgICAgICAgLy8gbWludXRlcywgcGFkZGVkIHdpdGggbGVhZGluZyB6ZXJvIGUuZy4gMDlcbiAgICAgICAgaTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7IH0sXG4gICAgICAgIC8vIGRheSBpbiBtb250aCAoMS0zMClcbiAgICAgICAgajogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpOyB9LFxuICAgICAgICAvLyB3ZWVrZGF5IG5hbWUsIGZ1bGwsIGUuZy4gVGh1cnNkYXlcbiAgICAgICAgbDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5sb25naGFuZFtkYXRlLmdldERheSgpXTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFkZGVkIG1vbnRoIG51bWJlciAoMDEtMTIpXG4gICAgICAgIG06IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7IH0sXG4gICAgICAgIC8vIHRoZSBtb250aCBudW1iZXIgKDEtMTIpXG4gICAgICAgIG46IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxOyB9LFxuICAgICAgICAvLyBzZWNvbmRzIDAtNTlcbiAgICAgICAgczogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpOyB9LFxuICAgICAgICAvLyBVbml4IE1pbGxpc2Vjb25kc1xuICAgICAgICB1OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7IH0sXG4gICAgICAgIC8vIG51bWJlciBvZiB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgIHc6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERheSgpOyB9LFxuICAgICAgICAvLyBsYXN0IHR3byBkaWdpdHMgb2YgeWVhciBlLmcuIDE2IGZvciAyMDE2XG4gICAgICAgIHk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7IH1cbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZURhdGVGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2EuY29uZmlnLCBjb25maWcgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdHMgOiBfYiwgX2MgPSBfYS5sMTBuLCBsMTBuID0gX2MgPT09IHZvaWQgMCA/IGVuZ2xpc2ggOiBfYztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlT2JqLCBmcm10LCBvdmVycmlkZUxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IG92ZXJyaWRlTG9jYWxlIHx8IGwxMG47XG4gICAgICAgICAgICBpZiAoY29uZmlnLmZvcm1hdERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcuZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10LCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZybXRcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjLCBpLCBhcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIlxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdHNbY10oZGF0ZU9iaiwgbG9jYWxlLCBjb25maWcpXG4gICAgICAgICAgICAgICAgICAgIDogYyAhPT0gXCJcXFxcXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBjcmVhdGVEYXRlUGFyc2VyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLmNvbmZpZywgY29uZmlnID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzIDogX2IsIF9jID0gX2EubDEwbiwgbDEwbiA9IF9jID09PSB2b2lkIDAgPyBlbmdsaXNoIDogX2M7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgZ2l2ZW5Gb3JtYXQsIHRpbWVsZXNzLCBjdXN0b21Mb2NhbGUpIHtcbiAgICAgICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gY3VzdG9tTG9jYWxlIHx8IGwxMG47XG4gICAgICAgICAgICB2YXIgcGFyc2VkRGF0ZTtcbiAgICAgICAgICAgIHZhciBkYXRlT3JpZyA9IGRhdGU7XG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZGF0ZS50b0ZpeGVkICE9PSB1bmRlZmluZWQgLy8gdGltZXN0YW1wXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgY29weVxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gZGF0ZSBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0ID0gZ2l2ZW5Gb3JtYXQgfHwgKGNvbmZpZyB8fCBkZWZhdWx0cykuZGF0ZUZvcm1hdDtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVzdHIgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgvWiQvLnRlc3QoZGF0ZXN0cikgfHxcbiAgICAgICAgICAgICAgICAgICAgL0dNVCQvLnRlc3QoZGF0ZXN0cikgLy8gZGF0ZXN0cmluZ3Mgdy8gdGltZXpvbmVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25maWcgJiYgY29uZmlnLnBhcnNlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IGNvbmZpZy5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAhY29uZmlnIHx8ICFjb25maWcubm9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkID0gdm9pZCAwLCBvcHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1hdGNoSW5kZXggPSAwLCByZWdleFN0ciA9IFwiXCI7IGkgPCBmb3JtYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbl8xID0gZm9ybWF0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmFja1NsYXNoID0gdG9rZW5fMSA9PT0gXCJcXFxcXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZvcm1hdFtpIC0gMV0gPT09IFwiXFxcXFwiIHx8IGlzQmFja1NsYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuUmVnZXhbdG9rZW5fMV0gJiYgIWVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleFN0ciArPSB0b2tlblJlZ2V4W3Rva2VuXzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpLmV4ZWMoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIChtYXRjaGVkID0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuXzEgIT09IFwiWVwiID8gXCJwdXNoXCIgOiBcInVuc2hpZnRcIl0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJldkZvcm1hdFt0b2tlbl8xXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gXCIuXCI7IC8vIGRvbid0IHJlYWxseSBjYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBfYS5mbiwgdmFsID0gX2EudmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF0ZSA9IGZuKHBhcnNlZERhdGUsIHZhbCwgbG9jYWxlKSB8fCBwYXJzZWREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBtYXRjaGVkID8gcGFyc2VkRGF0ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBwcm92aWRlZDogXCIgKyBkYXRlT3JpZykpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZWxlc3MgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWREYXRlO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBpbiBkYXRlcywgbWVhc3VyZWQgaW4gbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wYXJlRGF0ZXMoZGF0ZTEsIGRhdGUyLCB0aW1lbGVzcykge1xuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIChuZXcgRGF0ZShkYXRlMS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApIC1cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShkYXRlMi5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgIH1cbiAgICB2YXIgaXNCZXR3ZWVuID0gZnVuY3Rpb24gKHRzLCB0czEsIHRzMikge1xuICAgICAgICByZXR1cm4gdHMgPiBNYXRoLm1pbih0czEsIHRzMikgJiYgdHMgPCBNYXRoLm1heCh0czEsIHRzMik7XG4gICAgfTtcbiAgICB2YXIgZHVyYXRpb24gPSB7XG4gICAgICAgIERBWTogODY0MDAwMDBcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgYXJnc18xID0gYXJnczsgX2EgPCBhcmdzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3NfMVtfYV07XG4gICAgICAgICAgICAgICAgX2xvb3BfMShzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgREVCT1VOQ0VEX0NIQU5HRV9NUyA9IDMwMDtcbiAgICBmdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xuICAgICAgICB2YXIgc2VsZiA9IHtcbiAgICAgICAgICAgIGNvbmZpZzogX19hc3NpZ24oe30sIGRlZmF1bHRzLCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyksXG4gICAgICAgICAgICBsMTBuOiBlbmdsaXNoXG4gICAgICAgIH07XG4gICAgICAgIHNlbGYucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7IGNvbmZpZzogc2VsZi5jb25maWcsIGwxMG46IHNlbGYubDEwbiB9KTtcbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgc2VsZi5wbHVnaW5FbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLmxvYWRlZFBsdWdpbnMgPSBbXTtcbiAgICAgICAgc2VsZi5fYmluZCA9IGJpbmQ7XG4gICAgICAgIHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xuICAgICAgICBzZWxmLl9wb3NpdGlvbkNhbGVuZGFyID0gcG9zaXRpb25DYWxlbmRhcjtcbiAgICAgICAgc2VsZi5jaGFuZ2VNb250aCA9IGNoYW5nZU1vbnRoO1xuICAgICAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xuICAgICAgICBzZWxmLmNsZWFyID0gY2xlYXI7XG4gICAgICAgIHNlbGYuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgICAgIHNlbGYuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgICAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuICAgICAgICBzZWxmLm9wZW4gPSBvcGVuO1xuICAgICAgICBzZWxmLnJlZHJhdyA9IHJlZHJhdztcbiAgICAgICAgc2VsZi5zZXQgPSBzZXQ7XG4gICAgICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XG4gICAgICAgIHNlbGYudG9nZ2xlID0gdG9nZ2xlO1xuICAgICAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcbiAgICAgICAgICAgIHNlbGYudXRpbHMgPSB7XG4gICAgICAgICAgICAgICAgZ2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uIChtb250aCwgeXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSBzZWxmLmN1cnJlbnRNb250aDsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeXIgPT09IHZvaWQgMCkgeyB5ciA9IHNlbGYuY3VycmVudFllYXI7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSAxICYmICgoeXIgJSA0ID09PSAwICYmIHlyICUgMTAwICE9PSAwKSB8fCB5ciAlIDQwMCA9PT0gMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudCA9IHNlbGYuaW5wdXQgPSBlbGVtZW50O1xuICAgICAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHBhcnNlQ29uZmlnKCk7XG4gICAgICAgICAgICBzZXR1cExvY2FsZSgpO1xuICAgICAgICAgICAgc2V0dXBJbnB1dHMoKTtcbiAgICAgICAgICAgIHNldHVwRGF0ZXMoKTtcbiAgICAgICAgICAgIHNldHVwSGVscGVyRnVuY3Rpb25zKCk7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXG4gICAgICAgICAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHwgc2VsZi5jb25maWcubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDYWxlbmRhcldpZHRoKCk7XG4gICAgICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXI7XG4gICAgICAgICAgICB2YXIgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgICAgLyogVE9ETzogaW52ZXN0aWdhdGUgdGhpcyBmdXJ0aGVyXG4gICAgICAgIFxuICAgICAgICAgICAgICBDdXJyZW50bHksIHRoZXJlIGlzIHdlaXJkIHBvc2l0aW9uaW5nIGJlaGF2aW9yIGluIHNhZmFyaSBjYXVzaW5nIHBhZ2VzXG4gICAgICAgICAgICAgIHRvIHNjcm9sbCB1cC4gaHR0cHM6Ly9naXRodWIuY29tL2NobWxuL2ZsYXRwaWNrci9pc3N1ZXMvNTYzXG4gICAgICAgIFxuICAgICAgICAgICAgICBIb3dldmVyLCBtb3N0IGJyb3dzZXJzIGFyZSBub3QgU2FmYXJpIGFuZCBwb3NpdGlvbmluZyBpcyBleHBlbnNpdmUgd2hlbiB1c2VkXG4gICAgICAgICAgICAgIGluIHNjYWxlLiBodHRwczovL2dpdGh1Yi5jb20vY2htbG4vZmxhdHBpY2tyL2lzc3Vlcy8xMDk2XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlICYmIGlzU2FmYXJpKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25SZWFkeVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBiaW5kVG9JbnN0YW5jZShmbikge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmJpbmQoc2VsZik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJXaWR0aCgpIHtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBzZWxmLmNvbmZpZztcbiAgICAgICAgICAgIGlmIChjb25maWcud2Vla051bWJlcnMgPT09IGZhbHNlICYmIGNvbmZpZy5zaG93TW9udGhzID09PSAxKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy5ub0NhbGVuZGFyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5c1dpZHRoID0gKHNlbGYuZGF5cy5vZmZzZXRXaWR0aCArIDEpICogY29uZmlnLnNob3dNb250aHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuc3R5bGUud2lkdGggPSBkYXlzV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLndpZHRoID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzV2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYud2Vla1dyYXBwZXIub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidmlzaWJpbGl0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoYW5kbGVyIGZvciBhbGwgZXZlbnRzIHRhcmdldGluZyB0aGUgdGltZSBpbnB1dHNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXREZWZhdWx0VGltZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgIT09IFwiYmx1clwiKSB7XG4gICAgICAgICAgICAgICAgdGltZVdyYXBwZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldlZhbHVlID0gc2VsZi5faW5wdXQudmFsdWU7XG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5faW5wdXQudmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xuICAgICAgICAgICAgcmV0dXJuIChob3VyICUgMTIpICsgMTIgKiBpbnQoYW1QTSA9PT0gc2VsZi5sMTBuLmFtUE1bMV0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xuICAgICAgICAgICAgc3dpdGNoIChob3VyICUgMjQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bmNzIHRoZSBzZWxlY3RlZCBkYXRlIG9iamVjdCB0aW1lIHdpdGggdXNlcidzIHRpbWUgaW5wdXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbUlucHV0cygpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGhvdXJzID0gKHBhcnNlSW50KHNlbGYuaG91ckVsZW1lbnQudmFsdWUuc2xpY2UoLTIpLCAxMCkgfHwgMCkgJSAyNCwgbWludXRlcyA9IChwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwLCBzZWNvbmRzID0gc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbWl0TWluSG91cnMgPSBzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSwgdHJ1ZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAwKTtcbiAgICAgICAgICAgIHZhciBsaW1pdE1heEhvdXJzID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1heERhdGUsIHRydWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgMCk7XG4gICAgICAgICAgICBpZiAobGltaXRNYXhIb3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtYXhUaW1lID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4VGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4VGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1heFRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1pbnV0ZXMsIG1heFRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWF4VGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1pbihzZWNvbmRzLCBtYXhUaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGltaXRNaW5Ib3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtaW5UaW1lID0gc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluVGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3VycywgbWluVGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1pblRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWF4KG1pbnV0ZXMsIG1pblRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWluVGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1heChzZWNvbmRzLCBtaW5UaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bmNzIHRpbWUgaW5wdXQgdmFsdWVzIHdpdGggYSBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZGF0ZU9iaiB8fCBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iajtcbiAgICAgICAgICAgIGlmIChkYXRlKVxuICAgICAgICAgICAgICAgIHNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0SG91cnMoKSB7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBzZWxmLmNvbmZpZy5kZWZhdWx0SG91cjtcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gc2VsZi5jb25maWcuZGVmYXVsdE1pbnV0ZTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRzID0gc2VsZi5jb25maWcuZGVmYXVsdFNlY29uZHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pbkhyID0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIHZhciBtaW5NaW51dGVzID0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3VycywgbWluSHIpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWluSHIpXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1heChtaW5NaW51dGVzLCBtaW51dGVzKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1pbkhyICYmIG1pbnV0ZXMgPT09IG1pbk1pbnV0ZXMpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4SHIgPSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG1heE1pbnV0ZXMgPSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBtYXhIcik7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzID09PSBtYXhIcilcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1heE1pbnV0ZXMsIG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWF4SHIgJiYgbWludXRlcyA9PT0gbWF4TWludXRlcylcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBob3VycywgbWludXRlcywgYW5kIG9wdGlvbmFsbHkgc2Vjb25kc1xuICAgICAgICAgKiBvZiB0aGUgbGF0ZXN0IHNlbGVjdGVkIGRhdGUgb2JqZWN0IGFuZCB0aGVcbiAgICAgICAgICogY29ycmVzcG9uZGluZyB0aW1lIGlucHV0c1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gaG91cnMgdGhlIGhvdXIuIHdoZXRoZXIgaXRzIG1pbGl0YXJ5XG4gICAgICAgICAqICAgICAgICAgICAgICAgICBvciBhbS1wbSBnZXRzIGluZmVycmVkIGZyb20gY29uZmlnXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtaW51dGVzIHRoZSBtaW51dGVzXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIHRoZSBzZWNvbmRzIChvcHRpb25hbClcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzICUgMjQsIG1pbnV0ZXMsIHNlY29uZHMgfHwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuaG91ckVsZW1lbnQgfHwgIXNlbGYubWludXRlRWxlbWVudCB8fCBzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRoclxuICAgICAgICAgICAgICAgID8gKCgxMiArIGhvdXJzKSAlIDEyKSArIDEyICogaW50KGhvdXJzICUgMTIgPT09IDApXG4gICAgICAgICAgICAgICAgOiBob3Vycyk7XG4gICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1baW50KGhvdXJzID49IDEyKV07XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlY29uZHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIHRoZSB5ZWFyIGlucHV0IGFuZCBpbmNyZW1lbnRpbmcgZXZlbnRzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IHRoZSBrZXl1cCBvciBpbmNyZW1lbnQgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkgKyAoZXZlbnQuZGVsdGEgfHwgMCk7XG4gICAgICAgICAgICBpZiAoeWVhciAvIDEwMDAgPiAxIHx8XG4gICAgICAgICAgICAgICAgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRXNzZW50aWFsbHkgYWRkRXZlbnRMaXN0ZW5lciArIHRyYWNraW5nXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGRFdmVudExpc3RlbmVyIHRvXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCB0aGUgZXZlbnQgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIHRoZSBldmVudCBoYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIGJpbmQoZWxlbWVudCwgZXYsIGhhbmRsZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtb3VzZWRvd24gaGFuZGxlciB3aGljaCBtaW1pY3MgY2xpY2suXG4gICAgICAgICAqIE1pbmltaXplcyBsYXRlbmN5LCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgZm9yIG1vdXNldXAgaW4gbW9zdCBjYXNlcy5cbiAgICAgICAgICogQWxzbywgYXZvaWRzIGhhbmRsaW5nIHJpZ2h0IGNsaWNrcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciB0aGUgZXZlbnQgaGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gb25DbGljayhoYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIGV2dC53aGljaCA9PT0gMSAmJiBoYW5kbGVyKGV2dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2UoKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhbGwgdGhlIG5lY2Vzc2FyeSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcud3JhcCkge1xuICAgICAgICAgICAgICAgIFtcIm9wZW5cIiwgXCJjbG9zZVwiLCBcInRvZ2dsZVwiLCBcImNsZWFyXCJdLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIgKyBldnQgKyBcIl1cIiksIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQoZWwsIFwiY2xpY2tcIiwgc2VsZltldnRdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHNldHVwTW9iaWxlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKG9uUmVzaXplLCA1MCk7XG4gICAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZSh0cmlnZ2VyQ2hhbmdlLCBERUJPVU5DRURfQ0hBTkdFX01TKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgIS9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYylcbiAgICAgICAgICAgICAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2VkUmVzaXplKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cub250b3VjaHN0YXJ0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwidG91Y2hzdGFydFwiLCBkb2N1bWVudENsaWNrKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJtb3VzZWRvd25cIiwgb25DbGljayhkb2N1bWVudENsaWNrKSk7XG4gICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJmb2N1c1wiLCBkb2N1bWVudENsaWNrLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGYub3BlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKG9uTW9udGhOYXZDbGljaykpO1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wia2V5dXBcIiwgXCJpbmNyZW1lbnRcIl0sIG9uWWVhcklucHV0KTtcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxlY3REYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxUZXh0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcImluY3JlbWVudFwiXSwgdXBkYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiYmx1clwiLCB1cGRhdGVUaW1lLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2sodGltZUluY3JlbWVudCkpO1xuICAgICAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuc2Vjb25kRWxlbWVudC5zZWxlY3QoKTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5hbVBNLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGNhbGVuZGFyIHZpZXcgdG8gYSBwYXJ0aWN1bGFyIGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7RGF0ZX0ganVtcERhdGUgdGhlIGRhdGUgdG8gc2V0IHRoZSB2aWV3IHRvXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdHJpZ2dlckNoYW5nZSBpZiBjaGFuZ2UgZXZlbnRzIHNob3VsZCBiZSB0cmlnZ2VyZWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGp1bXBUb0RhdGUoanVtcERhdGUsIHRyaWdnZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBqdW1wVG8gPSBqdW1wRGF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBzZWxmLnBhcnNlRGF0ZShqdW1wRGF0ZSlcbiAgICAgICAgICAgICAgICA6IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8XG4gICAgICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jb25maWcubWF4RGF0ZSA8IHNlbGYubm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdyk7XG4gICAgICAgICAgICB2YXIgb2xkWWVhciA9IHNlbGYuY3VycmVudFllYXI7XG4gICAgICAgICAgICB2YXIgb2xkTW9udGggPSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGp1bXBUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBqdW1wVG8uZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgZS5tZXNzYWdlID0gXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvO1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmIHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciAhPT0gb2xkWWVhciB8fCBzZWxmLmN1cnJlbnRNb250aCAhPT0gb2xkTW9udGgpKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1cC9kb3duIGFycm93IGhhbmRsZXIgZm9yIHRpbWUgaW5wdXRzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiB0aW1lSW5jcmVtZW50KGUpIHtcbiAgICAgICAgICAgIGlmICh+ZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSlcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dChlLCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5jcmVtZW50cy9kZWNyZW1lbnRzIHRoZSB2YWx1ZSBvZiBpbnB1dCBhc3NvY2ktXG4gICAgICAgICAqIGF0ZWQgd2l0aCB0aGUgdXAvZG93biBhcnJvdyBieSBkaXNwYXRjaGluZyBhblxuICAgICAgICAgKiBcImluY3JlbWVudFwiIGV2ZW50IG9uIHRoZSBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZSB0aGUgY2xpY2sgZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhIHRoZSBkaWZmICh1c3VhbGx5IDEgb3IgLTEpXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaW5wdXRFbGVtIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGlucHV0RWxlbSB8fFxuICAgICAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBjcmVhdGVFdmVudChcImluY3JlbWVudFwiKTtcbiAgICAgICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkTW9udGhOYXYoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGJ1aWxkV2Vla3MoKSwgd2Vla1dyYXBwZXIgPSBfYS53ZWVrV3JhcHBlciwgd2Vla051bWJlcnMgPSBfYS53ZWVrTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMgPSB3ZWVrTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53ZWVrV3JhcHBlciA9IHdlZWtXcmFwcGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkV2Vla2RheXMoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZGF5c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUgPT09IHRydWUpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJtdWx0aU1vbnRoXCIsIHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxKTtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSB8fCBzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXN0b21BcHBlbmQgJiYgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgc2VsZi5faW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBzZWxmLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYXBwZW5kVG9cbiAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRGF5KGNsYXNzTmFtZSwgZGF0ZSwgZGF5TnVtYmVyLCBpKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSwgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xuICAgICAgICAgICAgZGF5RWxlbWVudC4kaSA9IGk7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSA9IGRheUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGVJc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJlbmRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdLCB0cnVlKSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcIm5leHRNb250aERheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxICYmXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmXG4gICAgICAgICAgICAgICAgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci1kYXknPlwiICsgc2VsZi5jb25maWcuZ2V0V2VlayhkYXRlKSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGF5Q3JlYXRlXCIsIGRheUVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9jdXNPbkRheUVsZW0odGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRGaXJzdEF2YWlsYWJsZURheShkZWx0YSkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0TW9udGggPSBkZWx0YSA+IDAgPyAwIDogc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBtID0gc3RhcnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBkZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGRlbHRhID4gMCA/IDAgOiBtb250aC5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHZhciBlbmRJbmRleCA9IGRlbHRhID4gMCA/IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCA6IC0xO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpICE9IGVuZEluZGV4OyBpICs9IGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJiBpc0VuYWJsZWQoYy5kYXRlT2JqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dEF2YWlsYWJsZURheShjdXJyZW50LCBkZWx0YSkge1xuICAgICAgICAgICAgdmFyIGdpdmVuTW9udGggPSBjdXJyZW50LmNsYXNzTmFtZS5pbmRleE9mKFwiTW9udGhcIikgPT09IC0xXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50LmRhdGVPYmouZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgICAgICB2YXIgbG9vcERlbHRhID0gZGVsdGEgPiAwID8gMSA6IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgbSA9IGdpdmVuTW9udGggLSBzZWxmLmN1cnJlbnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGggPT09IG1cbiAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50LiRpICsgZGVsdGFcbiAgICAgICAgICAgICAgICAgICAgOiBkZWx0YSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIHZhciBudW1Nb250aERheXMgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMCAmJiBpIDwgbnVtTW9udGhEYXlzICYmIGkgIT0gKGRlbHRhID4gMCA/IG51bU1vbnRoRGF5cyA6IC0xKTsgaSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBtb250aC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQoYy5kYXRlT2JqKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VycmVudC4kaSAtIGkpID49IE1hdGguYWJzKGRlbHRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c09uRGF5RWxlbShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGxvb3BEZWx0YSk7XG4gICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KGxvb3BEZWx0YSksIDApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmb2N1c09uRGF5KGN1cnJlbnQsIG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGRheUZvY3VzZWQgPSBpc0luVmlldyhkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0RWxlbSA9IGN1cnJlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgICAgIDogZGF5Rm9jdXNlZFxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnNlbGVjdGVkRGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlRWxlbVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnRvZGF5RGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnRvZGF5RGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnRvZGF5RGF0ZUVsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdldEZpcnN0QXZhaWxhYmxlRGF5KG9mZnNldCA+IDAgPyAxIDogLTEpO1xuICAgICAgICAgICAgaWYgKHN0YXJ0RWxlbSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKCFkYXlGb2N1c2VkKVxuICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c09uRGF5RWxlbShzdGFydEVsZW0pO1xuICAgICAgICAgICAgZ2V0TmV4dEF2YWlsYWJsZURheShzdGFydEVsZW0sIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRNb250aERheXMoeWVhciwgbW9udGgpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdE9mTW9udGggPSAobmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpIC0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrICsgNykgJSA3O1xuICAgICAgICAgICAgdmFyIHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChtb250aCAtIDEgKyAxMikgJSAxMik7XG4gICAgICAgICAgICB2YXIgZGF5c0luTW9udGggPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKG1vbnRoKSwgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGlzTXVsdGlNb250aCA9IHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxLCBwcmV2TW9udGhEYXlDbGFzcyA9IGlzTXVsdGlNb250aCA/IFwicHJldk1vbnRoRGF5IGhpZGRlblwiIDogXCJwcmV2TW9udGhEYXlcIiwgbmV4dE1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcIm5leHRNb250aERheSBoaWRkZW5cIiA6IFwibmV4dE1vbnRoRGF5XCI7XG4gICAgICAgICAgICB2YXIgZGF5TnVtYmVyID0gcHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsIGRheUluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIHByZXBlbmQgZGF5cyBmcm9tIHRoZSBlbmRpbmcgb2YgcHJldmlvdXMgbW9udGhcbiAgICAgICAgICAgIGZvciAoOyBkYXlOdW1iZXIgPD0gcHJldk1vbnRoRGF5czsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShwcmV2TW9udGhEYXlDbGFzcywgbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGFydCBhdCAxIHNpbmNlIHRoZXJlIGlzIG5vIDB0aCBkYXlcbiAgICAgICAgICAgIGZvciAoZGF5TnVtYmVyID0gMTsgZGF5TnVtYmVyIDw9IGRheXNJbk1vbnRoOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiXCIsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgZGF5cyBmcm9tIHRoZSBuZXh0IG1vbnRoXG4gICAgICAgICAgICBmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aCAmJlxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxIHx8IGRheUluZGV4ICUgNyAhPT0gMCk7IGRheU51bSsrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkobmV4dE1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3VwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgICAgIHZhciBkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGF5Q29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRheUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZERheXMoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi5kYXlzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIFRPRE86IHdlZWsgbnVtYmVycyBmb3IgZWFjaCBtb250aFxuICAgICAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMpXG4gICAgICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla051bWJlcnMpO1xuICAgICAgICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnNob3dNb250aHM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgICAgIGQuc2V0TW9udGgoc2VsZi5jdXJyZW50TW9udGggKyBpKTtcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGJ1aWxkTW9udGhEYXlzKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRNb250aFN3aXRjaCgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlICE9PSBcImRyb3Bkb3duXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHNob3VsZEJ1aWxkTW9udGggPSBmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgICAgICBtb250aCA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhKHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkQnVpbGRNb250aChpKSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcImZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoXCIpO1xuICAgICAgICAgICAgICAgIG1vbnRoLnZhbHVlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgaSkuZ2V0TW9udGgoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIG1vbnRoLnRleHRDb250ZW50ID0gbW9udGhUb1N0cihpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbik7XG4gICAgICAgICAgICAgICAgbW9udGgudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGguc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZE1vbnRoKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XG4gICAgICAgICAgICB2YXIgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB2YXIgbW9udGhFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICBtb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1ci1tb250aFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwiZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzXCIpO1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lciwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRNb250aCA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKHNlbGVjdGVkTW9udGggLSBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIG1vbnRoRWxlbWVudCA9IHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiLCB7IHRhYmluZGV4OiBcIi0xXCIgfSk7XG4gICAgICAgICAgICB2YXIgeWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIHllYXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLnllYXJBcmlhTGFiZWwpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHllYXJFbGVtZW50LmRpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXJyZW50TW9udGggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XG4gICAgICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQobW9udGhFbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5hcHBlbmRDaGlsZCh5ZWFySW5wdXQpO1xuICAgICAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChjdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoTmF2RnJhZ21lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudDogeWVhckVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbW9udGhFbGVtZW50OiBtb250aEVsZW1lbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRNb250aHMoKSB7XG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi5tb250aE5hdik7XG4gICAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYucHJldk1vbnRoTmF2KTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIG0gPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBtLS07KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gYnVpbGRNb250aCgpO1xuICAgICAgICAgICAgICAgIHNlbGYueWVhckVsZW1lbnRzLnB1c2gobW9udGgueWVhckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50cy5wdXNoKG1vbnRoLm1vbnRoRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aC5jb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChzZWxmLm5leHRNb250aE5hdik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoc1wiKTtcbiAgICAgICAgICAgIHNlbGYueWVhckVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIHNlbGYucHJldk1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItcHJldi1tb250aFwiKTtcbiAgICAgICAgICAgIHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcbiAgICAgICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcbiAgICAgICAgICAgIHNlbGYubmV4dE1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLm5leHRBcnJvdztcbiAgICAgICAgICAgIGJ1aWxkTW9udGhzKCk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3c7IH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyAhPT0gYm9vbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5wcmV2TW9udGhOYXYsIFwiZmxhdHBpY2tyLWRpc2FibGVkXCIsIGJvb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyA9IGJvb2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdzsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLm5leHRNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9faGlkZU5leHRNb250aEFycm93ID0gYm9vbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSBzZWxmLnllYXJFbGVtZW50c1swXTtcbiAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1vbnRoTmF2O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1RpbWVcIik7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhcilcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xuICAgICAgICAgICAgdmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIiwge1xuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBzZWxmLmwxMG4uaG91ckFyaWFMYWJlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ID0gaG91cklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICB2YXIgbWludXRlSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1taW51dGVcIiwge1xuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBzZWxmLmwxMG4ubWludXRlQXJpYUxhYmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCA9IG1pbnV0ZUlucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5kZWZhdWx0SG91clxuICAgICAgICAgICAgICAgICAgICA6IG1pbGl0YXJ5MmFtcG0oc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpKTtcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlKTtcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIwXCIgOiBcIjFcIik7XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCIpO1xuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cklucHV0KTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZUlucHV0KTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy50aW1lXzI0aHIpXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzZWNvbmRJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLXNlY29uZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLm1pbnV0ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjU5XCIpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBzZWxmLmFtUE0gaWYgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1hbS1wbVwiLCBzZWxmLmwxMG4uYW1QTVtpbnQoKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50aXRsZSA9IHNlbGYubDEwbi50b2dnbGVUaXRsZTtcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla2RheUNvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVXZWVrZGF5cygpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYud2Vla2RheUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVXZWVrZGF5cygpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZC5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCAmJiBmaXJzdERheU9mV2VlayA8IHdlZWtkYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlzID0gd2Vla2RheXMuc3BsaWNlKGZpcnN0RGF5T2ZXZWVrLCB3ZWVrZGF5cy5sZW5ndGgpLmNvbmNhdCh3ZWVrZGF5cy5zcGxpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci13ZWVrZGF5Jz5cXG4gICAgICAgIFwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlwiKSArIFwiXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcbiAgICAgICAgICAgIHZhciB3ZWVrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIik7XG4gICAgICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XG4gICAgICAgICAgICB2YXIgd2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xuICAgICAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3ZWVrV3JhcHBlcjogd2Vla1dyYXBwZXIsXG4gICAgICAgICAgICAgICAgd2Vla051bWJlcnM6IHdlZWtOdW1iZXJzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZU1vbnRoKHZhbHVlLCBpc09mZnNldCkge1xuICAgICAgICAgICAgaWYgKGlzT2Zmc2V0ID09PSB2b2lkIDApIHsgaXNPZmZzZXQgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBpc09mZnNldCA/IHZhbHVlIDogdmFsdWUgLSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgICAgIGlmICgoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XG4gICAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoID4gMTEgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCwgdG9Jbml0aWFsKSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50ID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdm9pZCAwKSB7IHRvSW5pdGlhbCA9IHRydWU7IH1cbiAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2hvd1RpbWVJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzZXREZWZhdWx0SG91cnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KVxuICAgICAgICAgICAgICAgIC8vIHRyaWdnZXJDaGFuZ2VFdmVudCBpcyB0cnVlIChkZWZhdWx0KSBvciBhbiBFdmVudFxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX2lucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRlc3Ryb3lcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5faGFuZGxlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBzZWxmLl9oYW5kbGVyc1tpXTtcbiAgICAgICAgICAgICAgICBoLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoLmV2ZW50LCBoLmhhbmRsZXIsIGgub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5tb2JpbGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIubGFzdENoaWxkICYmIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuYWx0SW5wdXQpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmFsdElucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBzZWxmLmlucHV0Ll90eXBlO1xuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiX3Nob3dUaW1lSW5wdXRcIixcbiAgICAgICAgICAgICAgICBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFxuICAgICAgICAgICAgICAgIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgICAgIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgICAgIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgICAgICBcIl9faGlkZVByZXZNb250aEFycm93XCIsXG4gICAgICAgICAgICAgICAgXCJpc01vYmlsZVwiLFxuICAgICAgICAgICAgICAgIFwiaXNPcGVuXCIsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXG4gICAgICAgICAgICAgICAgXCJtaW5EYXRlSGFzVGltZVwiLFxuICAgICAgICAgICAgICAgIFwibWF4RGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgICAgICBcImRheXNcIixcbiAgICAgICAgICAgICAgICBcImRheXNDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBcIl9pbnB1dFwiLFxuICAgICAgICAgICAgICAgIFwiX3Bvc2l0aW9uRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgIFwiaW5uZXJDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBcInJDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBcIm1vbnRoTmF2XCIsXG4gICAgICAgICAgICAgICAgXCJ0b2RheURhdGVFbGVtXCIsXG4gICAgICAgICAgICAgICAgXCJjYWxlbmRhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIFwid2Vla2RheUNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIFwicHJldk1vbnRoTmF2XCIsXG4gICAgICAgICAgICAgICAgXCJuZXh0TW9udGhOYXZcIixcbiAgICAgICAgICAgICAgICBcIm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50TW9udGhFbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50WWVhckVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25DdXJyZW50TW9udGhcIixcbiAgICAgICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcbiAgICAgICAgICAgICAgICBcImNvbmZpZ1wiLFxuICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGZba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQ2FsZW5kYXJFbGVtKGVsZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlbGVtKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUYXJnZXRfMSA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgICAgIHZhciBpc0NhbGVuZGFyRWxlbWVudCA9IGlzQ2FsZW5kYXJFbGVtKGV2ZW50VGFyZ2V0XzEpO1xuICAgICAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZXZlbnRUYXJnZXRfMSA9PT0gc2VsZi5pbnB1dCB8fFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldF8xID09PSBzZWxmLmFsdElucHV0IHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldF8xKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZWIgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBlLnBhdGggaXMgbm90IHByZXNlbnQgaW4gYWxsIGJyb3dzZXJzLiBjaXJjdW12ZW50aW5nIHR5cGVjaGVja3NcbiAgICAgICAgICAgICAgICAgICAgKGUucGF0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wYXRoLmluZGV4T2YgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh+ZS5wYXRoLmluZGV4T2Yoc2VsZi5pbnB1dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9zdEZvY3VzID0gZS50eXBlID09PSBcImJsdXJcIlxuICAgICAgICAgICAgICAgICAgICA/IGlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVsYXRlZFRhcmdldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgOiAhaXNJbnB1dCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW0oZS5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNJZ25vcmVkID0gIXNlbGYuY29uZmlnLmlnbm9yZWRGb2N1c0VsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uY29udGFpbnMoZXZlbnRUYXJnZXRfMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGxvc3RGb2N1cyAmJiBpc0lnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcbiAgICAgICAgICAgIGlmICghbmV3WWVhciB8fFxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIG5ld1llYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHx8XG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiYgbmV3WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG5ld1llYXJOdW0gPSBuZXdZZWFyLCBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBuZXdZZWFyTnVtO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IG5ld1llYXJOdW0gfHwgc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1pbihzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWF4KHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTmV3WWVhcikge1xuICAgICAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZSwgdGltZWxlc3MpIHtcbiAgICAgICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdm9pZCAwKSB7IHRpbWVsZXNzID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGRhdGVUb0NoZWNrID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgdW5kZWZpbmVkLCB0aW1lbGVzcyk7IC8vIHRpbWVsZXNzXG4gICAgICAgICAgICBpZiAoKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWluRGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWluRGF0ZUhhc1RpbWUpIDwgMCkgfHxcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1heERhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1heERhdGVIYXNUaW1lKSA+IDApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoID09PSAwICYmIHNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKGRhdGVUb0NoZWNrID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgdmFyIGJvb2wgPSBzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoID4gMCwgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBkID0gdm9pZCAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkID0gYXJyYXlbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZChkYXRlVG9DaGVjaykgLy8gZGlzYWJsZWQgYnkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQgYnkgZGF0ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkIGJ5IGRhdGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBzZWxmLnBhcnNlRGF0ZShkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkICYmIHBhcnNlZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBib29sXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICFib29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZCBieSByYW5nZVxuICAgICAgICAgICAgICAgIHR5cGVvZiBkID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgZC5mcm9tICYmXG4gICAgICAgICAgICAgICAgICAgIGQudG8gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpID49IGQuZnJvbS5nZXRUaW1lKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpIDw9IGQudG8uZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhYm9vbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0luVmlldyhlbGVtKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuY29udGFpbnMoZWxlbSkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgICAgICAvLyBlLmtleSAgICAgICAgICAgICAgICAgICAgICBlLmtleUNvZGVcbiAgICAgICAgICAgIC8vIFwiQmFja3NwYWNlXCIgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAvLyBcIlRhYlwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOVxuICAgICAgICAgICAgLy8gXCJFbnRlclwiICAgICAgICAgICAgICAgICAgICAgICAgICAgMTNcbiAgICAgICAgICAgIC8vIFwiRXNjYXBlXCIgICAgIChJRSBcIkVzY1wiKSAgICAgICAgICAgMjdcbiAgICAgICAgICAgIC8vIFwiQXJyb3dMZWZ0XCIgIChJRSBcIkxlZnRcIikgICAgICAgICAgMzdcbiAgICAgICAgICAgIC8vIFwiQXJyb3dVcFwiICAgIChJRSBcIlVwXCIpICAgICAgICAgICAgMzhcbiAgICAgICAgICAgIC8vIFwiQXJyb3dSaWdodFwiIChJRSBcIlJpZ2h0XCIpICAgICAgICAgMzlcbiAgICAgICAgICAgIC8vIFwiQXJyb3dEb3duXCIgIChJRSBcIkRvd25cIikgICAgICAgICAgNDBcbiAgICAgICAgICAgIC8vIFwiRGVsZXRlXCIgICAgIChJRSBcIkRlbFwiKSAgICAgICAgICAgNDZcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICAgICAgdmFyIGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xuICAgICAgICAgICAgdmFyIGFsbG93S2V5ZG93biA9IHNlbGYuaXNPcGVuICYmICghYWxsb3dJbnB1dCB8fCAhaXNJbnB1dCk7XG4gICAgICAgICAgICB2YXIgYWxsb3dJbmxpbmVLZXlkb3duID0gc2VsZi5jb25maWcuaW5saW5lICYmIGlzSW5wdXQgJiYgIWFsbG93SW5wdXQ7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBpc0lucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKHNlbGYuX2lucHV0LnZhbHVlLCB0cnVlLCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0NhbGVuZGFyRWxlbShlLnRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICBhbGxvd0tleWRvd24gfHxcbiAgICAgICAgICAgICAgICBhbGxvd0lubGluZUtleWRvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNUaW1lT2JqID0gISFzZWxmLnRpbWVDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdERhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzogLy8gZXNjYXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiYgIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiAhaXNJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbG93SW5wdXQgPT09IGZhbHNlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBpc0luVmlldyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZS5rZXlDb2RlID09PSAzOSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KHVuZGVmaW5lZCwgZGVsdGFfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbnRoKGRlbHRhXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShnZXRGaXJzdEF2YWlsYWJsZURheSgxKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmhvdXJFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5rZXlDb2RlID09PSA0MCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi5kYXlzQ29udGFpbmVyICYmIGUudGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQgPT09IHNlbGYuaW5wdXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVGltZU9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhICogNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5wbHVnaW5FbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlbGVtcy5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1zW2kgKyAoZS5zaGlmdEtleSA/IC0xIDogMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXQgfHwgc2VsZi5faW5wdXQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQgPT09IHNlbGYuYW1QTSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVswXS5jaGFyQXQoMCk6XG4gICAgICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzFdLmNoYXJBdCgwKTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzSW5wdXQgfHwgaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25LZXlEb3duXCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VPdmVyKGVsZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgICAgICAgKGVsZW0gJiZcbiAgICAgICAgICAgICAgICAgICAgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGhvdmVyRGF0ZSA9IGVsZW1cbiAgICAgICAgICAgICAgICA/IGVsZW0uZGF0ZU9iai5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICA6IHNlbGYuZGF5cy5maXJzdEVsZW1lbnRDaGlsZC5kYXRlT2JqLmdldFRpbWUoKSwgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHVuZGVmaW5lZCwgdHJ1ZSkuZ2V0VGltZSgpLCByYW5nZVN0YXJ0RGF0ZSA9IE1hdGgubWluKGhvdmVyRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIHJhbmdlRW5kRGF0ZSA9IE1hdGgubWF4KGhvdmVyRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB2YXIgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG1pblJhbmdlID0gMCwgbWF4UmFuZ2UgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgcmFuZ2VFbmREYXRlOyB0ICs9IGR1cmF0aW9uLkRBWSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNFbmFibGVkKG5ldyBEYXRlKHQpLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgfHwgKHQgPiByYW5nZVN0YXJ0RGF0ZSAmJiB0IDwgcmFuZ2VFbmREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPCBpbml0aWFsRGF0ZSAmJiAoIW1pblJhbmdlIHx8IHQgPiBtaW5SYW5nZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5SYW5nZSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPiBpbml0aWFsRGF0ZSAmJiAoIW1heFJhbmdlIHx8IHQgPCBtYXhSYW5nZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhSYW5nZSA9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBtKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSwgbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5RWxlbSA9IG1vbnRoLmNoaWxkcmVuW2ldLCBkYXRlID0gZGF5RWxlbS5kYXRlT2JqO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRPZlJhbmdlID0gKG1pblJhbmdlID4gMCAmJiB0aW1lc3RhbXAgPCBtaW5SYW5nZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChtYXhSYW5nZSA+IDAgJiYgdGltZXN0YW1wID4gbWF4UmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3V0T2ZSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWluc0Rpc2FibGVkICYmICFvdXRPZlJhbmdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgW1wic3RhcnRSYW5nZVwiLCBcImluUmFuZ2VcIiwgXCJlbmRSYW5nZVwiLCBcIm5vdEFsbG93ZWRcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8PSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN0YXJ0UmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcInN0YXJ0UmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBtaW5SYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhSYW5nZSA9PT0gMCB8fCB0aW1lc3RhbXAgPD0gbWF4UmFuZ2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZXR3ZWVuKHRpbWVzdGFtcCwgaW5pdGlhbERhdGUsIGhvdmVyRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShpLCBsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0VGltZSgpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXREZWZhdWx0SG91cnMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkVsZW1lbnQgPT09IHZvaWQgMCkgeyBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7IH1cbiAgICAgICAgICAgIGlmIChzZWxmLmlzTW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCAmJiBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5faW5wdXQuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciB3YXNPcGVuID0gc2VsZi5pc09wZW47XG4gICAgICAgICAgICBzZWxmLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXdhc09wZW4pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25PcGVuXCIpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lID09PSB0cnVlICYmIHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXREZWZhdWx0VGltZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgKGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIXNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuaG91ckVsZW1lbnQuc2VsZWN0KCk7IH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZU9iaiA9IChzZWxmLmNvbmZpZ1tcIl9cIiArIHR5cGUgKyBcIkRhdGVcIl0gPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICAgICAgdmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGZbdHlwZSA9PT0gXCJtaW5cIiA/IFwibWluRGF0ZUhhc1RpbWVcIiA6IFwibWF4RGF0ZUhhc1RpbWVcIl0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0TWludXRlcygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0U2Vjb25kcygpID4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBzZWxmLnNlbGVjdGVkRGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBpc0VuYWJsZWQoZCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgdHlwZSA9PT0gXCJtaW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICEhaW52ZXJzZURhdGVPYmogJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlRGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcbiAgICAgICAgICAgIHZhciBib29sT3B0cyA9IFtcbiAgICAgICAgICAgICAgICBcIndyYXBcIixcbiAgICAgICAgICAgICAgICBcIndlZWtOdW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJhbGxvd0lucHV0XCIsXG4gICAgICAgICAgICAgICAgXCJjbGlja09wZW5zXCIsXG4gICAgICAgICAgICAgICAgXCJ0aW1lXzI0aHJcIixcbiAgICAgICAgICAgICAgICBcImVuYWJsZVRpbWVcIixcbiAgICAgICAgICAgICAgICBcIm5vQ2FsZW5kYXJcIixcbiAgICAgICAgICAgICAgICBcImFsdElucHV0XCIsXG4gICAgICAgICAgICAgICAgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcbiAgICAgICAgICAgICAgICBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdGljXCIsXG4gICAgICAgICAgICAgICAgXCJlbmFibGVTZWNvbmRzXCIsXG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlTW9iaWxlXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgdmFyIHVzZXJDb25maWcgPSBfX2Fzc2lnbih7fSwgaW5zdGFuY2VDb25maWcsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudC5kYXRhc2V0IHx8IHt9KSkpO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHMgPSB7fTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnBhcnNlRGF0ZSA9IHVzZXJDb25maWcucGFyc2VEYXRlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSA9IHVzZXJDb25maWcuZm9ybWF0RGF0ZTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJlbmFibGVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2VuYWJsZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImRpc2FibGVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGltZU1vZGUgPSB1c2VyQ29uZmlnLm1vZGUgPT09IFwidGltZVwiO1xuICAgICAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmRhdGVGb3JtYXQgJiYgKHVzZXJDb25maWcuZW5hYmxlVGltZSB8fCB0aW1lTW9kZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdERhdGVGb3JtYXQgPSBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0IHx8IGRlZmF1bHRzLmRhdGVGb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0cy5kYXRlRm9ybWF0ID1cbiAgICAgICAgICAgICAgICAgICAgdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdERhdGVGb3JtYXQgKyBcIiBIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmXG4gICAgICAgICAgICAgICAgKHVzZXJDb25maWcuZW5hYmxlVGltZSB8fCB0aW1lTW9kZSkgJiZcbiAgICAgICAgICAgICAgICAhdXNlckNvbmZpZy5hbHRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEFsdEZvcm1hdCA9IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdCB8fCBkZWZhdWx0cy5hbHRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0cy5hbHRGb3JtYXQgPVxuICAgICAgICAgICAgICAgICAgICB1c2VyQ29uZmlnLm5vQ2FsZW5kYXIgfHwgdGltZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTIEtcIiA6IFwiIEtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdEFsdEZvcm1hdCArIChcIiBoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSArIFwiIEtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXVzZXJDb25maWcuYWx0SW5wdXRDbGFzcykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5EYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5EYXRlOyB9LFxuICAgICAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1pblwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4RGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG1pbk1heFRpbWVTZXR0ZXIgPSBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW3R5cGUgPT09IFwibWluXCIgPyBcIl9taW5UaW1lXCIgOiBcIl9tYXhUaW1lXCJdID0gc2VsZi5wYXJzZURhdGUodmFsLCBcIkg6aTpTXCIpO1xuICAgICAgICAgICAgfTsgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5UaW1lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5UaW1lOyB9LFxuICAgICAgICAgICAgICAgIHNldDogbWluTWF4VGltZVNldHRlcihcIm1pblwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4VGltZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4VGltZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IG1pbk1heFRpbWVTZXR0ZXIoXCJtYXhcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMsIHVzZXJDb25maWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib29sT3B0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBIT09LUy5maWx0ZXIoZnVuY3Rpb24gKGhvb2spIHsgcmV0dXJuIHNlbGYuY29uZmlnW2hvb2tdICE9PSB1bmRlZmluZWQ7IH0pLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tob29rXSA9IGFycmF5aWZ5KHNlbGYuY29uZmlnW2hvb2tdIHx8IFtdKS5tYXAoYmluZFRvSW5zdGFuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmlzTW9iaWxlID1cbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuaW5saW5lICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJlxuICAgICAgICAgICAgICAgICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luQ29uZiA9IHNlbGYuY29uZmlnLnBsdWdpbnNbaV0oc2VsZikgfHwge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBsdWdpbkNvbmYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEhPT0tTLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYmluZFRvSW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdXNlckNvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IHBsdWdpbkNvbmZba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblBhcnNlQ29uZmlnXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpKTtcbiAgICAgICAgICAgIHNlbGYubDEwbiA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnNbXCJkZWZhdWx0XCJdLCAodHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubG9jYWxlXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgID8gZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpKTtcbiAgICAgICAgICAgIHRva2VuUmVnZXguSyA9IFwiKFwiICsgc2VsZi5sMTBuLmFtUE1bMF0gKyBcInxcIiArIHNlbGYubDEwbi5hbVBNWzFdICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVswXS50b0xvd2VyQ2FzZSgpICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVsxXS50b0xvd2VyQ2FzZSgpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgdXNlckNvbmZpZyA9IF9fYXNzaWduKHt9LCBpbnN0YW5jZUNvbmZpZywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XG4gICAgICAgICAgICBpZiAodXNlckNvbmZpZy50aW1lXzI0aHIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLnRpbWVfMjRociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcudGltZV8yNGhyID0gc2VsZi5sMTBuLnRpbWVfMjRocjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoc2VsZik7XG4gICAgICAgICAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoeyBjb25maWc6IHNlbGYuY29uZmlnLCBsMTBuOiBzZWxmLmwxMG4gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihjdXN0b21Qb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uRWxlbWVudCA9IGN1c3RvbVBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJIZWlnaHQgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jaGlsZHJlbiwgKGZ1bmN0aW9uIChhY2MsIGNoaWxkKSB7IHJldHVybiBhY2MgKyBjaGlsZC5vZmZzZXRIZWlnaHQ7IH0pLCAwKSwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLnNwbGl0KFwiIFwiKSwgY29uZmlnUG9zVmVydGljYWwgPSBjb25maWdQb3NbMF0sIGNvbmZpZ1Bvc0hvcml6b250YWwgPSBjb25maWdQb3MubGVuZ3RoID4gMSA/IGNvbmZpZ1Bvc1sxXSA6IG51bGwsIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1Bvc1ZlcnRpY2FsID09PSBcImFib3ZlXCIgfHxcbiAgICAgICAgICAgICAgICAoY29uZmlnUG9zVmVydGljYWwgIT09IFwiYmVsb3dcIiAmJlxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZUZyb21Cb3R0b20gPCBjYWxlbmRhckhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XG4gICAgICAgICAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgK1xuICAgICAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIXNob3dPblRvcCk7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Qm90dG9tXCIsIHNob3dPblRvcCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy5sZWZ0IC1cbiAgICAgICAgICAgICAgICAoY29uZmlnUG9zSG9yaXpvbnRhbCAhPSBudWxsICYmIGNvbmZpZ1Bvc0hvcml6b250YWwgPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPyAoY2FsZW5kYXJXaWR0aCAtIGlucHV0Qm91bmRzLndpZHRoKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgOiAwKTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gKHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLnJpZ2h0KTtcbiAgICAgICAgICAgIHZhciByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGNlbnRlck1vc3QgPSByaWdodCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIHJpZ2h0TW9zdCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFjZW50ZXJNb3N0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuICAgICAgICAgICAgICAgIC8vIHNvbWUgdGVzdGluZyBlbnZpcm9ubWVudHMgZG9uJ3QgaGF2ZSBjc3Mgc3VwcG9ydFxuICAgICAgICAgICAgICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBib2R5V2lkdGggPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgY2VudGVyTGVmdCA9IE1hdGgubWF4KDAsIGJvZHlXaWR0aCAvIDIgLSBjYWxlbmRhcldpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlckJlZm9yZSA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmJlZm9yZVwiO1xuICAgICAgICAgICAgICAgIHZhciBjZW50ZXJBZnRlciA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmFmdGVyXCI7XG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlckluZGV4ID0gZG9jLmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgY2VudGVyU3R5bGUgPSBcIntsZWZ0OlwiICsgaW5wdXRCb3VuZHMubGVmdCArIFwicHg7cmlnaHQ6YXV0bzt9XCI7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiY2VudGVyTW9zdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkb2MuaW5zZXJ0UnVsZShjZW50ZXJCZWZvcmUgKyBcIixcIiArIGNlbnRlckFmdGVyICsgY2VudGVyU3R5bGUsIGNlbnRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBjZW50ZXJMZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzQW5kQ2xvc2UoKSB7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBoYWNrIC0gYnVncyBpbiB0aGUgd2F5IElFIGhhbmRsZXMgZm9jdXMga2VlcHMgdGhlIGNhbGVuZGFyIG9wZW5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYuY2xvc2UsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheS5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0ID0gZmluZFBhcmVudChlLnRhcmdldCwgaXNTZWxlY3RhYmxlKTtcbiAgICAgICAgICAgIGlmICh0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHQ7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUodGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKSk7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSAoc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPCBzZWxmLmN1cnJlbnRNb250aCB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpID5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIC0gMSkgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIilcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gaXNEYXRlU2VsZWN0ZWQoc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShwYXJzZUludChzZWxlY3RlZEluZGV4KSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgICAgIC8vIHVubGVzcyBzZWxlY3Rpbmcgc2FtZSBkYXRlIHR3aWNlLCBzb3J0IGFzY2VuZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENoYW5nZU1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgIGlmIChpc05ld1llYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChzZWxmLnNob3dUaW1lSW5wdXQgPSB0cnVlKTsgfSwgNTApO1xuICAgICAgICAgICAgLy8gbWFpbnRhaW4gZm9jdXNcbiAgICAgICAgICAgIGlmICghc2hvdWxkQ2hhbmdlTW9udGggJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxKVxuICAgICAgICAgICAgICAgIGZvY3VzT25EYXlFbGVtKHRhcmdldCk7XG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAmJiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZSB8fCByYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBDQUxMQkFDS1MgPSB7XG4gICAgICAgICAgICBsb2NhbGU6IFtzZXR1cExvY2FsZSwgdXBkYXRlV2Vla2RheXNdLFxuICAgICAgICAgICAgc2hvd01vbnRoczogW2J1aWxkTW9udGhzLCBzZXRDYWxlbmRhcldpZHRoLCBidWlsZFdlZWtkYXlzXSxcbiAgICAgICAgICAgIG1pbkRhdGU6IFtqdW1wVG9EYXRlXSxcbiAgICAgICAgICAgIG1heERhdGU6IFtqdW1wVG9EYXRlXVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDQUxMQkFDS1Nba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgQ0FMTEJBQ0tTW2tleV0uZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCgpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKENBTExCQUNLU1tvcHRpb25dICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIENBTExCQUNLU1tvcHRpb25dLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgoKTsgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoSE9PS1MuaW5kZXhPZihvcHRpb24pID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSBhcnJheWlmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUsIGZvcm1hdCkge1xuICAgICAgICAgICAgdmFyIGRhdGVzID0gW107XG4gICAgICAgICAgICBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZi5jb25maWcubW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5jb25maWcuY29uanVuY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0ZSkpKTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IGRhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNFbmFibGVkKGQsIGZhbHNlKTsgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UsIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0OyB9XG4gICAgICAgICAgICBpZiAoKGRhdGUgIT09IDAgJiYgIWRhdGUpIHx8IChkYXRlIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0ZS5sZW5ndGggPT09IDApKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XG4gICAgICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID1cbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXNbc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgIGp1bXBUb0RhdGUoKTtcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKVxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xuICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICBydWxlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUocnVsZSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocnVsZSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICBydWxlLmZyb20gJiZcbiAgICAgICAgICAgICAgICAgICAgcnVsZS50bylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHNlbGYucGFyc2VEYXRlKHJ1bGUuZnJvbSwgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pOyAvLyByZW1vdmUgZmFsc3kgdmFsdWVzXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBEYXRlcygpIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICAgICAgc2VsZi5ub3cgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5ub3cpIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIElFMTEgc2V0dGluZyBwbGFjZWhvbGRlciBhcyB0aGUgaW5wdXQncyB2YWx1ZVxuICAgICAgICAgICAgdmFyIHByZWxvYWRlZERhdGUgPSBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fFxuICAgICAgICAgICAgICAgICgoc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQubm9kZU5hbWUgPT09IFwiVEVYVEFSRUFcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wbGFjZWhvbGRlciAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID09PSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKHByZWxvYWRlZERhdGUsIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgc2VsZi5faW5pdGlhbERhdGUgPVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5zZWxlY3RlZERhdGVzWzBdXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1heERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93O1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGYuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGYuX2luaXRpYWxEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pblRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5taW5UaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4VGltZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm1heFRpbWUsIFwiSDppXCIpO1xuICAgICAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSA9XG4gICAgICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpID4gMCk7XG4gICAgICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lID1cbiAgICAgICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcInNob3dUaW1lSW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fc2hvd1RpbWVJbnB1dDsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dUaW1lSW5wdXQgPSBib29sO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwic2hvd1RpbWVJbnB1dFwiLCBib29sKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc09wZW4gJiYgcG9zaXRpb25DYWxlbmRhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuICAgICAgICAgICAgc2VsZi5pbnB1dCA9IHNlbGYuY29uZmlnLndyYXBcbiAgICAgICAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKVxuICAgICAgICAgICAgICAgIDogZWxlbWVudDtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAoIXNlbGYuaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBlbGVtZW50IHNwZWNpZmllZFwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFjazogc3RvcmUgcHJldmlvdXMgdHlwZSB0byByZXN0b3JlIGl0IGFmdGVyIGRlc3Ryb3koKVxuICAgICAgICAgICAgc2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuICAgICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGljYXRlIHNlbGYuZWxlbWVudFxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MpO1xuICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5hbHRJbnB1dDtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnRhYkluZGV4ID0gc2VsZi5pbnB1dC50YWJJbmRleDtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KVxuICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XG4gICAgICAgICAgICBzZWxmLl9wb3NpdGlvbkVsZW1lbnQgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5faW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRUeXBlID0gc2VsZi5jb25maWcuZW5hYmxlVGltZVxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubm9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICA/IFwidGltZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgOiBcImRhdGVcIjtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5zdGVwID0gc2VsZi5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpIHx8IFwiYW55XCI7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlRm9ybWF0U3RyID1cbiAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcXFxcVEg6aTpTXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dFR5cGUgPT09IFwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkg6aTpTXCI7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICAgICAgYmluZChzZWxmLm1vYmlsZUlucHV0LCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShlLnRhcmdldC52YWx1ZSwgZmFsc2UsIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzT3BlbiA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgc2VsZi5vcGVuKGUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRyaWdnZXJFdmVudChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbHJlYWR5LCBhbGwgaG9va3MgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBob29rcyA9IHNlbGYuY29uZmlnW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaG9va3NbaV0gJiYgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBob29rc1tpXShzZWxmLnNlbGVjdGVkRGF0ZXMsIHNlbGYuaW5wdXQudmFsdWUsIHNlbGYsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSBcIm9uQ2hhbmdlXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgIC8vIG1hbnkgZnJvbnQtZW5kIGZyYW1ld29ya3MgYmluZCB0byB0aGUgaW5wdXQgZXZlbnRcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJpbnB1dFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgICAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0RhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZi5zZWxlY3RlZERhdGVzW2ldLCBkYXRlKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gKGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID49IDAgJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSB8fCAhc2VsZi5tb250aE5hdilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZWxmLnllYXJFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh5ZWFyRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgICAgIGQuc2V0TW9udGgoc2VsZi5jdXJyZW50TW9udGggKyBpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzW2ldLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoVG9TdHIoZC5nZXRNb250aCgpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbikgKyBcIiBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIudmFsdWUgPSBkLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeWVhckVsZW1lbnQudmFsdWUgPSBkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50WWVhciA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXREYXRlU3RyKGZvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlc1xuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRPYmopIHsgcmV0dXJuIHNlbGYuZm9ybWF0RGF0ZShkT2JqLCBmb3JtYXQpOyB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQsIGksIGFycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSB8fFxuICAgICAgICAgICAgICAgICAgICBhcnIuaW5kZXhPZihkKSA9PT0gaTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmpvaW4oc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jb25qdW5jdGlvblxuICAgICAgICAgICAgICAgIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgdmFsdWVzIG9mIGlucHV0cyBhc3NvY2lhdGVkIHdpdGggdGhlIGNhbGVuZGFyXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2UgPSB0cnVlOyB9XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlRm9ybWF0U3RyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBnZXREYXRlU3RyKHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBnZXREYXRlU3RyKHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25WYWx1ZVVwZGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbk1vbnRoTmF2Q2xpY2soZSkge1xuICAgICAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIGlzTmV4dE1vbnRoID0gc2VsZi5uZXh0TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi55ZWFyRWxlbWVudHMuaW5kZXhPZihlLnRhcmdldCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBpbnB1dCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtpbnQoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBzZWxmLmwxMG4uYW1QTVswXSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpKSwgbWF4ID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpLCBzdGVwID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSwgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLCBkZWx0YSA9IGUuZGVsdGEgfHxcbiAgICAgICAgICAgICAgICAoaXNLZXlEb3duID8gKGUud2hpY2ggPT09IDM4ID8gMSA6IC0xKSA6IDApO1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0LnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludCghaXNIb3VyRWxlbSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgLTEsIHNlbGYuaG91ckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAxLCBzZWxmLmhvdXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxuICAgICAgICAgICAgICAgICAgICBpc0hvdXJFbGVtICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGVwID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGguYWJzKG5ld1ZhbHVlIC0gY3VyVmFsdWUpID4gc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbml0KCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZ1bmN0aW9uIF9mbGF0cGlja3Iobm9kZUxpc3QsIGNvbmZpZykge1xuICAgICAgICAvLyBzdGF0aWMgbGlzdFxuICAgICAgICB2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgICAgIC5jYWxsKG5vZGVMaXN0KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OyB9KTtcbiAgICAgICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLl9mbGF0cGlja3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobm9kZS5fZmxhdHBpY2tyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBIVE1MQ29sbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0eXBlb2YgTm9kZUxpc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gYnJvd3NlciBlbnZcbiAgICAgICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgICAgICB9O1xuICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBmbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbc2VsZWN0b3JdLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBmbGF0cGlja3IubDEwbnMgPSB7XG4gICAgICAgIGVuOiBfX2Fzc2lnbih7fSwgZW5nbGlzaCksXG4gICAgICAgIFwiZGVmYXVsdFwiOiBfX2Fzc2lnbih7fSwgZW5nbGlzaClcbiAgICB9O1xuICAgIGZsYXRwaWNrci5sb2NhbGl6ZSA9IGZ1bmN0aW9uIChsMTBuKSB7XG4gICAgICAgIGZsYXRwaWNrci5sMTBuc1tcImRlZmF1bHRcIl0gPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zW1wiZGVmYXVsdFwiXSwgbDEwbik7XG4gICAgfTtcbiAgICBmbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIH07XG4gICAgZmxhdHBpY2tyLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoe30pO1xuICAgIGZsYXRwaWNrci5mb3JtYXREYXRlID0gY3JlYXRlRGF0ZUZvcm1hdHRlcih7fSk7XG4gICAgZmxhdHBpY2tyLmNvbXBhcmVEYXRlcyA9IGNvbXBhcmVEYXRlcztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBqUXVlcnkuZm4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgalF1ZXJ5LmZuLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgRGF0ZS5wcm90b3R5cGUuZnBfaW5jciA9IGZ1bmN0aW9uIChkYXlzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyAodHlwZW9mIGRheXMgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChkYXlzLCAxMCkgOiBkYXlzKSk7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xuICAgIH1cblxuICAgIHJldHVybiBmbGF0cGlja3I7XG5cbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=