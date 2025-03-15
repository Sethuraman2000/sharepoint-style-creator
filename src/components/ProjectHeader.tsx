
import { Clock, FileText } from "lucide-react";

const ProjectHeader = () => {
  return (
    <div className="p-5 bg-white border-b border-gray-200 animate-slide-in">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Tools 00011</span>
            <span className="text-sm text-gray-500">Assigned On: 2024-12-01</span>
          </div>
          
          <div className="text-sm text-gray-600">
            <p><span className="font-medium">Short Description:</span> A centralized platform designed to empower project managers</p>
            <p><span className="font-medium">Program Start Date:</span> 2024-12-01</p>
            <p><span className="font-medium">Program End Date:</span> 2025-12-01</p>
            <p><span className="font-medium">Completion Date:</span> 2025-03-01</p>
            <p className="flex items-center mt-1">
              <span className="font-medium mr-2">Status:</span> 
              <span className="flex items-center">
                <span className="h-3 w-3 bg-pmhub-orange rounded mr-1"></span>
                In Progress
              </span>
            </p>
            <p><span className="font-medium">Priority:</span> Mandatory</p>
          </div>
          
          <div className="flex items-center text-blue-600 space-x-1 cursor-pointer hover:text-blue-800 transition-colors">
            <FileText size={16} />
            <span className="text-sm font-medium">Project History</span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row md:flex-col gap-3">
          <div className="flex gap-4">
            <div className="filter-option">
              <p className="text-xs text-gray-500">Filter By:</p>
              <div className="flex space-x-2 mt-1">
                <button className="bg-gray-200 text-xs px-3 py-1 rounded">Half Yearly Basis Act (%)</button>
                <button className="bg-gray-200 text-xs px-3 py-1 rounded">Monthly Basis Act (%)</button>
                <button className="bg-pmhub-darkgreen text-white text-xs px-3 py-1 rounded">Weekly Basis Act (%)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
