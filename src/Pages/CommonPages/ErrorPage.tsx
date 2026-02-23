import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DotLottieReact src="/public/animations/notFound.json" loop autoplay />
      <p>hello world</p>
    </div>
  );
};

export default ErrorPage;
