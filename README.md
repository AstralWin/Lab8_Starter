# Lab 8 - Starter
1. Within a Github action that runs whenever code is pushed. This option is better since the tests will be automatically run and does not require our attention so we can focus on other things that warrants our concern.
2. No
3. No I would not. The message feature is a core component of the application and involves many moving parts. Unit tests are unable to test how individual components interact with each other on a feature level. Not to mention modifying the message feature would also affect other unit tests.
4. Yes I would. Testing for max message length is on a much smaller scale and does not involve many moving parts. Modifying this feature would also not have much of an effect on other non-related unit tests.
