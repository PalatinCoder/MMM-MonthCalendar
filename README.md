# MonthCalendar

A monthly calendar for your [MagicMirror²](https://magicmirror.builders/).

[![GitHub tag](https://img.shields.io/github/tag/PalatinCoder/MMM-MonthCalendar.svg?style=flat-square)](https://github.com/PalatinCoder/MMM-MonthCalendar/releases)
[![License](https://img.shields.io/github/license/PalatinCoder/MMM-MonthCalendar.svg?style=flat-square)](https://github.com/PalatinCoder/MMM-MonthCalendar/blob/master/LICENSE.md)


![Preview](https://user-images.githubusercontent.com/5798157/74273222-5ccd5f00-4d10-11ea-873a-375591128e65.png)

## Installation

1. Navigate into your MagicMirror `modules` folder and execute `git clone https://github.com/PalatinCoder/MMM-MonthCalendar.git`
2. Enter the `MMM-MonthCalendar` directory and execute `npm install`
3. Navigate into the MagicMirror `config` folder and add the config below to the `config.js` file

## Configuration
These are the parameters you can change for this module.
| Option | Default | Description |
|---|---|---|
| `updateDelay` | `5` | Amount of seconds to delay the daily calendar update<br>**Type:** `integer` |
| `showAdjacentMonths` | `true` | Choose to preview a few days of the previous/next month<br>**Type:** `boolean` |

You can use the following example config to paste it directly into your `config.js`.
There you can also add a custom text that prefixes your module's header (`header` field in the config snippet below). Default is only name & current year.

```
{
    module: 'MMM-MonthCalendar',
    position: "center",
    header: "",
    config: {
        updateDelay: 5,
        showAdjacentMonths: true
    }
}
```
⚠️ *Regarding the module header*: The current month and year are automatically appended to the module header. But: MagicMirror only displays the header if one is set for the module in `config.js`. So, for the current month to be shown, you need to set a header which it can be appended to. If you omit the `header` property, the module won't have a header at all.
If you don't want additional text in the header, that's no problem. As we all know: `"" !== undefined`, so just set your header to an empty string (as shown in the example above).
