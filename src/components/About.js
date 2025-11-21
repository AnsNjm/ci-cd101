import { Heading1 } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Navbar Count at the Top */}
      <div className="absolute top-0 text-blue-600 flex items-center space-x-2">
        <Heading1 size={28} />
        <span className="text-xl font-bold">About Page</span>
      </div>

      {/* Centered Content */}
      <div className="bg-white top-0 shadow-lg p-8 rounded-lg max-w-lg">
        <h1 className="text-2xl font-bold text-blue-600">Welcome to the About Page</h1>
        <p className="mt-4 text-gray-700">
          This app helps manage students efficiently with a modern UI and useful features, It was developed by Anass NAJAM as a part of his DevOps Project.
          This app was used to test CI/CD functions and to use a cloud provider to host the app in the cloud.
        </p>
      </div>
    </div>
  );
};

export default About;
