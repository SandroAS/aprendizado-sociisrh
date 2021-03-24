var form = document.querySelector("#formProject");

form.addEventListener('submit', function(event){

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    //var senha = document.getElementById('senha');
    //var confirmarSenha = document.getElementById('confirmarSenha');
    var select = document.getElementById('digito');
    var digito = select.options[select.selectedIndex];
    var fraseStarWars = document.getElementById('fraseStarWars');

    event.preventDefault();
    
    var tr_linha            = document.createElement("tr");
    var th_id               = document.createElement("th");
    var td_nome             = document.createElement("td");
    var td_email            = document.createElement("td");
    var td_digito           = document.createElement("td");
    var td_fraseStarWars    = document.createElement("td");
    var td_stack            = document.createElement("td");
    
    var texto_id            = document.createTextNode("1");
    var texto_nome          = document.createTextNode(nome.value);
    var texto_email         = document.createTextNode(email.value);
    var texto_digito        = document.createTextNode(digito.value);
    var texto_fraseStarWars = document.createTextNode(fraseStarWars.value);
    var texto_stack         = document.createTextNode("");
    
    th_id.appendChild(texto_id);
    td_nome.appendChild(texto_nome);
    td_email.appendChild(texto_email);
    td_digito.appendChild(texto_digito);
    td_fraseStarWars.appendChild(texto_fraseStarWars);
    td_stack.appendChild(texto_stack);
    
    tr_linha.appendChild(th_id);
    tr_linha.appendChild(td_nome);
    tr_linha.appendChild(td_email);
    tr_linha.appendChild(td_digito);
    tr_linha.appendChild(td_fraseStarWars);
    tr_linha.appendChild(td_stack);
    
    corpoTabela.appendChild(tr_linha);
    
    th_id.setAttribute('scope', 'row');
    td_nome.setAttribute('id', 'td_nome' + digito.value);
    td_email.setAttribute('id', 'td_email' + digito.value);
    td_digito.setAttribute('id', 'td_digito' + digito.value);
    td_fraseStarWars.setAttribute('id', 'td_fraseStarWars' + digito.value);
    td_stack.setAttribute('id', 'td_stack' + digito.value);

    var listaNome         = document.getElementById('listaNome');
    var option_name       = document.createElement("option");
    var texto_option_nome = document.createTextNode(nome.value);

    option_name.appendChild(texto_option_nome);
    listaNome.appendChild(option_name);
    option_name.setAttribute('id', 'option_name' + digito.value);

   
    var tableProject_wrapper = document.querySelector("#tableProject_wrapper");
    var tableProject_filter  = document.querySelector("#tableProject_filter");
    var tableProject_paginate = document.querySelector("#tableProject_paginate");
    var tableProject_previous = document.querySelector("#tableProject_previous");

    if (tableProject_wrapper.classList) tableProject_wrapper.classList.add("row");
    else elemento.className += " row";
    
    if (tableProject_filter.classList) tableProject_filter.classList.add("ml-auto");
    else elemento.className += " ml-auto";

    if (tableProject_paginate.classList) tableProject_paginate.classList.add("container");
    else elemento.className += " container";
    if (tableProject_paginate.classList) tableProject_paginate.classList.add("pl-0");
    else elemento.className += " pl-0";

    if (tableProject_previous.classList) tableProject_previous.classList.add("btn");
    else elemento.className += " btn";
    if (tableProject_previous.classList) tableProject_previous.classList.add("btn-primary");
    else elemento.className += " btn-primary";
    if (tableProject_previous.classList) tableProject_previous.classList.add("mr-1");
    else elemento.className += " mr-1";

    if (tableProject_next.classList) tableProject_next.classList.add("btn");
    else elemento.className += " btn";
    if (tableProject_next.classList) tableProject_next.classList.add("btn-primary");
    else elemento.className += " btn-primary";
 
})

var form = document.querySelector("#repeaterForm");

form.addEventListener('submit', function(event){
    event.preventDefault();

    //var listaNome = document.getElementById('listaNome');
    //var nomeSelecionado = listaNome.options[listaNome.selectedIndex];
    //var option_name1 = document.getElementById('option_name1').value;
    //var option_name2 = document.getElementById('option_name2').value;
    //var option_name3 = document.getElementById('option_name3').value;
    
    var select      = document.getElementById('skill_');
    var stack       = select.options[select.selectedIndex];
    

    //if(nomeSelecionado == option_name1){
        //var td_stack    = document.getElementById('td_stack1');
        //var texto_stack = document.createTextNode(stack.value)

        //td_stack.appendChild(texto_stack);
    //}

    //if(nomeSelecionado == option_name2){
        var td_stack    = document.getElementById('td_stack1');
        console.log(td_stack);
        var texto_stack = document.createTextNode(stack.value)
        console.log(texto_stack);

        td_stack.appendChild(texto_stack);
    //}

    //if(nomeSelecionado == option_name3){
        //var td_stack    = document.getElementById('td_stack3');
        //var texto_stack = document.createTextNode(stack.value)

        //td_stack.appendChild(texto_stack);
    //}
    
})

//window.onload = (event) => {
    
//};



