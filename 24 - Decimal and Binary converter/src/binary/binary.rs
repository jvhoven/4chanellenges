pub struct Converter<'a> {
  pub decimal: u32,
  pub binary: &'a str
}

impl<'a> Converter<'a> {
  pub fn to_decimal(binary: &str) -> Converter {
    let mut decimal: u32 = 0;

    for (index, c) in binary.chars().rev().enumerate() {
      if c == '1' {
        decimal += 2u32.pow(index as u32 - 1); // filter out \n
      }
    }
      
    Converter { decimal: decimal, binary: binary.trim_matches('\n') }
  }

  /**
  * TODO: Actual conversion to binary.
  */
  pub fn to_binary(decimal: u32) {
    println!("{} to binary is {:b}", decimal, decimal);
  }
}