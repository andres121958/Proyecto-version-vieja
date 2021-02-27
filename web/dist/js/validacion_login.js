let username = $("#username");
let password = $("#password");
$("button#lgn").click(function () {
    if (username.val() === "auxiconta" && password.val() === "auxcont26") {
        window.location = '../../DNA_SPORT/Aux-Contab/pedidos.xhtml';
    } else {
        if (username.val() === "admin" && password.val() === "admin26") {
            document.location.href = '../../DNA_SPORT/Admin/index.xhtml';

        } else {
            if (username.val() === "cliente" && password.val() === "cliente26") {
                document.location.href = '../../DNA_SPORT/Cliente/estado_pedido.xhtml';
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Error',
                    text: '¡Usuario incorrecto!',
                });
            }
        }
    }
});
