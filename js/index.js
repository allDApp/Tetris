
$(function() {
	var NebPay = require("nebpay"); 
	var nebpay = new NebPay();
$("#all").click(function() {
	
	var to = "n1yEP5qJBwP7SXaGPXHp2WJWCrX5js3Az6j";
	var value = "0";
	var callFunction = "TETList";
	var callArgs = "[]";
	nebpay.simulateCall(to, value, callFunction, callArgs, {
		listener: function(resp) {
			//console.log(JSON.stringify(resp.result));
			if(resp.result == ""){
				$("#searchresult").html('<div class="panel-body" >无记录</div>');
				return;
			}
			var res = JSON.parse(resp.result);
			if(res.length == 0){
				$("#searchresult").html('<div class="panel-body">无记录</div>');
				return;
			}

			var tempStr = "";

			for (var i = 0; i < res.length; i++) {

				//					
				tempStr += '<li><p>';
				tempStr += res[i].Data;
				tempStr += '</p>';
				tempStr += '<p>';
				tempStr += '<small><cite>' + '玩家ID:' + res[i].author + '</cite></small>';
				tempStr += '<br>';
				tempStr += '<small><cite>' + '完成时间戳:' + res[i].createdDate + '</cite></small>';
				tempStr += '</p></li> ';
			}
			console.log(tempStr);
			$("#searchresult").html(tempStr);
		}
	});

});
$("#all").click();
});
