# MBS (Mobile Buttons)

MBS is a JavaScript micro-library designed to enhance the interaction with `<button>` elements for mobile/touch devices.

## Features

- Adds **hover** and **active** effects to buttons on mouse devices.
- Adds **active** effects on touch devices, ensuring consistent behavior across platforms.
- Optimizes for mobile and touch-based devices with passive event listeners for better performance.
- Only applies hover effects on devices with a mouse or pointer input.

## Installation

1. Download or copy the script to your project directory.
2. Add the script to your HTML file:
```html
<script src="path/to/mbs.js"></script>
```

## Usage

### 1. Initialization

You can initialize the `MobileButton` class by providing the `element_id` of the button:

```javascript
const myButton = new MobileButton({element_id: 'myButton'});
```

This will attach the appropriate hover and active effects to the button element. Once initialized, the `MobileButton` class will automatically handle adding and removing the `mbs-hover` and `mbs-active` classes based on the user’s input method (mouse or touch).

### 2. Customizing

You can customize the hover and active effects by modifying the following CSS classes:

```css
.mbs-hover {
    /* Example hover effect */
    background-color: #f0f0f0;
}

.mbs-active {
    /* Example active effect */
    background-color: #ccc;
}
```

## How It Works

The `MobileButton` class automatically detects the type of input device (mouse or touch) and adjusts event listeners accordingly. Here's how it works:

The class uses `matchMedia('(pointer: fine)')` & `'PointerEvent' in window` to determine if the device supports a precise pointer (like a mouse). If the device does not have a fine pointer, the hover effects are skipped, and only the active effects are applied.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
