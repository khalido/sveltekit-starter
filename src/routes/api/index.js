var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

var d = new Date();
var n = d.getTime();

export function get() {
	return { body: { message: dateTime + ' pong from api/index.js' } }
  }