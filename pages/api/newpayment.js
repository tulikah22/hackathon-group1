import vendors from './../utils/vendorsList.json'

export default function handler(req, res) {
    console.log('api handlerFunc')
    if(req.method === 'POST') {
      console.log(req.body);
    }

    res.status(200).json({ data: req.body })
  }
  
  