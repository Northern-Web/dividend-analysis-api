const mongoose  = require('mongoose');
const timestamp = require('mongoose-timestamp');

var StockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ticker: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    dropDups: true
  },
  industry: {
    type: String,
    required: true,
    trim: true
  },
  past_dividends: [{
    dividend_amount: {
      type: Number
    },
    date_of_approval: {
      type: Date
    },
    ex_date: {
      type: Date
    },
    payment_date: {
      type: Date
    }
  }],
  financials: {
    income_statements: [{
      year: {
        type: Number
      },
      representation: {
        type: String
      },
      total_revenue: {
        type: Number
      },
      cost_of_revenue: {
        type: Number
      },
      gross_profit: {
        type: Number
      },
      operating_expenses: {
        type: Number
      },
      operating_income: {
        type: Number
      },
      pretax_income: {
        type: Number
      },
      net_income: {
        type: Number
      }
    }],
    balance_sheet: [{
      year: {
        type: Number
      },
      representation: {
        type: String
      },
      assets: {
        type: Number
      },
      inventory: {
        type: Number
      },
      common_stock_equity: {
        type: Number
      },
      long_term_liabilities: {
        type: Number
      },
      short_term_liabilities: {
        type: Number
      }
    }],
    cash_flow: [{
      year: {
        type: Number
      },
      representation: {
        type: String
      },
      operating_cashflow: {
        type: Number
      },
      investing_cashflow: {
        type: Number
      },
      financial_cashflow: {
        type: Number
      },
      changes_in_cash: {
        type: Number
      },
      beginning_cash_position: {
        type: Number
      },
      other_cash_adjustments: {
        type: Number
      }
    }]
});



StockSchema.plugin(timestamp);

var Stock = mongoose.model('Stock', StockSchema);
module.exports = { Stock };
