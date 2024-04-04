import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  let errorMessage: string;

  // Narrow the type
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <div className="bg-slate-1 rounded-lg m-auto p-8 shadow-md text-center max-w-fit mt-20">
      <h1 className="text-3xl font-bold leading-8 pb-4">Oops!</h1>
      <p className="leading-8">
        There's been an unexpected error. We're working on it!
      </p>
      <p className="leading-8 italic">{errorMessage}</p>
    </div>
  );
}
