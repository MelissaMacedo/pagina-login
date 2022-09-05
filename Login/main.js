const inputs = document.querySelectorAll(".form_input")

function mensagem(){

    var email = document.getElementById('email').value;

    alert('Senha de recuperação enviada com Sucesso!');
}
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert("sucesso");
        location.href = "home.html";
    }
    else
    alert('usuario ou senha incorretos');
}

/*==== adicionando foco===*/
function addfocus(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

/*==== retirando foco===*/

function remfocus()
{
    let parent = this.parentNode.parentNode;

    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

/*==== chamando a função ===*/

inputs.forEach(input=>{
    input.addEventListener("focus",addfocus);
    input.addEventListener("blur",remfocus);
})

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// adicionando nova linha a tabela ao adicionar um novo elemento

    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
        
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// adicionando linha
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Editando linha 
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	//deletando linha 
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});