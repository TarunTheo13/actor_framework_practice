# Actor Framework Practice

A basic example of how an actor framework works. The '#secret_name' instance variable can only be changed externally through sending messages to class instance and then processing those messages. The messages are stored in an 'inbox' array and are then individually processed by calling the 'processInbox()' method.