"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🔐</span>
            </div>
            <span className="text-white text-xl font-semibold">SecureAuth</span>
          </div>
          <LoginButton mode="modal" asChild>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </LoginButton>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
          <div className="flex-1 space-y-8">
            <h1
              className={cn(
                "text-4xl md:text-6xl font-semibold text-white leading-tight",
                font.className
              )}
            >
              Secure Authentication
              <span className="text-blue-500"> for Your Application</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              A modern, secure, and feature-rich authentication system with
              email verification, two-factor authentication, and role-based
              access control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LoginButton mode="modal" asChild>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Get Started
                </Button>
              </LoginButton>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {features.map((feature, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-800/50">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-white font-medium">{feature.title}</div>
                  <div className="text-gray-400 text-sm">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="space-y-4">
                  <div className="w-full h-12 rounded-md bg-gray-700/50"></div>
                  <div className="w-3/4 h-12 rounded-md bg-gray-700/50"></div>
                  <div className="w-full h-12 rounded-md bg-blue-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Credit Section */}
        <footer className="mt-16 text-center text-gray-400">
          <p className="text-sm">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/md-ataullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Md Ataullah
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}

const features = [
  {
    icon: "🔒",
    title: "Secure",
    description: "End-to-end encryption",
  },
  {
    icon: "🔑",
    title: "2FA",
    description: "Two-factor auth",
  },
  {
    icon: "📧",
    title: "Email Verify",
    description: "Verified accounts",
  },
  {
    icon: "👥",
    title: "Roles",
    description: "Role-based access",
  },
];
