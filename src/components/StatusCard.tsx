
import { CheckCircle, Circle, Clock } from "lucide-react";

interface StatusCardProps {
  status: 'completed' | 'in-progress' | 'pending';
  title: string;
  date?: string;
  phase: string;
}

const StatusCard = ({ status, title, date, phase }: StatusCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-pmhub-green" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-pmhub-orange" />;
      case 'pending':
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getCardClass = () => {
    const baseClass = "p-4 rounded-lg shadow-sm border flex flex-col items-center justify-center text-center h-24 transition-all duration-300 animate-scale-in";
    
    switch (status) {
      case 'completed':
        return `${baseClass} bg-green-50 border-green-100`;
      case 'in-progress':
        return `${baseClass} bg-orange-50 border-orange-100`;
      case 'pending':
        return `${baseClass} bg-blue-50 border-blue-100`;
      default:
        return `${baseClass} bg-gray-50 border-gray-100`;
    }
  };

  return (
    <div className={getCardClass()}>
      {getStatusIcon()}
      <div className="mt-2 text-xs font-medium">
        {title}
      </div>
      {date && (
        <div className="mt-1 text-xs text-gray-500">
          {date}
        </div>
      )}
      <div className="mt-1 text-xs text-gray-500">
        {phase}
      </div>
    </div>
  );
};

export default StatusCard;
