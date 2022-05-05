import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b72a784066a3c5",
      pass: "b022679d0cc3df"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Familia Inoue <tech@widget.com>',
            to: 'Pietro Inoue <rmakotoinoue@gmail.com>',
            subject: subject,
            html: body,
        });
    
    }
}