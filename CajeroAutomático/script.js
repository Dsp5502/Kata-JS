const consulta = document.getElementById('consulta');
const ingresar = document.getElementById('ingresar');
const monto = document.getElementById('monto');
const nombreCuenta = document.getElementById('nombre');
const retirar = document.getElementById('retirar');
const saldo = document.getElementById('saldo');
const select = document.getElementById('clientes');

const cuentas = [
  { nombre: 'Mali', saldo: 200 },
  { nombre: 'Gera', saldo: 290 },
  { nombre: 'Maui', saldo: 67 },
];

const mostrarSaldo = (nombre, respuesta = '') => {
  nombreCuenta.innerText = nombre;
  saldo.style.color = '';
  saldo.innerText = respuesta;
};

const actualizarSaldo = (nombre, monto, mensaje) => {
  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  cuenta.saldo += monto;
  mostrarSaldo(nombre, mensaje);
};

const consultar = () => {
  const nombre = select.value;
  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  mostrarSaldo(nombre, `Tu saldo es: $${cuenta.saldo}`);
};

const depositar = () => {
  const nombre = select.value;
  const montoIngresado = Number(monto.value);

  if (montoIngresado <= 0) {
    mostrarError('Tienes que ingresar una cantidad mayor a $0');
    return;
  }

  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  const saldoActualizado = cuenta.saldo + montoIngresado;

  if (saldoActualizado > 990) {
    mostrarError('No puedes tener más de $990 en tu cuenta');
    return;
  }

  actualizarSaldo(
    nombre,
    montoIngresado,
    `Depósito de $${montoIngresado} realizado, tu nuevo saldo es: $${saldoActualizado}`
  );
};

const retirarCantidad = () => {
  const nombre = select.value;
  const montoRetirado = Number(monto.value);

  if (montoRetirado <= 0) {
    mostrarError('Tienes que ingresar una cantidad mayor a $0');
    return;
  }

  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  const saldoActualizado = cuenta.saldo - montoRetirado;

  if (saldoActualizado < 10) {
    mostrarError('No puedes tener menos de $10 en tu cuenta');
    return;
  }

  if (montoRetirado > cuenta.saldo) {
    mostrarError('No tienes fondos suficientes');
    return;
  }

  actualizarSaldo(
    nombre,
    -montoRetirado,
    `Retiro de $${montoRetirado} realizado, tu nuevo saldo es: $${saldoActualizado}`
  );
};

const mostrarError = (mensaje) => {
  saldo.style.color = 'red';
  saldo.innerText = mensaje;
};

// Agregar las cuentas al select
cuentas.forEach((cuenta) => {
  const option = document.createElement('option');
  option.value = cuenta.nombre;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});

consulta.addEventListener('click', consultar);
ingresar.addEventListener('click', depositar);
retirar.addEventListener('click', retirarCantidad);
