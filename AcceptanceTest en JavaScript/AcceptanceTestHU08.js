const { Given, And, When, Then } = require('cucumber');

Scenario('Incluir logros por cada desafío ', function () {
    Given('un usuario haya practicado con el material didáctico que se le brindo para realizar su próximo desafío de lectura programado.', function () {});
    And('el usuario realice un desafío de lectura sin ningún inconveniente.', function () {});
    When('el sistema detecte que el desafío fue realizado con éxito.', function () {});
    Then('el perfil del usuario recibirá puntos de experiencia dependiendo del porcentaje de aciertos que obtuvo en el desafío que realizo. ', function () {});
    And('el usuario podrá canjearlos dentro del sistema por mejoras en su perfil y/o poder dar un segundo intento en ciertos desafíos de mayor peso.', function () {});
});


/*
Input:
- Desafío
Output:
- Puntos de experiencia

*/