"use server";

import { getVerificationTokenByToken } from "@/lib/actions/auth/verification-token";
import { getUserByEmail } from "@/lib/actions/user.action";
import { db } from "@/lib/database.connection";

export const newVerification = async (token: string) => {
  console.log("token------->>", token);
  const existingToken = await getVerificationTokenByToken(token);
  console.log("existingToken------->>", existingToken);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  // Update the user's email verification status
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(), // Set email as verified
      email: existingToken.email, // Update email if necessary
    },
  });

  // Only delete the verification token after successful verification
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified!" };
};
