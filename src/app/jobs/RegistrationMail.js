import Mail from "../lib/Mail";


export default {
  key: 'RegistrationMail',

  // just keep it in background til its done

  async handle({ data }) {


    const { user } = data


    await Mail.sendMail({
      from: 'Queue Teste <queue@teste.com.br>',
      to: `${user.name}, <${user.email}>`,
      subject: 'Cadastro de usuário',

      html: `Olá, ${name}, bem-vindo ao sistema de filas da Rocketseat`

    })
  }
}


