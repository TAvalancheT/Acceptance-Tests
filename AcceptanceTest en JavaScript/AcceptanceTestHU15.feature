const { Given, And, When, Then } = require('cucumber');

Scenario('Mostrar grafico de progreso', function () {
    Given('un apoderado desea tener una gráfica que muestre el progreso de su menor hijo(a)', function () { });
    When('el apoderado selecciona el apartado de progreso "Progreso".', function () { });
    Then('el apoderado podrá visualizar un gráfico de barras sobre el progreso de su hijo(a) a lo largo de las semanas.', function () { });
});
Escenario: Mostrar grafico de progreso
    Dado un apoderado desea tener una gráfica que muestre el progreso de su menor hijo(a)
    Cuando el apoderado haga [clic en el apartado de progreso "Progreso"].
    Entonces el apoderado podrá visualizar un [gráfico de barras] sobre el progreso de su hijo(a) a lo largo de las semanas.

/*
Input:
- Clic en progreso
Output:
- Gráfico de barras 
*/

