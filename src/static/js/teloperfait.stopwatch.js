class Stopwatch {
    getText() {
        return this.text;
    }
    setFormat(format) {
        this.format = format;
    }
    start() {
        if(!this.isPause) {
            this.startDate = new Date();
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
        if(this.isStart && !this.isPause){
            this.val = new Date() - this.startDate;
            this.text = fromValueToString(this.val, this.format);
        }
    }
    constructor() {
        this.val = 0;
        this.startDate = new Date();
        this.isStart = false;
        this.isPause = false;
        this.format = "HH:mm:ss.fff";
    }
}