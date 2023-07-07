const resultado = document.getElementById('result');
const section = document.querySelector('section');

const productos = [
  { nombre: 'Aqua', precio: 200 },
  { nombre: 'Emoción', precio: 180 },
  { nombre: 'Alegría', precio: 160 },
  { nombre: 'Frescura', precio: 150 },
];

const vendedores = {
  Juana: { ventas: [0, 0, 0, 0], total: 0 },
  Pedro: { ventas: [0, 0, 0, 0], total: 0 },
};

const root = document.getElementById('root');
for (const vendedor in vendedores) {
  console.log(vendedor);
  const button = document.createElement('button');
  button.textContent = vendedor;
  button.addEventListener('click', () => registarVentas(vendedor));
  root.appendChild(button);
}

const registarVentas = (vendedor) => {
  for (const producto in productos) {
    let cantidad = prompt(
      `Ingrese cantidad de ${productos[producto].nombre} vendidos por ${vendedor}`
    );

    if (isNaN(cantidad) || cantidad === null) {
      alert('Ingrese un numero valido');
      cantidad = prompt(
        `Ingrese cantidad de ${productos[producto].nombre} vendidos por ${vendedor}`
      );
    }
    vendedores[vendedor].ventas[producto] = Number(cantidad);
    vendedores[vendedor].total += cantidad * productos[producto].precio;
  }
};

const empleadoDelMes = () => {
  if (vendedores.Juana.total === vendedores.Pedro.total) {
    return 'ninguno hubo un empate entre Juana y Pedro';
  }
  let mayor = 0;
  let vendedorDelMes = '';
  for (const vendedor in vendedores) {
    if (vendedores[vendedor].total > mayor) {
      mayor = vendedores[vendedor].total;
      vendedorDelMes = vendedor;
    }
  }
  return vendedorDelMes;
};

const mostrarVentas = () => {
  const separador = '═';
  const tabla = [];

  const encabezados = [
    'Vendedor',
    ...productos.map((producto) => producto.nombre),
    'Total',
  ];
  tabla.push(encabezados);

  const lineaHorizontal = encabezados.map(() => separador.repeat(8));
  tabla.push(lineaHorizontal);

  for (const vendedor in vendedores) {
    const datosVendedor = [
      vendedor,
      ...vendedores[vendedor].ventas,
      vendedores[vendedor].total,
    ];
    tabla.push(datosVendedor);
  }

  for (const fila of tabla) {
    let filaTabla = '║';
    for (let i = 0; i < fila.length; i++) {
      const celda = fila[i].toString().padEnd(8, ' ');
      filaTabla += ` ${celda} ║`;
    }
    console.log(
      `╔${separador.repeat(10)}${tabla[0]
        .map(() => separador.repeat(8))
        .join(separador.repeat(10))}╗`
    );
    console.log(filaTabla);
  }

  console.log(
    `╚${separador.repeat(10)}${tabla[0]
      .map(() => separador.repeat(8))
      .join(separador.repeat(10))}╝`
  );

  const tablaHTML = document.createElement('table');
  tablaHTML.classList.add('tabla');
  const encabezadoHTML = document.createElement('tr');
  for (const encabezado of encabezados) {
    const celda = document.createElement('th');
    celda.textContent = encabezado;
    encabezadoHTML.appendChild(celda);
  }
  tablaHTML.appendChild(encabezadoHTML);
  for (const fila of tabla) {
    const filaHTML = document.createElement('tr');
    for (const celda of fila) {
      const celdaHTML = document.createElement('td');
      celdaHTML.textContent = celda;
      filaHTML.appendChild(celdaHTML);
    }
    tablaHTML.appendChild(filaHTML);
  }

  section.innerHTML = '';
  section.appendChild(tablaHTML);

  const vendedorDelMes = document.createElement('p');
  vendedorDelMes.textContent = `El vendedor del mes es ${empleadoDelMes()}`;
  section.appendChild(vendedorDelMes);
};

result.addEventListener('click', () => {
  mostrarVentas();
  console.log(`El vendedor del mes es ${empleadoDelMes()}`);
});
