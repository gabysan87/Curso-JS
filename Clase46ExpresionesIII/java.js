// Delimitadores:
// ^ Antes de este simbolo no puede haber nada
// $ Despues de este simbolo no puede haber nada ^hola$

// / Cantidad:
// -llaves: lo que esta antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles.
// {n} Se tiene que repetir entre n y n veces, ambas incluidas.
// {n,} Se tiene que repetir como minimo n veces y sin maximo
// ^[a-zA-Z] {1,3}@{1}$

// -asterisco:  Lo que esta antes del asterisco puede estar, puede no estar y se puede repetir. .*@.*\..*

// -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
// ^[ae]?$

// -operador más: Lo que está nates del + tiene que estar una vez como mínimo A-[0-9]+

