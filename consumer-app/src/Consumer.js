require('dotenv').config();

const amqp = require('amqplib');
const SongPlaylistsService = require('./SongPlaylistsService');
const MailSender = require('./MailSender');
const Listener = require('./Listener');

const init = async () => {
  const songPlaylistsService = new SongPlaylistsService();
  const mailSender = new MailSender();
  const listener = new Listener(songPlaylistsService, mailSender);

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  const channel = await connection.createChannel();

  const queeuName = 'export:songAtPlaylists';

  await channel.assertQueue(queeuName, {
    durable: true,
  });

  channel.consume(queeuName, listener.listen, { noAck: true });
};
init();
