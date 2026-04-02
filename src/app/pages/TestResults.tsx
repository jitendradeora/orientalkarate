import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Award, Search, RotateCcw, Sparkles, ClipboardList } from "lucide-react";

const COURSE_TYPES = [
  { value: "", label: "Select course type" },
  { value: "kids", label: "Kids (5–14)" },
  { value: "adults", label: "Adults (15–60)" },
  { value: "kobudo", label: "Kobudo" },
  { value: "classes-custom", label: "Classes & Custom" },
  { value: "all", label: "All programs" },
] as const;

type CourseValue = (typeof COURSE_TYPES)[number]["value"];

type ResultState = "idle" | "loading" | "success";

function KarateLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#eb0339]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#eb0339]"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], y: [0, -4, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#eb0339] to-[#c70230] shadow-lg shadow-[#eb0339]/30"
        >
          <Award className="h-7 w-7 text-white" />
        </motion.div>
      </div>
      <div className="flex gap-2">
        {["Ready", "Stance", "Focus"].map((word, i) => (
          <motion.span
            key={word}
            className="text-sm font-bold uppercase tracking-widest text-[#eb0339]"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500">Retrieving your grading record…</p>
    </div>
  );
}

export function TestResults() {
  const [courseType, setCourseType] = useState<CourseValue>("");
  const [rollNumber, setRollNumber] = useState("");
  const [status, setStatus] = useState<ResultState>("idle");
  const [resultCourseLabel, setResultCourseLabel] = useState("");
  const [resultRoll, setResultRoll] = useState("");

  const runSearch = useCallback(() => {
    if (!courseType || !rollNumber.trim()) return;
    const label = COURSE_TYPES.find((c) => c.value === courseType)?.label ?? courseType;
    setStatus("loading");
    setResultCourseLabel("");
    setResultRoll("");

    window.setTimeout(() => {
      setResultCourseLabel(label);
      setResultRoll(rollNumber.trim());
      setStatus("success");
    }, 1800);
  }, [courseType, rollNumber]);

  const reset = useCallback(() => {
    setCourseType("");
    setRollNumber("");
    setStatus("idle");
    setResultCourseLabel("");
    setResultRoll("");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 text-gray-900">
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Test <span className="text-[#eb0339]">Results</span>
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Look up your course and roll number to view your result, then explore current member offers.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-14">
        {/* Left: form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-6 flex items-center gap-2 text-[#eb0339]">
            <ClipboardList className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Search</span>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="course-type" className="mb-2 block text-sm font-medium text-gray-700">
                Select course type
              </label>
              <select
                id="course-type"
                value={courseType}
                onChange={(e) => setCourseType(e.target.value as CourseValue)}
                className="w-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.25rem",
                }}
              >
                {COURSE_TYPES.map((opt) => (
                  <option key={opt.value || "placeholder"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="roll-number" className="mb-2 block text-sm font-medium text-gray-700">
                Roll number
              </label>
              <input
                id="roll-number"
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="e.g. OK-2024-1842"
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="button"
                onClick={runSearch}
                disabled={!courseType || !rollNumber.trim() || status === "loading"}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#eb0339]/25 transition-opacity disabled:cursor-not-allowed disabled:opacity-45 hover:opacity-95"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-[#eb0339] hover:text-[#eb0339]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right: results */}
        <div className="min-h-[320px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:min-h-[400px] sm:p-8">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 rounded-2xl bg-gray-100 p-6">
                  <Award className="mx-auto h-12 w-12 text-gray-400" />
                </div>
                <p className="text-lg font-semibold text-gray-800">No result yet</p>
                <p className="mt-2 max-w-sm text-sm text-gray-500">
                  Choose your program, enter your roll number, and tap <strong className="text-gray-700">Search</strong>{" "}
                  to load your grading outcome.
                </p>
              </motion.div>
            )}

            {status === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KarateLoading />
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="rounded-2xl border border-[#eb0339]/20 bg-[#eb0339]/5 p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eb0339]">Outcome</p>
                  <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Congratulations!</h2>
                  <p className="mt-2 text-gray-600">
                    You have successfully met the requirements for this grading cycle.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-left text-sm">
                  <p className="text-gray-500">Course</p>
                  <p className="font-semibold text-gray-900">{resultCourseLabel}</p>
                  <p className="mt-3 text-gray-500">Roll number</p>
                  <p className="font-mono font-semibold text-gray-900">{resultRoll}</p>
                  <p className="mt-3 text-gray-500">Status</p>
                  <p className="font-semibold text-[#eb0339]">Passed — eligible for next syllabus stage</p>
                </div>

                <p className="text-center text-xs text-gray-500">
                  Demo lookup only. Official records are maintained at your branch.
                </p>

                <div className="flex justify-center pt-2">
                  <Link
                    to="/offers"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#f5e6a8] px-8 py-3.5 text-sm font-bold text-gray-900 shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Click here for offer
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
