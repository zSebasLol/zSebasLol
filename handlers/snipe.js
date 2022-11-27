const { Map } = require('enmap') 

client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id, 
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})