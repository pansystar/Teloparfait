class DateTime {

    getText() {
        return this.text;
    }
    setFormat(format) {
        this.format = format;
    }
    start() {
        
    }
    update() {
        this.date = new Date();
        this.text = fromDateToString(this.date, this.format);
    }
    constructor() {
        this.val = 0;
        this.date = new Date();
        this.format = "HH:mm:ss";
    }
}