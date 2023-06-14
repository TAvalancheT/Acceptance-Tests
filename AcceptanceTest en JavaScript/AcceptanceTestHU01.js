const { Given, And, When, Then } = require('cucumber');

Scenario('Ingresar a la app', function () {
    Given('un usuario quiera loguearse en el sistema y no perder su progreso en la app', function () { });
    When('el usuario ingrese su [usuario] y [contraseña] correctamente', function () { });
    Then('el sistema le permitira [ingresar] a la app', function () { });
});
/*
Input:
- Usuario
- Contraseña
Output:
- Ingresar 
*/

