import nodemailer from 'nodemailer'

import mailConfig from '../../config/mailConfig'


// creating a module to use the lib

export default nodemailer.createTransport(mailConfig)