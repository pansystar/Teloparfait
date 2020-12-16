function fromDateToString(date, format) {
    var result = "";
    for(var i=0;i<format.length;i++) {
        switch(format[i]) {
            case 'H':
                if((i+1) < format.length && format[i+1] == 'H') {
                    result += ('00'+date.getHours()).slice(-2);
                    i++;
                } else {
                    reuslt += ''+date.getHours();
                }
                break;
            case 'h':
                var hour = date.getHours();

                // 12時間表記にする。
                if(hour >= 12 ) {
                    hour -= 12;
                }

                if((i+1) < format.length && format[i+1] == 'h') {
                    result += ('00'+hour).slice(-2);
                    i++;
                } else {
                    reuslt += ''+hour;
                }
                break;
            case 'm':
                if((i+1) < format.length && format[i+1] == 'm') {
                    result += ('00'+date.getMinutes()).slice(-2);
                    i++;
                } else {
                    result += ''+date.getMinutes();
                }
                break;
            case 's':
                if((i+1) < format.length && format[i+1] == 's') {
                    result += ('00'+date.getSeconds()).slice(-2);
                    i++;
                } else {
                    result += ''+date.getSeconds();
                }
                break;
            default:
                result += format[i];
                break;
        }
    }

    return result;
}

function getHoursFromMillisec(millisec) {
    return Math.floor(millisec / 3600000);
}

function getMinutesFromMillisec(millisec) {
    return Math.floor(millisec % 3600000 / 60000)
}

function getSecondsFromMillisec(millisec) {
    return Math.floor(millisec % 60000 / 1000);
}

function getFloorsFromMillisec(millisec) {
    return Math.floor(millisec % 1000);
}

function fromValueToString(value, format) {
    if(!format) {
        format = "hh:mm:ss";
    }
    var result = "";
    for(var i=0;i<format.length;i++) {
        switch(format[i]) {
            case 'H':
                if((i+1) < format.length && format[i+1] == 'H') {
                    result += ('00'+getHoursFromMillisec(value)).slice(-2);
                    i++;
                } else {
                    reuslt += ''+getHoursFromMillisec(value);
                }
                break;
            case 'h':
                var hour = getHoursFromMillisec(value);

                // 12時間表記にする。
                if(hour >= 12 ) {
                    hour -= 12;
                }

                if((i+1) < format.length && format[i+1] == 'h') {
                    result += ('00'+hour).slice(-2);
                    i++;
                } else {
                    reuslt += ''+hour;
                }
                break;
            case 'm':
                if((i+1) < format.length && format[i+1] == 'm') {
                    result += ('00'+getMinutesFromMillisec(value)).slice(-2);
                    i++;
                } else {
                    result += ''+getMinutesFromMillisec(value);
                }
                break;
            case 's':
                if((i+1) < format.length && format[i+1] == 's') {
                    result += ('00'+getSecondsFromMillisec(value)).slice(-2);
                    i++;
                } else {
                    result += ''+getSecondsFromMillisec(value);
                }
                break;
            case 'f':
                if((i+2) < format.length && format[i+1] == 'f' && format[i+2] == 'f') {
                    result += ('000' + getFloorsFromMillisec(value)).slice(-3);
                    i+=2;
                } else if ((i+1) < format.length && format[i+1] == 'f') {
                    result += ('00' + getFloorsFromMillisec(value)).slice(-2);
                    i++;
                } else {
                    result += ''+getFloorsFromMillisec(value);
                }
                break;
            default:
                result += format[i];
                break;
        }
    }

    return result;
}