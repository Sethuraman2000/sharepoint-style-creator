
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TrackingSectionProps {
  number: number;
  title: string;
  children?: React.ReactNode;
}

const TrackingSection = ({ number, title, children }: TrackingSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tracking-section animate-fade-in">
      <div 
        className="tracking-header" 
        onClick={toggleOpen}
      >
        <h3 className="font-medium text-gray-800">{number}. {title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
      
      {isOpen && (
        <div className="p-4 bg-white animate-slide-in">
          {children ? (
            children
          ) : (
            <div className="text-gray-500 text-sm italic">No data available for this section</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackingSection;
