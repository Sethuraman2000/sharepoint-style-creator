
import { FileText, Award, CheckSquare, Clock, Layers } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-pmhub-green text-white w-[220px] min-h-screen flex flex-col animate-fade-in">
      <div className="flex flex-col items-center p-6 border-b border-pmhub-darkgreen">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-3">
          <img 
            src="/lovable-uploads/de90d28f-1473-4542-a1fd-a046af5bfe47.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Mrs. Jenny Wilson</h2>
        <p className="text-sm opacity-90 mt-1">Project Manager - Delivery</p>
      </div>
      
      <div className="p-4 border-b border-pmhub-darkgreen">
        <div className="flex items-center gap-2 text-sm mb-1">
          <Award size={16} />
          <span>Projects with Compliance</span>
        </div>
        <div className="flex items-center gap-2 text-sm pl-6">
          <span>Champion achievements</span>
        </div>
      </div>
      
      <div className="flex-1 py-2">
        <div className="sidebar-item active">
          <FileText size={18} />
          <span>All Active Projects</span>
        </div>
        
        <div className="sidebar-item">
          <CheckSquare size={18} />
          <span>Completed Project</span>
        </div>
        
        <div className="sidebar-item">
          <Clock size={18} />
          <span>In progress</span>
        </div>
      </div>
      
      <div className="p-4 border-t border-pmhub-darkgreen">
        <h3 className="text-sm font-semibold mb-3">Key Stages of Project Management</h3>
        <p className="text-xs opacity-80 mb-2">Filter by Stages:</p>
        
        <div className="space-y-2">
          <div className="sidebar-item">
            <Layers size={16} />
            <span className="text-sm">Project-Initiation</span>
          </div>
          <div className="sidebar-item">
            <Layers size={16} />
            <span className="text-sm">Project-Planning</span>
          </div>
          <div className="sidebar-item">
            <Layers size={16} />
            <span className="text-sm">Project-execution</span>
          </div>
          <div className="sidebar-item">
            <Layers size={16} />
            <span className="text-sm">Project-closure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
