# Incorrect Usage of $inc Operator in MongoDB Update Operation
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation, leading to unexpected behavior and potential data corruption.  The issue arises from providing a string value instead of a number to the `$inc` operator.

## Bug
The code attempts to increment the `counter` field by 1; however, due to the use of a string ("1"), the operation fails to increment the counter correctly.

## Solution
The solution is to provide a numerical value to the `$inc` operator.  This ensures that the counter is incremented correctly.
