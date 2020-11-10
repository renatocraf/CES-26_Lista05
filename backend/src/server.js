
const express = require('express');
const app = require('express')();
const cookieParser = require('cookie-parser');
const fs = require('fs');
const porta = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post("/formSubmit", function(req, res) {   
    console.log(req.body)
    const novoUsuario = {
      nome: req.body["nome"],
      idade: req.body['idade'],
    };

    let file = "./data/data.json";

    if (novoUsuario['idade'] > 17){

        fs.readFile(file, (err, data) => {
            if (err && err.code === "ENOENT") {
                // But the file might not yet exist.  If so, just write the object and bail
                return fs.writeFile(file, '[' + JSON.stringify(novoUsuario) + ']', error => console.error);
            }
            else if (err) {
                // Some other error
                console.error(err);
            }    
            // 2. Otherwise, get its JSON content
            else {
                try {
    
                    // 3. Append the object you want
                    const fileData = data.slice(0, -1) + ',\n' + JSON.stringify(novoUsuario) + ']';
        
                    //4. Write the file back out
                    return fs.writeFile(file, fileData, error => console.error)
                } catch(exception) {
                    console.error(exception);
                }
            }
        });
        
        res.send('Sucesso');
        console.log('Usuário Adicionado no JSON');
    }
    else {
        res.send('Idade mínima não atingida. Usuário não adicionado');
        console.log('Usuário não adicionado.');
    }
  });


app.listen(porta,()=>{
    console.log('Backend Trabalhando..')
})


  module.exports = app;