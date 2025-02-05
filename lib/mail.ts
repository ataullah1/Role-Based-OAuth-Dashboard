import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

// Common email styling
const emailWrapper = `
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
`;

const buttonStyle = `
  display: inline-block;
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  margin: 16px 0;
`;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "ataullah@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
      <div style="${emailWrapper}">
        <h1 style="color: #1f2937; margin-bottom: 24px;">Verify your email address</h1>
        <p style="color: #4b5563; margin-bottom: 16px;">
          Thanks for signing up! Please verify your email address by clicking the button below.
        </p>
        <a href="${confirmLink}" style="${buttonStyle}">
          Verify Email Address
        </a>
        <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
          If you didn't create an account, you can safely ignore this email.
        </p>
      </div>
    `,
  });
};

// sending password reset email
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "ataullah@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
      <div style="${emailWrapper}">
        <h1 style="color: #1f2937; margin-bottom: 24px;">Reset Your Password</h1>
        <p style="color: #4b5563; margin-bottom: 16px;">
          We received a request to reset your password. Click the button below to create a new password.
        </p>
        <a href="${resetLink}" style="${buttonStyle}">
          Reset Password
        </a>
        <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
          If you didn't request a password reset, you can safely ignore this email.
          Your password will remain unchanged.
        </p>
      </div>
    `,
  });
};

// sending two factor token email
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "ataullah@resend.dev",
    to: email,
    subject: "Your Two-Factor Authentication Code",
    html: `
      <div style="${emailWrapper}">
        <h1 style="color: #1f2937; margin-bottom: 24px;">Two-Factor Authentication Code</h1>
        <p style="color: #4b5563; margin-bottom: 16px;">
          Use the following code to complete your login:
        </p>
        <div style="
          background-color: #ffffff;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          text-align: center;
          margin: 24px 0;
        ">
          <span style="
            font-size: 32px;
            font-weight: bold;
            color: #1f2937;
            letter-spacing: 4px;
          ">${token}</span>
        </div>
        <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
          This code will expire shortly. Do not share this code with anyone.
        </p>
      </div>
    `,
  });
};
