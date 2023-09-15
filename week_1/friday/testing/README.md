# Unit Testing

Unit Testing is a software testing technique that focuses on verifying the correctness of
individual units or components of a software in isolation.

A "unit" typically refers to the smallest testable part of an application, which is often a
function, method, or a class.

The primary goal of unit testing is to ensure that each unit of code performs its intended
functionality correctly.

## Key Concepts

 - **Isolation**
    - Unit tests are designed to isolate a specific unit of code from ther est of the
    application
    - This means that when unit testing a function or method, all external dependencies
    (e.g. database connections, network requests) are usually replaced with mock objects or stubs
    - The focus of unit testing is on verifying behavior
- **Repeatable and Automated**
    - Unit tests are automated, meaning they can be executed repeatedly and consistently
    - Developers can run unit tests whenever they make changes to their codde, helping to catch
    regressions (unintended side effects) early in the development process
- **Rapid Feedback**
    - You can run unit tests and check if the code behaves as expe
    - This immediate feedback helps to catch and fix issues early, reducing debugging
- **Documentation**
    - Well-written unit tests serve as documentation for how individual units of code
    are expected to work
    - They provide a celar and executable specification of the code's behavior
- **Refactoring Support**
    - Unit test make it safer to refactor code
    - When you make changes to your code base, you can rely on unit tests to ensure that 
    existing functionality remans intact
- **Test-Driven Development (TDD)**
    - TDD is a development approach in which unit testsa re written before the actual code 
    - Developers define the expected behavior of a unit test through testa nd then implement
    the code to make the tests pass
    - 