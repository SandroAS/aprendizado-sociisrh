var form_rotatividade   = document.getElementById('form_rotatividade');
var media_admissao      = document.getElementById('media_admissao');
var media_demissao      = document.getElementById('media_demissao');
var de_data             = document.getElementById('de_data');
var ate_data            = document.getElementById('ate_data');
var numero_funcionarios = document.getElementById('numero_funcionarios');
var media_salarial      = document.getElementById('media_salarial');
var taxa_rotatividade   = document.getElementById('taxa_rotatividade');
var custo_rotatividade  = document.getElementById('custo_rotatividade');

form_rotatividade.addEventListener('submit', function(event){
    event.preventDefault();
    //CAlCULO DE ROTATIVIDADE
    console.log(parseInt(media_demissao.value));
    var rotatividade = ((parseInt(media_admissao.value) + parseInt(media_demissao.value)) / 2) / parseInt(numero_funcionarios.value);
    //VARIAVEIS DE DATA
    //-------DE:-------------------------------
    var periodo_de = de_data.value.split("-");
    var ano_de = periodo_de[0];
    var mes_de = periodo_de[1];
    var dia_de = periodo_de[2];
    //-------ATÉ:------------------------------
    var periodo_ate = ate_data.value.split("-");
    var ano_ate = periodo_ate[0];
    var mes_ate = periodo_ate[1];
    var dia_ate = periodo_ate[2];

    //TRANSFORMANDO DATA EM NUMERO
    ano_de = parseInt(ano_de);
    mes_de = parseInt(mes_de);
    dia_de = parseInt(dia_de);

    ano_ate = parseInt(ano_ate);
    mes_ate = parseInt(mes_ate);
    dia_ate = parseInt(dia_ate);
    
    //CALCULO DO PERIODO (MÊS)
    if (ano_de < ano_ate || (ano_de == ano_ate && mes_de < mes_ate) || (ano_de == ano_ate && mes_de == mes_ate && dia_de < dia_ate)){
        if (ano_ate - ano_de == 0){ 
            var dif_ano = 0;
            var dif_mes = mes_ate - mes_de;
        } else if (ano_ate - ano_de == 1 && mes_de > mes_ate) {
            var dif_ano = 0;
            var dif_mes = mes_ate + (12 - mes_de);
        } else if (ano_ate - ano_de == 1 && mes_de == mes_ate) {
            var dif_ano = 12;
            var dif_mes = 0;
        } else if (ano_ate - ano_de == 1 && mes_de < mes_ate) {
            var dif_ano = 12;
            var dif_mes = mes_ate - mes_de;
        } else {
            if (mes_de > mes_ate) {
                var dif_ano = ((ano_ate - ano_de) * 12) - 12;
                var dif_mes = mes_ate + (12 - mes_de);
            } else if (mes_de == mes_ate) {
                var dif_ano = ((ano_ate - ano_de) * 12);
                var dif_mes = 0;
            } else {
                var dif_ano = ((ano_ate - ano_de) * 12);
                var dif_mes = mes_ate - mes_de;
            }
        }
        var periodo = dif_ano + dif_mes;
    } else {
        console.log("erro");
    }
    //CALCULO DO SALDO ACUMULADO DO FGTS COM MULTA
    var salario = parseInt(media_salarial.value);
    var FGTS = salario * (8 / 100);
    var juros = (3 / 100) / 12;
    var custo = 0;
    var FGTS_variavel = FGTS;

    for (var i = 0; i < periodo; i++) {
        custo = FGTS_variavel + (FGTS_variavel * juros);
        FGTS_variavel = FGTS + custo;
    }
    custo = (custo + (custo * (40 / 100))) * parseInt(media_demissao.value);
    //RETORNO DO RESULTADO
    document.getElementById('taxa_rotatividade').value = rotatividade * 100 + "%";
    document.getElementById('custo_rotatividade').value = "R$ " + Math.round(custo);

})

