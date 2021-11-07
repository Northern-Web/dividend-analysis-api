
class DividendService {
  static async isInputValid (data) {
    var missingInputs = 0;

    if (!data.ticker || data.ticker == null) {
      missingInputs = missingInputs + 1;
    }

    if (!data.dividend_amount || data.dividend_amount == null) {
      missingInputs = missingInputs + 1;
    }

    if (!data.currency || data.currency == null) {
      missingInputs = missingInputs + 1;
    }

    if (!data.date_of_approval || data.date_of_approval == null) {
      missingInputs = missingInputs + 1;
    }

    if (!data.ex_date || data.ex_date == null) {
      missingInputs = missingInputs + 1;
    }

    if (!data.payment_date || data.payment_date == null) {
      missingInputs = missingInputs + 1;
    }

    if (missingInputs > 0) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = { DividendService };
