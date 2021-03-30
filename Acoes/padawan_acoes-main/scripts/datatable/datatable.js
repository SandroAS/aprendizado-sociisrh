$(document).ready(function () {
    $('#minhas_acoes').DataTable({
        language: languagenOptions(),
        responsive: true,
        columnDefs: [
            { "width": "20%", "targets": 2, "orderable": false }
        ]
    });
    $('#acoes').DataTable({
        language: languagenOptions(),
        responsive: true,
        processing: true,
        data: listItens,
        columns: [
            { "data": "id", title: "id"},            
            { "data": "acao", title: "acao"},
            { "data": "setor", title: "setor"}, 
            { "data": "subsetor", title: "subsetor"},
            { "data": "segmento", title: "segmento"}, 
            { "data": "preco", title: "preco"}, 
            { "data": "cotacao_maxima_12_meses", title: "Máxima 12 meses"},
            { "data": "queda_do_maximo", title: "Máxima queda"}
        ]
    });
    $('#table-pesquisas').DataTable({
        language: languagenOptions(),
        responsive: true,
        processing: true,
        data: listItens,
        columns: [
            { "data": "id", title: "id"},            
            { "data": "acao", title: "acao"},
            { "data": "setor", title: "setor"}, 
            { "data": "subsetor", title: "subsetor"},
            { "data": "segmento", title: "segmento"}, 
            { "data": "preco", title: "preco"}, 
            { "data": "cotacao_maxima_12_meses", title: "Máxima 12 meses"},
            { "data": "queda_do_maximo", title: "Máxima queda"}
        ]
    });
    $('#table-acao-alta').DataTable({
        language: languagenOptions(),
        responsive: true,
        processing: true,
        data: listItens,
        serverSide: true,
        ajax: 'https://api.hgbrasil.com/finance/stock_price?key=05738cc1&symbol=get-high',
        columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'responsavel', name: 'responsavel' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' },
            { data: 'status', name: 'status' },
            { data: 'action', name: 'action', width: '20%' }
        ]
        
    });
    $('#table-acao-baixa').DataTable({
        language: languagenOptions(),
        responsive: true,
        processing: true,
        data: listItens,
        columns: [
            { "data": "id", title: "id"},            
            { "data": "acao", title: "acao"},
            { "data": "setor", title: "setor"}, 
            { "data": "subsetor", title: "subsetor"},
            { "data": "segmento", title: "segmento"}, 
            { "data": "preco", title: "preco"}, 
            { "data": "cotacao_maxima_12_meses", title: "Máxima 12 meses"},
            { "data": "queda_do_maximo", title: "Máxima queda"}
        ]
    });
});
