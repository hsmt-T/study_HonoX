import SignupForm from "../../islands/SignupForm";

export default function LoginPage() {
    return (
        <main class="min-h-screen flex justify-center items-center">
            <div class="p-6 rounded-xl border shadow w-full max-w-md">
                <h1 class="text-xl mb-4 font-bold">Signup</h1>
                <SignupForm/>
            </div>
        </main>
    );
}