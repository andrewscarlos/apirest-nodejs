const User = require('../Models/User')

module.exports = {


    async index(req,res){                                                                    //LISTA TODOS OS USUARIOS
        const user = await User.findAll();
            if (user =='' || user == null){
                return res.status(200).send({message: "Nenhum usuario cadastrado"})
            }
        return res.status(200).send({ user })
    },


    async indexforid(req,res){                                                     //LISTA O USUARIO POR ID
        const user = await User.findAll({ where: { id: req.params.id }});
        return res.status(200).send(user)
    },



    async store(req,res){                                                                           //INSERI UM USUARIO
        const {name, sobrenome, idade, peso, altura } = req.body;

        const user = await User.create({name, sobrenome, idade, peso, altura})

        return  res.status(200).send({
            status:1,
            message : 'Usuario cadastrado com sucesso! ',
            user
        })
    },



    async update(req,res){                                                                                   //ATUALIZA UM USUARIO
        const {name, sobrenome, idade, peso, altura } = req.body;
        const {user_id} = req.params;

        await User.update({
            name, sobrenome, idade, peso, altura
        },{
            where:{
                id: user_id
            }
        })

        return res.status(200).send({
            status:1,
            message: "Usuario atualizado com sucesso!"
        })
    },



    async delete(req,res){                                                                                  //DELETA UM USUARIO
        const {user_id} = req.params;

        await User.destroy({
            where:{
                id: user_id
            }
        });
        return res.status(200).send({
            status:1,
            message: "Usuario deletado com sucesso!"
        })

    },
}