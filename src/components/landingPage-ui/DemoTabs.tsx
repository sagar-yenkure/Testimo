import { MessageSquare, Eye, Grid3X3, Code } from "lucide-react";
import { Button } from "../ui/button";

const SubmissionForm = () => {
  return (
    <div className=" p-8 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 text-center">
        <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Submission Form
        </h3>
        <p className="text-gray-600">
          Collect testimonials with beautiful, customizable forms
        </p>
        <div className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your name"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your email"
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg h-24"
            placeholder="Share your experience..."
          />
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

const ModerationDashboard = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Eye className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">
            Moderation Dashboard
          </h3>
        </div>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            12 Approved
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            3 Pending
          </span>
        </div>
      </div>
      <div className="grid gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-4 border border-gray-200 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900">Customer Name</p>
                <p className="text-sm text-gray-600">
                  Amazing product! Highly recommend...
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                className="text-green-600 border-green-600"
              >
                Approve
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="text-red-600 border-red-600"
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WallOfLove = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex items-center space-x-2 mb-6">
        <Grid3X3 className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Wall of Love</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-72 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
              <div>
                <p className="font-medium text-sm text-gray-900">Customer</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Great product! Really helped us grow our business...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const EmbedWidget = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-lg w-full text-center">
        <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Embed Widget</h3>
        <p className="text-gray-600 mb-4">Copy and paste to embed anywhere</p>
        <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto text-left">
          <div className="text-green-400">&lt;script</div>
          <div className="ml-4 text-blue-400">src=https://widget./embed.js</div>
          <div className="ml-4 text-yellow-400">
            data-widget-id=your-widget-id
          </div>
          <div className="text-green-400">&gt;&lt;/script&gt;</div>
        </div>
        <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
          Copy Code
        </Button>
      </div>
    </div>
  );
};

// demo screens
const demoScreens = [
  {
    id: "form",
    title: "Submission Form",
    icon: MessageSquare,
    content: <SubmissionForm />,
  },
  {
    id: "moderation",
    title: "Moderation Dashboard",
    icon: Eye,
    content: <ModerationDashboard />,
  },
  {
    id: "wall",
    title: "Wall of Love",
    icon: Grid3X3,
    content: <WallOfLove />,
  },
  {
    id: "embed",
    title: "Embed Widget",
    icon: Code,
    content: <EmbedWidget />,
  },
];

export default demoScreens;
