const countrieFunc = (req, res) => {
    const { name, race } = req.query

    res.status(200).send(`esto es countries ${name}`);
  };

  const countrieSearch = (req, res) => {
    const {id} = req.params;

    res.status(200).send(`esto es countrieSearch ${id}`);
  };

  const countrieName = (req, res) => {
    res.status(200).send("esto es countrieName");
  };

  module.exports = {
    countrieFunc,
    countrieSearch,
    countrieName
   };