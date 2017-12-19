function Cell(x, y, alive){
	this.x = x;
	this.y = y;
	this.alive = alive;
	this.next = null;

	this.setNextState = function(neighbors){
		if (this.alive == 0 && neighbors == 3) {
	        this.next = 1;
	    } else if (this.alive == 1 && (neighbors < 2 || neighbors > 3)) {
	    	this.next = 1;
	    } else {
	    	this.next = this.alive;
	    }
	}

	this.nextState = function(){
		delete this.alive;
		this.alive = this.next;
	}

	this.draw = function(resolution){
		if (this.alive == 1) {
			fill(255);
			stroke(0);
		}else{
			fill(0);
			stroke(0);
		}
		rect(this.x, this.y, resolution - 1, resolution - 1);
	}
}