import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mt-11">
      <SignUp
        afterSignInUrl="/codes"
        afterSignUpUrl="/codes"
        redirectUrl="/codes"
      />
    </div>
  );
}
