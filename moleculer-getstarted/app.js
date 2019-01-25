const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.createService({
  name: "math",
  actions: {
    add(ctx) {
      return Number(ctx.params.a) + Number(ctx.params.b);
    }
  }
});

broker
  .start()
  // call service
  .then(() => broker.call("math.add", { a: 5, b: 3 }))
  .then(res => console.log("5 + 3 = ", res))
  .catch(err => console.error("Erro: " + err.message));
