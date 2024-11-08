## Installation

To install Lenox Notify, follow these steps:

1. Navigate to the `qb-core/client/functions` directory.
2. Look for the `QBCore.Functions.Notify` function.
3. Replace the existing function with the following code:

    ```lua
    function QBCore.Functions.Notify(text, length, type)
        exports['qb-notify']:Notify(text, length, type) 
    end
    ```

4. Save your changes.

## Usage

Once installed, you can use the `QBCore.Functions.Notify` function throughout your QBCore scripts to trigger notifications. Customize the `text`, `length`, and `type` parameters to fit your needs. For example:
```lua
QBCore.Functions.Notify('You have been revived!', 'success', 7500)
```
- **text**: The message to be displayed in the notification.
- **length**: Duration (in ms) for which the notification will be visible.
- **type**: The type of notification, which can be one of the following:
  - `success`: Indicates a successful action.
  - `error`: Represents an error or failure.
  - `primary`: For general notifications.
  - `warn`: To highlight warnings or important messages.

## Preview

![Preview](https://imgur.com/qSCKSpI)

## Features

- Simple integration with the QBCore framework
- Responsive design using Tailwind CSS
- Customizable notifications with different lengths and types

## Disadvantages

- **Readability Issues**: Tthe text may sometimes be hard to read due to low opacity on the background color. You can freely change the colors to what you like in the index.html file since its 100% open sourced code.

## Requirements

- [qb-core](https://github.com/qbcore-framework/qb-core)

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request. Your contributions are welcome!
