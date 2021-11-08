const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

//GET all employees Mostrar todos los empleados
router.get('/TodosLosEmpleados', (req, res) => {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

// GET An Employee Mostrar empleado especifico
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    console.log('Solicitando info: ',id);
    mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  // DELETE An Employee Borrar un empleado
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado eliminado'});
      } else {
        console.log(err);
      }
    });
  });
  
  // INSERT An Employee Insertar un empleado
  router.post('/', (req, res) => {
    const {id, nombre, salario} = req.body;
    console.log(id, nombre, salario);
    const query = `
      CALL inserta_actualiza_empleado(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado insertado'});
      } else {
        console.log(err);
      }
    });
  
  });
  
  router.put('/:id', (req, res) => {
    const { nombre, salario } = req.body;
    const { id } = req.params;
    const query = `
      CALL inserta_actualiza_empleado(@?, @?, @?);
    `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado actualizado'});
      } else {
        console.log(err);
      }
    });
  });
  


module.exports = router;