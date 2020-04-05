
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('conjuntos', {});
  });
  
  router.post('/', function (req, res, next) {
    console.log(req.body);
    let data = { result: Array.from(union(req.body.A,req.body.B)),
        result1: Array.from(diferencia((req.body.A),(req.body.B)))
      //  result2: interseccion(req.body.A,req.body.B)
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
    let conjuntoDiferencia = new Set([...conjunto1].filter(x => !conjunto2.has(x)));
    //console.log(conjuntoDiferencia);    
    return conjuntoDiferencia;
};

let A = new Set([1, 2, 3, 4, 5, 6]);
let B = new Set([3, 8, 9, 10]);

 let res = diferencia(A,B);
 console.log(res);
 


function interseccion(conjunto1,conjunto2){
    let conjuntoInterseccion = new Set();

    for (const e of conjunto1) {
        if (conjunto2.has(e)){
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