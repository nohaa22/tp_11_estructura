//
const path =require ('path');
//
const express =require ('express');
//ejecuccion de express
const app = express();
//
const PORT= 3000;



//recursos estatcios
app.use(express.static(path.join(__dirname, "public")));

//RUTAS
app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'views','home.html' ))
});

//LEVANTAR EL SERVIDOR
app.listen(port, () => console.log(`Server running in http://localhost:`+ PORT));