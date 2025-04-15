
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [showTotp, setShowTotp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (username && password) {
      if (username === "demo" && password === "password") {
        if (showTotp) {
          // Validate TOTP
          if (totpCode === "123456") {
            navigate("/");
            return;
          } else {
            setError("Invalid verification code. Please try again.");
            return;
          }
        }
        // For demo, show TOTP screen after first login attempt
        setShowTotp(true);
        setError(null);
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full px-4">
        <div className="xv-card animate-fade-in">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-xviolet-primary rounded-xl mx-auto flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Sign in to XViolet</h1>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            {!showTotp ? (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username" className="xv-label">Username</Label>
                    <Input
                      id="username"
                      className="xv-input"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="xv-label">Password</Label>
                    <Input
                      id="password"
                      className="xv-input"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <Button className="xv-btn-primary w-full mt-6" type="submit">
                  Login
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800">Verification Required</h3>
                    <p className="text-sm text-blue-700">
                      Please enter the verification code from your authenticator app.
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="totp" className="xv-label">Verification Code</Label>
                  <Input
                    id="totp"
                    className="xv-input text-center text-lg tracking-widest"
                    type="text"
                    placeholder="000000"
                    value={totpCode}
                    onChange={(e) => setTotpCode(e.target.value)}
                    maxLength={6}
                    autoComplete="one-time-code"
                  />
                </div>

                <Button className="xv-btn-primary w-full" type="submit">
                  Verify
                </Button>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center mt-2"
                  onClick={() => setShowTotp(false)}
                >
                  Back to login
                </button>
              </div>
            )}
          </form>

          <div className="mt-6 text-center text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Forgot password?
            </a>
            {" · "}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Need help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
