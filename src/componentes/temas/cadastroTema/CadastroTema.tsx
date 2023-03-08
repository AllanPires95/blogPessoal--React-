/*import React, {ChangeEvent, useState} from 'react' 
import {Button, Container, TextField, Typography} from '@material-ui/core'


function CadastroTema(){
    const
    const [tema, setTema] = useState <Tema>({
        id: 0,
        descricao: '    ' ... incluir a model primeiro*
    }) 

    function updateModel (event: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [event.target.name]: event.target.value
        })
    } 

    async function onSubmit(event:ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try{
            await post('/temas, tema, setTema, {headers:
                Authorization:  token {

            }

        }')
        alert('Tema cadastrado com sucesso')
        } catch {
            alert('Erro no cadastro, por favor confira o campo de descrição')
        }
        
    } 
    return (
        <>
        <Container maxWidth='sm'>
        <form onSubmit={onSubmit}>
        <Typography> Cadastre um tema </Typography>
        <TextField
        value={tema.descricao}
        onChange={(event: ChangeEvent<HTMLInputElement>) => uptdateModel(event)}
            name='descricao'    
            id='descricao'
            label='Descricao do tema'
            variant='outlined'
            fullWidth
        />

            <Button variant='contained' type='submit' >Cadastrar</Button>
        </form>
        </Container>
        </>
    );
}
export default CadastroTema*/