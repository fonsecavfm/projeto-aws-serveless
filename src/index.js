module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Sucesso!",
        input: event,
      },
      null,
      2
    ),
  };
};
