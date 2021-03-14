exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  const params = JSON.parse(event.body);
  const email = params.email || "no-email";
  console.log("Activating: "+email);

  return {
    statusCode: 200,
    body: JSON.stringify({message: "Activated: "+email})
    };
};