const { Given, And, When, Then } = require('cucumber');

Scenario('Puntos de experiencia por cada nuevo suscriptor', function () {
    Given('un usuario decida hacer [clic el enlace del botón "Compartir"] que se encuentra en su perfil a algún conocido.', function () {});
    And('si el conocido del usuario se inscribió por medio de ese enlace.', function () {});
    When('el sistema valida que la suscripción fue hecha por medio de un enlace compartido.', function () {});
    Then('el sistema suma una [50 puntos de experiencia] en el perfil del usuario que compartió el enlace con su conocido (que ya es un nuevo usuario).', function () {});
    And('el usuario podrá canjearlos dentro del sistema por mejoras en su perfil y/o poder dar un segundo intento en ciertos desafíos de mayor peso.', function () {});
});

/*
Input:
- clic el enlace del botón "Compartir"
Output:
- 50 puntos de experiencia 
*/

