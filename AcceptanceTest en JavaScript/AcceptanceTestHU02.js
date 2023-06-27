const { Given, And, When, Then } = require('cucumber');

Scenario('Se elimina la cuenta del usuario', function () {
    Given('el usuario se dirige a "cuenta" ', function () {});
    And('el usuario accede a la "configuración de la cuenta"', function () {});
    When('el usuario aprieta el botón de "eliminar cuenta" al usuario se le comunicará que tendrá un tiempo de 20 días para reconsiderar su elección, a través de un correo. ', function () {});
    Then('cuando el tiempo haya concluido, el usuario verá una ventana emergente para confirmar la eliminación de la cuenta y la información  almacenada en la app se eliminará.', function () {});

});

/*
Input:
- cuenta
- configuración de la cuenta
- eliminar cuenta
Output:
- confirmación de eliminación de cuenta

*/