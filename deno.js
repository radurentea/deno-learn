const food = Deno.args[0];
const parent = Deno.args[1];
if (food === 'love' && parent === 'radu') {
   console.log('🦕...Deno is born!')
}

setTimeout(() => {
   console.log('check');
   console.table(Deno.metrics());
},1000)