const { Stock }           = require("./../models/stock.model");
const { DividendService } = require("./../services/dividend.service")

exports.create = async (req, res, next) => {
  const data = req.body;

  if (await DividendService.isInputValid(data) == false) {
    return res.status(400).json({
      "api": "Dividend Analysis API",
      "code": 400,
      "status": "Missing input",
      "message": "The request is missing body input variable. Please refer to the API documentation"
    });
  }


  const stock = await Stock.findOne({ "ticker": data.ticker });

  Stock.findOneAndUpdate(
    {"_id": stock.id },
    { $push: {
        past_dividends: {
          "dividend_amount":  data.dividend_amount,
          "currency":         data.currency,
          "date_of_approval": data.date_of_approval,
          "ex_date":          data.ex_date,
          "payment_date":     data.payment_date
        }
      }
    }).then(() => {
      return res.status(201).json({
        "api": "Dividend Analysis API",
        "code": 201,
        "status": "Success",
        "message": "Dividend was successfully registered."
      });
    });
};
