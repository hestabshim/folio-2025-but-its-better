import styles from "../styles/layout.module.css"
import { useState, useRef } from "react";
interface tooltipProps {
    content: string;
    children: React.ReactNode;
}

const MouseTooltip = ({content, children}: tooltipProps)=> {
    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
      
        const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
      
        //+12 is added to give a spice between cursor and tooltip
        let tooltipX = clientX-100;
        let tooltipY = clientY-100;
      
        // Check if tooltip exceeds the right side of the viewport
        if (tooltipX + tooltipWidth > viewportWidth) {
          tooltipX = clientX - tooltipWidth - 10;
        }
      
        // Check if tooltip exceeds the bottom of the viewport
        if (tooltipY + tooltipHeight > viewportHeight) {
          tooltipY = viewportHeight - tooltipHeight - 10;
        }
      
        setTooltipPosition({ x: tooltipX, y: tooltipY });
      };
      
      const handleMouseEnter = () => {
        setTooltipVisible(true);
        setShowTooltipContent(false);
      };
      
      const handleMouseLeave = () => {
        setTooltipVisible(false);
      };
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);
  
  const tooltipRef = useRef<HTMLDivElement>(null);

  // ... component logic

  return (
    <div
      className={styles.position}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
};



export default MouseTooltip;

