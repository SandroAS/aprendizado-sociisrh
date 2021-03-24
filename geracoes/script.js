var form = document.querySelector("#form");

form.addEventListener('submit', function(event){
    var select = document.getElementById('selecao');
    var value = select.options[select.selectedIndex].value;
    console.log(value.value);

    event.preventDefault();

    var ajax = new XMLHttpRequest();

    ajax.open("POST", "geracoes.php", true);

    ajax.responseType = "json";

    ajax.send();

    ajax.addEventListener("readystatechange", function()
    {
        var value = select.options[select.selectedIndex].value;

        if (ajax.readyState == 4 && ajax.status == 200) {

            var resposta = ajax.response;

            var lista = document.querySelector(".lista");

                if(value == 2){lista.innerHTML += "<li>"+resposta[0][0]+ ": " +"<br>"+ "Início: " +resposta[0][1]+"<br>" +"Final: "+resposta[0][2]+"</li>";}
                if(value == 3){lista.innerHTML += "<li>"+resposta[1][0]+ ": " +"<br>"+ "Início: " +resposta[1][1]+"<br>" +"Final: "+resposta[1][2]+"</li>";}
                if(value == 4){lista.innerHTML += "<li>"+resposta[2][0]+ ": " +"<br>"+ "Início: " +resposta[2][1]+"<br>" +"Final: "+resposta[2][2]+"</li>";}
                if(value == 5){lista.innerHTML += "<li>"+resposta[3][0]+ ": " +"<br>"+ "Início: " +resposta[3][1]+"<br>" +"Final: "+resposta[3][2]+"</li>";}
                if(value == 6){lista.innerHTML += "<li>"+resposta[4][0]+ ": " +"<br>"+ "Início: " +resposta[4][1]+"<br>" +"Final: "+resposta[4][2]+"</li>";}
                if(value == 7){lista.innerHTML += "<li>"+resposta[5][0]+ ": " +"<br>"+ "Início: " +resposta[5][1]+"<br>" +"Final: "+resposta[5][2]+"</li>";}
                if(value == 8){lista.innerHTML += "<li>"+resposta[6][0]+ ": " +"<br>"+ "Início: " +resposta[6][1]+"<br>" +"Final: "+resposta[6][2]+"</li>";}
                if(value == 9){lista.innerHTML += "<li>"+resposta[7][0]+ ": " +"<br>"+ "Início: " +resposta[7][1]+"<br>" +"Final: "+resposta[7][2]+"</li>";}
            
            console.log(ajax);
        
        } else {
            //alert("Deu errado");
        }

    });
})

var resetar = document.getElementById("reset");

resetar.addEventListener('click', function(){
    window.location.reload()
})
