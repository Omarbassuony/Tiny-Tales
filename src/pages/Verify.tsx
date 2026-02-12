import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmail, resendVerifyCode } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

const Verify = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const token = localStorage.getItem("token");

  const handleVerify = async () => {
    if (code.length !== 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }
    if (!token) {
      toast.error("No token found. Please login again.");
      navigate("/login");
      return;
    }
    setLoading(true);
    try {
      const res = await verifyEmail(code, token);
      toast.success(res.message || "Account verified!");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!token) {
      toast.error("No token found. Please login again.");
      navigate("/login");
      return;
    }
    setResending(true);
    try {
      const res = await resendVerifyCode(token);
      toast.success(res.message || "Code resent!");
    } catch (err: any) {
      toast.error(err.message || "Failed to resend code");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-serif text-foreground">Verify Your Account</h1>
          <p className="text-muted-foreground mt-2">Enter the 6-digit code sent to your email</p>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border shadow-sm space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={code} onChange={setCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button onClick={handleVerify} className="w-full bg-primary text-primary-foreground hover:bg-copper-dark" disabled={loading}>
            {loading ? "Verifying..." : "Verify Account"}
          </Button>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="text-sm text-primary hover:underline"
          >
            {resending ? "Sending..." : "Resend Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
