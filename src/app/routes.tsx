import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Kobudo } from "./pages/Kobudo";
import { JoinUs } from "./pages/JoinUs";
import { FeeAdmission } from "./pages/FeeAdmission";
import { Gallery } from "./pages/Gallery";
import { Booking } from "./pages/Booking";
import { Instructors } from "./pages/Instructors";
import { Benefits } from "./pages/Benefits";
import { KidsProgram } from "./pages/KidsProgram";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { ClassesAvailable } from "./pages/ClassesAvailable";
import { Blog } from "./pages/Blog";
import { BlogDetails } from "./pages/BlogDetails";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "kobudo", Component: Kobudo },
      { path: "join-us", Component: JoinUs },
      { path: "fee-admission", Component: FeeAdmission },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
      { path: "instructors", Component: Instructors },
      { path: "benefits", Component: Benefits },
      { path: "kids", Component: KidsProgram },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "classes-available", Component: ClassesAvailable },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetails },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-and-conditions", Component: TermsConditions },
      { path: "*", Component: NotFound },
    ],
  },
]);
