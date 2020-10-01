const fs = require('fs');


let listaToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listaToDo);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const cargarDB = () => {

    try {

        listaToDo = require('../DB/data.json');

    } catch (error) {
        listaToDo = [];
    }


};

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listaToDo.push(toDo);

    saveDB();

    return toDo;
};

const getListado = () => {
    cargarDB();
    return listaToDo;
};


const update = (descripcion, completado = true) => {
    cargarDB();
    let index = listaToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listaToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }

};

const deleteTask = (descripcion) => {
    cargarDB();
    let newList = listaToDo.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (listaToDo.length === newList.length) {
        console.log("No se encontro la tarea buscada".red);
        return false;
    } else {
        listaToDo = newList;
        saveDB();
        return true;
    }
};


module.exports = {
    crear,
    getListado,
    update,
    deleteTask
};