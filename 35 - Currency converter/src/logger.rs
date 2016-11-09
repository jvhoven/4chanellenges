mod logger;

enum Severity {
  FATAL,
  ERROR,
  WARN,
  INFO,
  DEBUG,
  TRACE
}

struct Error {
  severity: Severity,
  message: String
}