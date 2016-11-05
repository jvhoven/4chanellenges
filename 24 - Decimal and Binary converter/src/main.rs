extern crate converter;
use std::io;

fn main() {
  println!("Decimal and Binary converter!");
  println!("What would you like to do?");
  println!(" 1. Decimal to Binary");
  println!(" 2. Binary to Decimal");

  loop {
    let choice: String = read();

    // Spooky `shadowing` of our initial variable choice.
    // See @to_integer.
    let choice: u32 = to_integer(choice);

    match choice {
      1 => decimal_to_binary(),
      2 => binary_to_decimal(),
      _ => println!("Invalid choice, please pick either 1 or 2."),
    }
  }
}

fn to_integer(string: String) -> u32 {
  // Convert the string to 32 bit unsigned integer.
  // It is possible to use the same variable name and assigning
  // another type to it by using a technique called `shadowing`.
  let number: u32 = match string.trim().parse() {
    Ok(num) => num,
    Err(_)  => 0,
  };

  number
}

fn read() -> String {
  // Create a mutable string.
  let mut input = String::new();

  // We allow stdin to borrow(and modify) our mutable string
  // by giving it a mutable reference to our string.
  io::stdin().read_line(&mut input)
    .expect("Failed to read line.");
  
  input
} 

fn binary_to_decimal() {
  println!("\nInsert binary for me to convert!");
  println!(" `back` to go back to main menu.");

  let input : String = read();

  // Match back to return to the main menu,
  // otherwise convert binary to decimal.
  match input.as_ref() {
    "back\n" => main(),
    _ => {
      converter::to_decimal(input.as_str());
    }
  };
}

fn decimal_to_binary() {
  println!("\nInsert decimal for me to evaluate!");
  println!(" `back` to go back to main menu.");

  let input : String = read();
  
  // Match back to return to the main menu,
  // otherwise convert decimal to binary.
  match input.as_ref() {
    "back\n" => main(),
    _ => {
      converter::to_binary(input.as_str());
    }
  };
}