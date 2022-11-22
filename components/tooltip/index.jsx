import React, { useState } from 'react'
import styles from './styles.module.scss'
import clsx from "clsx";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={styles.TooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={clsx(styles.TooltipTip, styles.top)}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
