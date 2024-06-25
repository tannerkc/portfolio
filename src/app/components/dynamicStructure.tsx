import React, { useEffect } from 'react';

function getRandomInRange(min: number, max: number) {
  if (min > max) {
    throw new Error('Minimum value must be less than or equal to the maximum value.');
  }
  return Math.random() * (max - min) + min;
}

const generateDynamicStyles = (() => {
  let styleSheet = null;

  return (className, enhancedClass, rotateDeg, translateX, translateY) => {
    if (!styleSheet && typeof document !== undefined) {
      // Create the <style> tag
      const style = document?.createElement("style");
      // WebkitHack for Safari
      style.appendChild(document?.createTextNode(""));
      // Add the <style> element to the head
      document?.head?.appendChild(style);
      styleSheet = style.sheet;
    }

    // Define unique keyframes for each transformation
    const keyframes = `
      @keyframes float-${className} {
        0% { transform: rotate(${rotateDeg}deg) translate(${translateX}%, ${translateY}%); }
        50% { transform: rotate(${rotateDeg - 20}deg) translate(${translateX}%, ${translateY}% - 40px); }
        100% { transform: rotate(${rotateDeg}deg) translate(${translateX}%, ${translateY}%); }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    const rule = `.fancy:hover .${className} { 
      transform: rotate(${rotateDeg}deg) translate(${translateX}%, ${translateY}%);
      // animation: float-${className} 3s ease-in-out infinite;
    }`;

    if (![...styleSheet.cssRules].some(rule => rule.selectorText === `.fancy:hover .${className}`)) {
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }

    return className;
  };
})();

const renderElement = (element: { type: any; props?: {} | undefined; children?: never[] | undefined; enhance: boolean, enhancedClass?: string }, index = 0) => {
  if (typeof element === 'string' || typeof element === 'number') {
    return element;
  }

  const { type, props = {}, children = [], enhance = false, enhancedClass } = element;

  let enhancedChildren = children;

  if (enhance && typeof children === 'string') {
    enhancedChildren = (children as any).split('').map((char, idx) => {
      const className = `${enhancedClass}-${idx}`;

      let rotateDeg = getRandomInRange(-20, 18)
      let translateX = getRandomInRange(-30, 35)
      let translateY = getRandomInRange(-20, 20)

      console.log(rotateDeg, translateX, translateY)
    
      generateDynamicStyles(className, enhancedClass, rotateDeg, translateX, translateY);
      return (
      { "type": "span", "props": { "className": `${enhancedClass} ${className}` }, "children": char }
    )});
  }

  const transformStyle = {
    transform: `rotate(${getRandomInRange(-10, 10)}deg) translate(${getRandomInRange(-10, 10)}%, ${getRandomInRange(5, 80)}%)`,
  };

  return React.createElement(
    type,
    { ...props, key: index },
    Array.isArray(enhancedChildren)
      ? enhancedChildren.map((child, idx) => renderElement(child, idx))
      : renderElement(enhancedChildren)
  );
};


const DynamicRenderer = ({ json }) => {
  return <>{Array.isArray(json) ? json.map(renderElement) : renderElement(json)}</>;
};

export default DynamicRenderer;
