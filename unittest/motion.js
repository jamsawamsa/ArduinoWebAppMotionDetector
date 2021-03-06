//Constructor
function Motion(time){
	this._timeStamp = time;
}

//Calculate long motion
Motion.prototype.getMotionType = function(){
	const LONG_MOTION = 8;
	if (this._timeStamp >= LONG_MOTION) {
            return "L";
        }
        else {
            if (this._timeStamp < 0) {
                return -1;
            } 
            return "S";
        }
};

module.exports = Motion;
