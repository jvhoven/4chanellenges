extern crate binary;
use binary::Converter;

#[test]
fn should_return_correct_decimal() {
  let expected = 42u32;
  let conversion: Converter = Converter::to_decimal("101010\n");

  assert_eq!(conversion.decimal, expected);
}

#[test]
fn should_work_for_large_binaries() {
  let expected = 20505192u32;
  let conversion: Converter = Converter::to_decimal("1001110001110001001101000\n");

  assert_eq!(conversion.decimal, expected);
}