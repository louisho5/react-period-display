import React, { useEffect, useState, Fragment } from 'react';

function PeriodDisplay({ children, showStart, showEnd }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkVisibility = () => {
      const currentDate = new Date();
      const startDate = showStart ? new Date(showStart) : null;
      const endDate = showEnd ? new Date(showEnd) : null;

      // Determine visibility based on the current date and provided dates
      const shouldBeVisible =
        (startDate ? currentDate >= startDate : true) &&
        (endDate ? currentDate <= endDate : true);

      setIsVisible(shouldBeVisible);
    };

    // Check visibility immediately on mount
    checkVisibility();

    // Set interval to check visibility every second
    const intervalId = setInterval(checkVisibility, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [showStart, showEnd]); // Re-run effect when showStart or showEnd change

  return isVisible ? <Fragment>{children}</Fragment> : null;
}

export default PeriodDisplay;