$(document).ready(function () {
    $('.acoes').select2({
        placeholder: "Selecione a ação desejada.",
        allowClear: true
    });
            
    if(listItens.length > 0) {     
        var acoes = $('.acoes').select2();   
        acoes.val(null).trigger('change');        
        listItens.forEach(function (element, i) {
            var option = new Option(element.TICKER, element.TICKER, false, false);            
            acoes.append(option).trigger('change');            
        });
    }
});
