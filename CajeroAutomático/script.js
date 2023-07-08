const consulta = document.getElementById('consulta');
const ingresar = document.getElementById('ingresar');
const login = document.getElementById('login');
const monto = document.getElementById('monto');
const nombreCuenta = document.getElementById('nombre');
const retirar = document.getElementById('retirar');
const saldo = document.getElementById('saldo');
const select = document.getElementById('clientes');
const password = document.getElementById('password');
const modal = document.querySelector('dialog');
const msg = document.getElementById('msg');

const cuentas = [
  { nombre: 'Mali', saldo: 200, password: 1234, login: false },
  { nombre: 'Gera', saldo: 290, password: 4586, login: false },
  { nombre: 'Maui', saldo: 67, password: 7868, login: false },
];

const guardarCuentas = () => {
  const cuentasSinPassword = cuentas.map((cuenta) => {
    return {
      nombre: cuenta.nombre,
      saldo: cuenta.saldo,
    };
  });
  localStorage.setItem('cuentas', JSON.stringify(cuentasSinPassword));
};

const cargarCuentas = () => {
  const cuentasGuardadas = JSON.parse(localStorage.getItem('cuentas'));
  if (cuentasGuardadas) {
    cuentasGuardadas.forEach((cuentaGuardada) => {
      const cuenta = cuentas.find(
        (cuenta) => cuenta.nombre === cuentaGuardada.nombre
      );
      cuenta.saldo = cuentaGuardada.saldo;
      cuenta.login = cuentaGuardada.login;
    });
  }
};

cargarCuentas();

const validarPassword = () => {
  const nombre = select.value;

  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  if (password.value !== '' && cuenta.password === Number(password.value)) {
    cuenta.login = true;
    password.disabled = true;
    login.disabled = true;
    login.innerText = 'Bienvenid@';
    login.style.backgroundColor = 'gray';
    mostrarModal('Bienvenid@');
    return true;
  }
  mostrarModal('Ingresa una contraseña válida');
  return false;
};

const mostrarSaldo = (nombre, respuesta = '') => {
  nombreCuenta.innerText = nombre;
  saldo.style.color = '';
  saldo.innerText = respuesta;
};

const actualizarSaldo = (nombre, monto, mensaje) => {
  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  if (!cuenta.login) {
    mostrarModal('Tienes que ingresar tu contraseña');
    return;
  }
  cuenta.saldo += monto;
  mostrarSaldo(nombre, mensaje);
};

const consultar = () => {
  const nombre = select.value;
  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  if (!cuenta.login) {
    mostrarModal('Tienes que ingresar tu contraseña');
    return;
  }
  mostrarSaldo(nombre, `Tu saldo es: $${cuenta.saldo}`);
};

const depositar = () => {
  const nombre = select.value;
  const montoIngresado = Number(monto.value);

  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  if (!cuenta.login) {
    mostrarModal('Tienes que ingresar tu contraseña');
    return;
  }

  if (montoIngresado <= 0) {
    mostrarError('Tienes que ingresar una cantidad mayor a $0');
    return;
  }

  const saldoActualizado = cuenta.saldo + montoIngresado;

  if (saldoActualizado > 990) {
    mostrarError('No puedes tener más de $990 en tu cuenta');
    return;
  }

  monto.value = '';

  actualizarSaldo(
    nombre,
    montoIngresado,
    `Depósito de $${montoIngresado} realizado, tu nuevo saldo es: $${saldoActualizado}`
  );

  guardarCuentas();
};

const retirarCantidad = () => {
  const nombre = select.value;
  const montoRetirado = Number(monto.value);

  const cuenta = cuentas.find((cuenta) => cuenta.nombre === nombre);
  const saldoActualizado = cuenta.saldo - montoRetirado;

  if (!cuenta.login) {
    mostrarModal('Tienes que ingresar tu contraseña');
    return;
  }

  if (montoRetirado <= 0) {
    mostrarError('Tienes que ingresar una cantidad mayor a $0');
    return;
  }

  if (saldoActualizado < 10) {
    mostrarError('No puedes tener menos de $10 en tu cuenta');
    return;
  }

  if (montoRetirado > cuenta.saldo) {
    mostrarError('No tienes fondos suficientes');
    return;
  }

  monto.value = '';

  actualizarSaldo(
    nombre,
    -montoRetirado,
    `Retiro de $${montoRetirado} realizado, tu nuevo saldo es: $${saldoActualizado}`
  );

  guardarCuentas();
};

const logout = () => {
  const cuenta = cuentas.find((cuenta) => cuenta.nombre === select.value);
  cuenta.login = false;
  password.value = '';
  password.disabled = false;
  login.disabled = false;
  login.innerText = 'Ingresar';
  login.style.backgroundColor = '';
  monto.value = '';
  mostrarSaldo('', '');
};

const mostrarError = (mensaje) => {
  saldo.style.color = 'red';
  saldo.innerText = mensaje;
};

const mostrarModal = (mensaje) => {
  modal.showModal();
  msg.innerText = mensaje;
};

cuentas.forEach((cuenta) => {
  const option = document.createElement('option');
  option.value = cuenta.nombre;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});

consulta.addEventListener('click', consultar);
ingresar.addEventListener('click', depositar);
login.addEventListener('click', validarPassword);
retirar.addEventListener('click', retirarCantidad);
select.addEventListener('change', logout);
