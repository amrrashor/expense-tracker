import { useState, type FormEvent } from "react";
import { Button } from "../common/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

type LoginPayload = { email: string; password: string };

export default function SimpleLoginForm({ onSubmit }: { onSubmit: (data: LoginPayload) => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email) return toast.error("Email is required.");
        if (!password) return toast.error("Password is required.");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) return toast.error("Please enter a valid email address.");

        
        if (onSubmit && typeof onSubmit === "function") {
            onSubmit({ email, password });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-lg font-medium text-primary-black">
                Email
            </label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 mb-4 w-full p-3 rounded-lg bg-input-bg focus:border-none outline-none"
                placeholder="you@example.com"
                aria-required="true"
            />

            <label htmlFor="password" className="block text-lg font-medium text-primary-black">
                Password
            </label>
            <div className="mt-1 mb-4 w-full items-center pr-3 rounded-lg bg-input-bg flex justify-between">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full  pl-3 py-3 focus:border-none outline-none"
                    placeholder="Your password"
                    aria-required="true"
                    
                />
                {showPassword ? (
                    <EyeOff 
                        onClick={() => setShowPassword(false)} 
                        className="w-4 cursor-pointer" 
                    />
                ) : (
                    <Eye 
                        onClick={() => setShowPassword(true)} 
                        className="w-4 cursor-pointer" 
                    />
                )}
            </div>
            <div className="mb-3 text-sm text-primary-blue-1 text-right">
                <a href="">Forgot Password</a>
            </div>
            <Button
                type="submit"
                className="w-full p-6 text-lg rounded-lg bg-primary-blue hover:bg-primary-blue/80 text-white font-medium"
            >
                Login
            </Button>
        </form>
    );
}
