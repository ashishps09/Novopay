	function initTable(){
		if (JSON.parse(localStorage.getItem('tableContent'))){
			var tableContent = JSON.parse(localStorage.getItem('tableContent'));
			console.log(tableContent.length)
			for(var i=0; i < tableContent.length; i++){
					var name = tableContent[i]['Name'];
					var age = tableContent[i]['Age'];
					var dob = tableContent[i]['DOB'];
					var interests = tableContent[i]['Interests'];
					var place = tableContent[i]['Place'];
					
					document.getElementById('myTable').innerHTML += "<tr data-name='"+name+"' data-age='"+age+"' data-dob='"+dob+"' data-interests='"+interests+"' data-place='"+place+"'><td>"+name+"</td><td>"+age+"</td><td>"+dob+"</td><td>"+interests+"</td><td>"+place+"</td><td><button class='btn btn-info btn-xs btn-edit' onClick='edit(this.parentNode)'>Edit</button>&nbsp<button class='btn btn-danger btn-xs btn-delete'  onClick='remove(this.parentNode)'>Delete</button></td></tr>" ;
			}
	
		}
	}
   
    function addUser(){
        
		var name = document.getElementById('name').value;
		var age = document.getElementById('age').value;
		var dob = document.getElementById('dob').value;
		var interests = document.getElementById('interests').value;
		var place = document.getElementById('place').value;
		
		if(localStorage.getItem('tableContent'))
		{
			var arr = JSON.parse(localStorage.getItem('tableContent'));
		}
		else {
			var arr = [];
		}
		var tableContent = { "Name" : name , "Age" : age ,"DOB" : dob ,"Interests" : interests ,"Place" : place};
		arr.push(tableContent);
        localStorage.setItem('tableContent', JSON.stringify(arr));
		
       	document.getElementById('myTable').innerHTML += "<tr data-name='"+name+"' data-age='"+age+"' data-dob='"+dob+"' data-interests='"+interests+"' data-place='"+place+"'><td>"+name+"</td><td>"+age+"</td><td>"+dob+"</td><td>"+interests+"</td><td>"+place+"</td><td><button class='btn btn-info btn-xs btn-edit' onClick='edit(this.parentNode)'>Edit</button>&nbsp<button class='btn btn-danger btn-xs btn-delete'  onClick='remove(this.parentNode)'>Delete</button></td></tr>" ;
		
		document.getElementById('name').value = '';
		document.getElementById('age').value = '';
		document.getElementById('dob').value = '';
		document.getElementById('interests').value = '';
		document.getElementById('place').value = '';
        
    };
   
    function remove(element) {
		element.parentNode.remove(element);
	}
	
    function search() {
  	var input, filter, table, tr, td, i, txtValue;
  	input = document.getElementById("myInput");
 	filter = input.value.toUpperCase();
  	table = document.getElementById("myTable");
  	tr = table.getElementsByTagName("tr");
  	for (i = 0; i < tr.length; i++) {
    	td = tr[i].getElementsByTagName("td")[0];
    	if (td) {
      		txtValue = td.textContent || td.innerText;
      		if (txtValue.toUpperCase().indexOf(filter) > -1) {
        		tr[i].style.display = "";
      		} else {
        		tr[i].style.display = "none";
      			}
    		}       
 	 }
	}
	function edit(el){
		var name = el.parentNode.getAttribute('data-name');
		var age = el.parentNode.getAttribute('data-age');
		var dob = el.parentNode.getAttribute('data-dob');
		var interests = el.parentNode.getAttribute('data-interests');
		var place = el.parentNode.getAttribute('data-place');
		
		el.parentNode.querySelectorAll("td")[0].innerHTML = '<input data-name="'+name+'" value="'+name+'">';
		el.parentNode.querySelectorAll("td")[1].innerHTML = '<input data-age="'+age+'" value="'+age+'">';
		el.parentNode.querySelectorAll("td")[2].innerHTML = '<input data-dob="'+dob+'" value="'+dob+'">';
		el.parentNode.querySelectorAll("td")[3].innerHTML = '<input data-interests="'+interests+'" value="'+interests+'">';
		el.parentNode.querySelectorAll("td")[4].innerHTML = '<input data-place="'+place+'" value="'+place+'">';
		
	}
    $("body").on("click", ".btn-edit", function(){
        $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update' onClick='update(this.parentNode)'>Update</button>&nbsp<button class='btn btn-warning btn-xs btn-cancel' onClick='cancel(this.parentNode)'>Cancel</button>")
        $(this).hide();
    });
    
	function cancel(el){
		var name = el.parentNode.getAttribute('data-name');
		var age = el.parentNode.getAttribute('data-age');
		var dob = el.parentNode.getAttribute('data-dob');
		var interests = el.parentNode.getAttribute('data-interests');
		var place = el.parentNode.getAttribute('data-place');
		
		el.parentNode.querySelectorAll("td")[0].innerText = name;
		el.parentNode.querySelectorAll("td")[1].innerText = age;
		el.parentNode.querySelectorAll("td")[2].innerText = dob;
		el.parentNode.querySelectorAll("td")[3].innerText = interests;
		el.parentNode.querySelectorAll("td")[4].innerText = place;
		
	}
	
    $("body").on("click", ".btn-cancel", function(){
	
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });
	
	function update(el){
	
		var name = el.parentNode.querySelectorAll("td")[0].querySelector('input').value;
		var age = el.parentNode.querySelectorAll("td")[1].querySelector('input').value;
		var dob = el.parentNode.querySelectorAll("td")[2].querySelector('input').value;
		var interests = el.parentNode.querySelectorAll("td")[3].querySelector('input').value;
		var place = el.parentNode.querySelectorAll("td")[4].querySelector('input').value;
	
		el.parentNode.querySelectorAll("td")[0].innerText = name;
		el.parentNode.querySelectorAll("td")[1].innerText = age;
		el.parentNode.querySelectorAll("td")[2].innerText = dob;
		el.parentNode.querySelectorAll("td")[3].innerText = interests;
		el.parentNode.querySelectorAll("td")[4].innerText = place;
		
		el.parentNode.setAttribute('data-name', name);
		el.parentNode.setAttribute('data-age', age);
		el.parentNode.setAttribute('data-dob', dob);
		el.parentNode.setAttribute('data-interests', interests);
		el.parentNode.setAttribute('data-place', place);
	}
	
    $("body").on("click", ".btn-update", function(){
    
        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
    