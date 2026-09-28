
const amqp=require('amqplib');
(async()=>{const c=await amqp.connect('amqp://localhost');const ch=await c.createChannel();await ch.assertQueue('alertas');console.log('Consumidor iniciado');ch.consume('alertas',m=>console.log('Alerta recebido',m.content.toString()));})();
