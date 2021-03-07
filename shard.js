const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'Nzc3MTg5MjgzNzk0NTE4MDc2.X6_z7A.xk6Q1pXmyI-7dmnn-pelwt5zJRk'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();