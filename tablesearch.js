function tablesearch(tableId, searchId) {
	var table = document.getElementById(tableId);
  var search = document.getElementById(searchId);
  for (var i = 0; i < table.childNodes.length; i++) {
    if (table.childNodes[i].tagName && table.childNodes[i].tagName.toLowerCase() === 'tbody') {
      table = table.childNodes[i];
      break;
    }
    
  }
  search.addEventListener('input', function(e) {
    var needle = this.value;
    for (var i = 0; i < table.childNodes.length; i++) {
      if (table.childNodes[i].tagName && table.childNodes[i].tagName.toLowerCase() === 'tr') {
        var rowContent = table.childNodes[i].textContent;
        if (rowContent.toLowerCase().search(needle.toLowerCase()) !== -1) {
          table.childNodes[i].setAttribute('style', 'display: table block');
        } else {
        	table.childNodes[i].setAttribute('style', 'display: none');
        }
        
      }
      
    }      
  });  
}
module.exports = tablesearch;