$().ready(function(){
// name: require
    $("#idForm").validate({
        rules: {
            FirstName: {
                required: true,
                minlength: 2
            },
            SecondName: {
                required: true,
                minlength: 2
            },
            UserName: {
                required: true,
                minlength: 2
            },
            idPassword: {
                required: true,
                minlength: 5
            },
            idConfirmarPassword: {
                required: true,
                minlength: 5,
                equalTo: "#idPassword"
            },
            InputEmail: {
                required: true,
                email: true
            },
            testeConfianca: {
                requered: "checkbox1:checked" && "checkbox2:checked" && true, 
                minlength: 2
            },
            checkbox1: "required",
            checkbox2: "required"

        },
        messages: {
            FirstName: {
                required: "coloca o primeiro nome",
                minlength: "no minimo 2 caracteres"
            },
            SecondName: {
                required: "coloca o segundo nome",
                minlength: "Sério q seu nome tem 1 caractere?"
            },
            UserName: {
                required: "coloca oque quiser",
                minlength: "tem q ter pelo menos 2 caracteres. Eu sei... " + "" + "então não é qualquer coisa"
            },
            IdPassword: {
                required: "coloque uma senha",
                minlength: "tem q ter pelo menos 2 caracteres"
            },
            ConfirmaTermo: {
                requered: "coloque a mesma senha",
                minlength: "tem q ter pelo menos 2 caracteres",
                equalTo: "a senha tem q ser a msm da de cima"
            },
            checkbox1: "aceita q doi menos",
            checkbox2: "Só da pro submeter o formulário dp q marcar tds checkbox"
        }   
    });

    $("#UserName").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });
    var TemCerteza = $("#checkbox2");
    var TemSim = TemCerteza.is(":checked");
    var checkbox2s = $("#testeConfianca")[TemSim ? "removeClass" : "addClass"] ("hide");
    var ConfiancaInputs = checkbox2s.find("input").attr("disabled, !TemSim");
    TemCerteza.click(function() {
        checkbox2s[this.checked ? "removeClass" : "addClass"]("hide");
        ConfiancaInputs.attr("disabled", !this.checked);
    });
});

jQuery.validator.addMethod("webmail", function(value, element) {
    return this.optional(element) || /^.+@webmail.com$/.test(value);
}, "Só pode usar o webmail.com no email");