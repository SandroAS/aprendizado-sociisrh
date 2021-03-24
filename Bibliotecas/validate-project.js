$().ready(function(){
// name: require
    $("#formProject").validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            senha: {
                required: true,
                minlength: 5
            },
            confirmarSenha: {
                required: true,
                minlength: 5,
                equalTo: "#senha"
            },
            digito: {
                requered: true
            }

        },
        messages: {
            nome: {
                required: "coloca o primeiro nome",
                minlength: "no minimo 2 caracteres"
            },
            email: {
                required: "Favor inserir um email válido"
            },
            senha: {
                required: "Você deve criar uma senha segura",
                minlength: "Sua senha deve ter no mínimo 5 caracteres"
            },
            confirmarSenha: {
                requered: "Coloque a mesma senha",
                minlength: "Sua senha deve ter no mínimo 5 caracteres",
                equalTo: "A senha não esta igual a de cima..."
            },
        }   
    });
});