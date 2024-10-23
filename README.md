# React Period Display

A React component that renders content based on real-time checks of specified start and end dates. This component is useful for displaying content that should only be visible during a certain time period.

## Features

- Display content based on a start date.
- Display content until an end date.
- Automatically updates visibility every second.

## Installation
You can install the `PeriodDisplay` component via npm:

```bash
npm install react-period-display
```

## Usage
To use the PeriodDisplay component, first import it into your React application:

```js
import PeriodDisplay from 'period-display';
```

Next, implement the component in your application like this:

```js
<PeriodDisplay showStart={yourStartDate} showEnd={yourEndDate}>
  Your content here
</PeriodDisplay>
```

## Examples

### Example 1: Display Content Until End Date

```js
<PeriodDisplay showEnd={new Date('2024/10/23 17:21:20')}>
  Display content until the end date 
</PeriodDisplay>
```

### Example 2: Display Content After Start Date

```js
<PeriodDisplay showStart={new Date('2024/10/23 17:21')}>
  Display content after the start date
</PeriodDisplay>
```

### Example 3: Display Content Within a Specific Period

```js
<PeriodDisplay showStart={startDate} showEnd={endDate}>
  Display content within the period of start and end date
</PeriodDisplay>
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
