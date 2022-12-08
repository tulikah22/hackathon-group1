import vendors from './../utils/vendorsList.json'

export default function handler(req, res) {
    console.log('api handlerFunc')
    if(req.method === 'POST') {
      console.log(req.body);
      let result = req.body;

      if (result !== undefined) {
        // let vendor = result.data.vendor;
        // console.log('Vendor', vendor);
        // if (Object.values(vendors).includes(vendor)) {
          if (typeof window !== "undefined") {
            localStorage.setItem("data", JSON.stringify(result.data));
            console.log(localStorage.setItem("data", JSON.stringify(result.data)));
          }
        // } else {
        // }
      } else {
        console.log(res);
      }
    }

    res.status(200).json({ data: req.body })
  }
  
  