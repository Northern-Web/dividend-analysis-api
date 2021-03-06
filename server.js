const express  = require('express');
const mongoose = require('mongoose');
const config   = require('./config/config.js');

const app = express();

// App uses
app.use(express.json());

// Router requirements
const stockRoutes    = require("./routes/stock.routes");
const dividendRoutes = require("./routes/dividend.routes");

// Router uses
app.use("/stocks", stockRoutes);
app.use("/dividends", dividendRoutes);


app.listen(process.env.PORT || 3000, () => {
  mongoose.connect(
    global.gConfig.MONGODB_URI,
    {
      useNewUrlParser:    true,
      useUnifiedTopology: true
    }
  );
  console.log(`API Server booting in \"${global.gConfig.config_id}\" mode...`);
  console.log(`Successful connection to database \"${global.gConfig.database}\".`);
  console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});
