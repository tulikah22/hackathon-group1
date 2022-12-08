export default function handler(req, res) {
    console.log("api handlerFunc");
    const { method } = req;
    switch (method) {
      case "POST":
        try {
          console.log(req.body);
        } catch (error) {
          console.log(error);
          res.send(body);
        }
        break;
      case "GET":
        console.log("GET method");
        console.log(req.body);
        break;
        default:
          res.setHeader('Allow', ['GET'])
          res.status(405).end(`Method ${method} Not Allowed`)
    }
    res.status(200).json({ data: req.body });
  }
  