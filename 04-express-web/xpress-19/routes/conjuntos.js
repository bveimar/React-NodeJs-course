
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('conjuntos', {});
  });
  //post
  router.post('/', function (req, res, next) {
    console.log(req.body.B);
    let A = req.body.A.split(',').join('');

    let B = req.body.B.split(',').join('');
    
    let data = { result: Array.from(union(A,B)),  //mystring = mystring.split('/r').join('/')
        result1: Array.from(diferencia(A,B)),
        result2: Array.from(interseccion(A,B))
    };
    res.render('conjuntos', data);
  });
  

function union(conjunto1,conjunto2){
    let conjuntoUnion = new Set([...conjunto1, ...conjunto2]);
    console.log(conjuntoUnion);

    return conjuntoUnion;
};
//let A = new Set([1, 2, 3]);
//let B = new Set([5, 6, 7]);

//let resul = union(A,B);



function diferencia(conjunto1,conjunto2){
    let conjuntoDiferencia = new Set([...conjunto1].filter(x => !conjunto2.includes(x)));
    console.log(conjuntoDiferencia);    
    return conjuntoDiferencia;
};

//let A = new Set([1, 2, 3, 4, 5, 6]);
//let B = new Set([3, 8, 9, 10]);

 //let res = diferencia(A,B);
 //console.log(res);
 


function interseccion(conjunto1,conjunto2){
    let conjuntoInterseccion = new Set();
    console.log(conjuntoInterseccion);    

    for (const e of conjunto1) {
        if (conjunto2.includes(e)){
            conjuntoInterseccion.add(e);
        }
    }

    return conjuntoInterseccion;
};

//let A = new Set([1, 2, 3, 4, 5, 6]);
//let B = new Set([5, 6, 7, 8, 9, 10]);

//let resultado = interseccion(A,B);
//console.log(resultado);


module.exports = router;