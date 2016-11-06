extern crate hyper;
extern crate serde;
extern crate serde_json as json;

use hyper::Client;
use serde::Deserialize;
use json::Value;
use std::io::Read;

struct Currency {
  // Identifier of the currency
  id: String,
  // Current course
  value: f32
}

pub struct Exchange {
  // Total list of currencies
  currencies: Vec<Currency>,
  // Base currency
  base: Currency
}


/**
* TODO: Implement
*/
impl serde::Deserialize for Currency {
   fn deserialize<D>(d: &mut D) -> Result<Self, D::Error> where D: serde::Deserializer {
    Ok(Currency { id: String::new(), value: 1.0 })
   }
}

impl Exchange {
  pub fn new() {
    let url = "http://api.fixer.io/latest";
    let client = Client::new();

    // Attempt to sent a request.
    let mut res = client
      .get(url)
      .send()
      .unwrap();
    
    if res.status == hyper::Ok {
      // Allocate buffer for storing response data.
      let mut buf: String = String::new();

      // Attempt to write respone data to buffer.
      match res.read_to_string(&mut buf) {
        Ok(data) => data,
        Err(_) => {
          println!("Something went wrong attempting to write request body to buffer.");
          return;
        }
      };

      // Attempt to write response data as JSON.
      let data: Currency = match json::from_str::<Currency>(&buf) {
        Ok(data) => data,
        Err(_) => {
          println!("Something went wrong attempting to write buffer to JSON.");
          return;
        }
      };
    }
  }
}

fn main() {
  Exchange::new();
}
