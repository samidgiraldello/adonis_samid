import type  {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from '@ioc:Rlanz/Queue';
import { Queue } from '@ioc:Rlanz/Queue';

export default class SendPushesController {
    public async send({ request }: HttpContextContract) {
        const { id, tittle, body } = request.all()
        const userDB = await User.findOrfail(id)
        Queue.dispacth('App/Jobs/SendPush', {
            to: userDB.token,
            tittle,
            body
        });
        return userDB
    }
}
