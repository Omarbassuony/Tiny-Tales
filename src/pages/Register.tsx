import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const COUNTRY_CODES = [
  { code: "971", label: "🇦🇪 +971" },
  { code: "966", label: "🇸🇦 +966" },
  { code: "20", label: "🇪🇬 +20" },
  { code: "1", label: "🇺🇸 +1" },
  { code: "44", label: "🇬🇧 +44" },
  { code: "91", label: "🇮🇳 +91" },
];

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    mobile_country_code: "971",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await register(form);
      const token = res.data?.token;
      const name = res.data?.name;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userName", name || form.name);
      }
      toast.success(res.message || "Account created successfully");
      navigate("/verify");
    } catch (err: any) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-serif text-foreground">Create Account</h1>
          <p className="text-muted-foreground mt-2">Join TinyTales today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-lg border border-border shadow-sm">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required placeholder="••••••••" />
          </div>

          <div>
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input id="password_confirmation" name="password_confirmation" type="password" value={form.password_confirmation} onChange={handleChange} required placeholder="••••••••" />
          </div>

          <div className="flex gap-3">
            <div className="w-1/3">
              <Label htmlFor="mobile_country_code">Code</Label>
              <select
                id="mobile_country_code"
                name="mobile_country_code"
                value={form.mobile_country_code}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-2/3">
              <Label htmlFor="mobile">Phone Number</Label>
              <Input id="mobile" name="mobile" value={form.mobile} onChange={handleChange} required placeholder="0501234567" />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-copper-dark" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
