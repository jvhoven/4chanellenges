pub fn to_decimal(binary: &str) -> String {
  println!("called to_decimal function");
  let decimal = String::from(binary);
  decimal
}

pub fn to_binary(decimal: u32) -> String {  
  let mut total = decimal;
  let mut remainder = 0;
  let mut binary = 0;
  let mut i = 1;

  while total != 0 {
    remainder = total%2;
    total = total/2;
    binary = binary + (remainder*i);
    i = i*10;
  }

  binary.to_string()
}