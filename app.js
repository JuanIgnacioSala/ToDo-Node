const argv = require('./Config/yargs').argv;
var colors = require('colors');
const toDo = require('./to-do/todo');
const update = require('./to-do/todo');
const deleteTask = require('./to-do/todo')


let comando = argv._[0].toLowerCase();


switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('-----------Por Hacer----------'.green);
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado:', tarea.completado);
            //console.log('------------------------------'.green);
            console.log(' ');
        }
        break;

    case 'actualizar':
        let actualizado = toDo.update(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.deleteTask(argv.descripcion)
        break;
    default:
        console.log("Comando desconocido");
}