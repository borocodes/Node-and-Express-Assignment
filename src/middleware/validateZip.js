//TODO: add a NaN condition? Or add in error handling?

function validateZip(req, res, next) {
    const zip = req.params.zip;
    if (zip !== 'all' && (zip.length !== 5 || isNaN(zip))) {
      next(`Zip (${zip}) is invalid!`);
    } else {
      next();
    }
  }

module.exports = validateZip;
