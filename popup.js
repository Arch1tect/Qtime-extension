
var url = "http://quotime.me";


function parseTabContent(responseObj) {

	$("#name").val(responseObj.name);
	$("#link").val(responseObj.link);

	// window.close();
}




function addEntry() {

	var newEntry = {};
	newEntry.name = $("#name").val();
	newEntry.duration = $("#duration").val();
	newEntry.category = $("#category").val();
	newEntry.link = $("#link").val();
	newEntry.note = $("#note").val();
				
	$("#msg").text("sending...");
	$("#msg").show();

	$.ajax({
		type: "POST",
		contentType : 'application/json',
		url: url+'/api/entry',
		dataType: 'json',
		data: JSON.stringify(newEntry),
		complete: function (data) {
			console.log(data);
			var jsonObj = data.responseJSON;
			if ("error" in jsonObj)
				$("#msg").text("error: "+jsonObj.error);
			else	
				$("#msg").text("success!");

		}
	});
}


document.addEventListener('DOMContentLoaded', function () {

	var buttons = document.querySelectorAll('button');
	buttons[0].addEventListener('click', addEntry);

	$('body').on('click', 'a', function(){
		chrome.tabs.create({url: $(this).attr('href')});
		return false;
	});




	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

		// since only one tab should be active and in the current window at once
		// the return variable should only have one entry
		var activeTab = arrayOfTabs[0];
		var activeTabId = activeTab.id; // or do whatever you need
		chrome.tabs.sendMessage(activeTabId, {text: 'report_back'}, parseTabContent);

	});


});
