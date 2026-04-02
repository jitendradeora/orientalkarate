import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Kobudo } from "./pages/Kobudo";
import { FeeAdmission } from "./pages/FeeAdmission";
import { Gallery } from "./pages/Gallery";
import { Booking } from "./pages/Booking";
import { KidsProgram } from "./pages/KidsProgram";
import { AdultsProgram } from "./pages/AdultsProgram";
import { Programs } from "./pages/Programs";
import { Offers } from "./pages/Offers";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { ClassesAvailable } from "./pages/ClassesAvailable";
import { Blog } from "./pages/Blog";
import { BlogDetails } from "./pages/BlogDetails";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { NotFound } from "./pages/NotFound";
import { TestResults } from "./pages/TestResults";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/kids", Component: KidsProgram },
      { path: "programs/adults", Component: AdultsProgram },
      { path: "programs/kobudo", Component: Kobudo },
      { path: "programs/classes-custom", Component: ClassesAvailable },
      { path: "offers", Component: Offers },
      { path: "kobudo", element: <Navigate to="/programs/kobudo" replace /> },
      { path: "fee-admission", Component: FeeAdmission },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetails },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-and-conditions", Component: TermsConditions },
      { path: "test-results", Component: TestResults },
      { path: "join-us", element: <Navigate to="/programs/adults" replace /> },
      { path: "benefits", element: <Navigate to="/programs/adults" replace /> },
      { path: "instructors", element: <Navigate to="/about#instructors" replace /> },
      { path: "kids", element: <Navigate to="/programs/kids" replace /> },
      { path: "classes-available", element: <Navigate to="/programs/classes-custom" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);
