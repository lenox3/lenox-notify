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

![Preview](https://media.discordapp.net/attachments/421702737739120643/1304494534662815794/image.png?ex=672f98b5&is=672e4735&hm=a7d311850f2ecd85441958e18ffc256e1eb775357ee3d765e4df2c1aa48e73bd&=&format=webp&quality=lossless&width=469&height=374)

## Features

- Simple integration with the QBCore framework
- Responsive design using Tailwind CSS
- Customizable notifications with different lengths and types

## Requirements

- [qb-core](https://github.com/qbcore-framework/qb-core)

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request. Your contributions are welcome!
