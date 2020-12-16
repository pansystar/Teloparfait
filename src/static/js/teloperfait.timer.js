class Timer {

    getText() {
        return this.text;
    }
    setFormat(format) {
        this.format = format;
    }
    start() {
        if(!this.isPause) {
            this.startDate = new Date();
            this.endDate = new Date(this.startDate);
            this.endDate.setTime(this.endDate.getTime()+this.millisec);
        } else {
            this.startDate = new Date();
            this.startDate.setTime(this.startDate.getTime() - this.val);
        }
        this.isStart = true;
        this.isPause = false;
    }
    pause() {
        this.isPause = true;
    }
    update() {
        this.nowDate = new Date();
        this.val = this.endDate - this.nowDate;
        if(this.val < 0) {
            this.val = 0;
        }
        this.text = fromValueToString(this.val, this.format);
    }
    constructor(millisec) {
        if(millisec == undefined) {
            millisec = 0;
        }
        this.text = "";
        this.millisec = millisec;
        this.startDate = new Date();
        this.nowDate = this.startDate;
        this.val = millisec;
        this.format = "HH:mm:ss.fff"
    }
};