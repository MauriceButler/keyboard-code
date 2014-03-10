function KeyboardCode(code, success){
    this.code = code || [];
    this.success = success || function(){};
    this.codeIndex = 0;

    if(window.addEventListener) {
        window.addEventListener("keyup", this.checkCode.bind(this), false);
    } else {
        window.attachEvent("onkeyup", this.checkCode.bind(this));
    }
}

KeyboardCode.prototype.checkCode = function checkCode(event){
    if(event.keyCode === this.code[this.codeIndex++]){
        if(this.codeIndex === this.code.length){
            this.success();
            this.codeIndex = 0;
        }
    }else{
        this.codeIndex = 0;
    }
};

KeyboardCode.prototype.cancel = function cancel(){
    if(window.removeEventListener) {
        window.removeEventListener("keyup", this.checkCode.bind(this), false);
    } else {
        window.removeEvent("onkeyup", this.checkCode.bind(this));
    }
};

module.exports = KeyboardCode;