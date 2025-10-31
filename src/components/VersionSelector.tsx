import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Zap } from "lucide-react";
const VersionSelector = () => {
  return <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 space-y-2">
        <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">
          Explore outras versões
        </p>
        
        <Link to="/">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            🍊 Original
          </Button>
        </Link>
        
        <Link to="/premium">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            
            Premium
          </Button>
        </Link>
        
        <Link to="/ecologica">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <Leaf className="h-4 w-4" />
            Ecológica
          </Button>
        </Link>
        
        <Link to="/delivery-rapido">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <Zap className="h-4 w-4" />
            Delivery Rápido
          </Button>
        </Link>
      </div>
    </div>;
};
export default VersionSelector;