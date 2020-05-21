# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

1.if a function needs to be call in several places then instead of excecuting each time we can memorise at 1st instance and read the value from hashtable for the remining instance. it improves the performance alot .

2. by using closures we are encapsulating the memorised value.

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_
