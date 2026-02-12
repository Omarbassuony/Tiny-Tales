import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/api";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      if (token) await logout(token);
    } catch {
      // ignore
    }
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg animate-fade-in text-center">
        <div className="bg-card p-10 rounded-lg border border-border shadow-sm">
          <h1 className="text-3xl font-bold font-serif text-foreground mb-2">
            Welcome, {userName}
          </h1>
          <p className="text-muted-foreground mb-8">You're successfully logged in.</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate("/")} variant="outline">
              View Product Page
            </Button>
            <Button onClick={handleLogout} variant="destructive" className="gap-2">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
