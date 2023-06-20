const countrieFunc = (req, res) => {
    res.status(200).send("esto es countries");
  };

  const countrieSearch = (req, res) => {
    res.status(200).send("esto es countrieSearch");
  };

  const countrieName = (req, res) => {
    res.status(200).send("esto es countrieName");
  };

  module.exports = {
    countrieFunc,
    countrieSearch,
    countrieName
   };