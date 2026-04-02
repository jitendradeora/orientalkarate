import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, AlertCircle, Calendar, Users, MapPin, Clock, User, ArrowLeft, ArrowRight, Sparkles, Home } from "lucide-react";
import { branches } from "../data/branches";
import { Link } from "react-router";

type Step = "branch" | "class" | "date" | "time" | "userInfo" | "confirmation";

export function Booking() {
  const [currentStep, setCurrentStep] = useState<Step>("branch");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [numKids, setNumKids] = useState("1");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const classes = [
    { id: "kids", name: "Children (5-14 years)", description: "Fun and engaging classes for young martial artists" },
    { id: "adults", name: "Adults (15-60 years)", description: "Comprehensive training for teens and adults" },
    { id: "kubudo", name: "Kobudo (Martial Arts Weapons)", description: "Martial Arts Weapons" },
  ];

  const getAvailableDates = (): Array<{ id: string; display: string }> => {
    const dates: Array<{ id: string; display: string }> = [];
    for (let i = 2; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        id: date.toISOString().split("T")[0],
        display: date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
      });
    }
    return dates;
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const prerequisites = [
    "Avoid heavy meals 1 hour before class",
    "Wear flexible, comfortable clothing",
    "Parents must attend kids' trial classes",
  ];

  const handleNext = () => {
    if (currentStep === "branch" && selectedBranchId) setCurrentStep("class");
    else if (currentStep === "class" && selectedClass) setCurrentStep("date");
    else if (currentStep === "date" && selectedDate) setCurrentStep("time");
    else if (currentStep === "time" && selectedTime) setCurrentStep("userInfo");
    else if (currentStep === "userInfo" && fullName && email && whatsapp && numKids && address)
      setCurrentStep("confirmation");
  };

  const handleBack = () => {
    if (currentStep === "class") setCurrentStep("branch");
    else if (currentStep === "date") setCurrentStep("class");
    else if (currentStep === "time") setCurrentStep("date");
    else if (currentStep === "userInfo") setCurrentStep("time");
  };

  const getStepNumber = () => {
    const steps = { branch: 1, class: 2, date: 3, time: 4, userInfo: 5, confirmation: 6 };
    return steps[currentStep];
  };

  const selectedBranch = branches.find(b => b.id === selectedBranchId);

  const stepLabels = ["Branch", "Class", "Date", "Time", "Info"];

  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      {/* Hero Section - Lighter banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#eb0339]/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">No Commitment Required</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Free Trial
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Start your martial arts journey today
          </motion.p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 pb-20 text-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        {currentStep !== "confirmation" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-4">
              {stepLabels.map((label, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-all duration-300 ${
                    i + 1 < getStepNumber() 
                      ? "bg-[#eb0339] text-white" 
                      : i + 1 === getStepNumber()
                        ? "bg-gradient-to-br from-[#eb0339] to-[#ff1a4f] text-white shadow-lg shadow-[#eb0339]/30"
                        : "bg-gray-200 text-gray-500"
                  }`}>
                    {i + 1 < getStepNumber() ? <Check size={18} /> : i + 1}
                  </div>
                  <span className={`text-xs font-medium ${i + 1 <= getStepNumber() ? "text-gray-900" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                    step <= getStepNumber() 
                      ? "bg-gradient-to-r from-[#eb0339] to-[#ff1a4f]" 
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {currentStep === "branch" ? (
            <motion.div
              key="branch"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10">
                  <MapPin className="text-[#eb0339]" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Select Branch</h2>
              </div>

              <div className="mb-8 rounded-2xl border border-[#eb0339]/25 bg-[#eb0339]/5 p-6">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                  <AlertCircle className="text-[#eb0339]" size={20} />
                  Important Prerequisites
                </h3>
                <ul className="space-y-2">
                  {prerequisites.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eb0339]/15">
                        <Check className="text-[#eb0339]" size={12} />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                      selectedBranchId === branch.id
                        ? "border-[#eb0339] bg-[#eb0339]/8"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{branch.name}</h3>
                    <p className="text-sm text-gray-600">{branch.address}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : currentStep === "class" ? (
            <motion.div
              key="class"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10">
                  <Users className="text-[#eb0339]" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Select Class Type</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {classes.map((classType) => (
                  <button
                    key={classType.id}
                    type="button"
                    onClick={() => setSelectedClass(classType.id)}
                    className={`h-full rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                      selectedClass === classType.id
                        ? "border-[#eb0339] bg-[#eb0339]/8"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{classType.name}</h3>
                    <p className="text-gray-600">{classType.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : currentStep === "date" ? (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10">
                  <Calendar className="text-[#eb0339]" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Select Date</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {getAvailableDates().map((date) => (
                  <button
                    key={date.id}
                    type="button"
                    onClick={() => setSelectedDate(date.id)}
                    className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
                      selectedDate === date.id
                        ? "border-[#eb0339] bg-[#eb0339]/8"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <p className="text-lg font-bold text-gray-900">{date.display}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : currentStep === "time" ? (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10">
                  <Clock className="text-[#eb0339]" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Select Time Slot</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                      selectedTime === time
                        ? "border-[#eb0339] bg-[#eb0339]/8"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-bold text-gray-900">{time}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : currentStep === "userInfo" ? (
            <motion.div
              key="userInfo"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10">
                  <User className="text-[#eb0339]" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Your details</h2>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700">
                      Parent name <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="Parent or guardian full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-gray-700">
                      WhatsApp number <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      required
                      className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="+971 50 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="numKids" className="mb-2 block text-sm font-medium text-gray-700">
                      Number of kids <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="number"
                      id="numKids"
                      min={1}
                      max={20}
                      value={numKids}
                      onChange={(e) => setNumKids(e.target.value)}
                      required
                      className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                      Address <span className="text-[#eb0339]">*</span>
                    </label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      rows={3}
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                      placeholder="Any additional information or questions?"
                    />
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eb0339]/10">
                <Check className="text-[#eb0339]" size={48} />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Booking Confirmed!</h2>
              <p className="mb-8 text-xl text-gray-600">Your free trial class has been scheduled</p>

              <div className="mb-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                  <Calendar size={18} className="text-[#eb0339]" />
                  Booking Details
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Branch:</span> {selectedBranch?.name}</p>
                  <p><span className="font-semibold text-gray-900">Class:</span> {classes.find(c => c.id === selectedClass)?.name}</p>
                  <p><span className="font-semibold text-gray-900">Date:</span> {getAvailableDates().find(d => d.id === selectedDate)?.display}</p>
                  <p><span className="font-semibold text-gray-900">Time:</span> {selectedTime}</p>
                </div>
              </div>

              <div className="mb-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-gray-700">
                <p className="mb-2 text-lg">
                  A confirmation message will be sent to you via WhatsApp shortly.
                </p>
                <p className="text-sm text-gray-600">
                  Please arrive 10 minutes early and wear comfortable clothing.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Parent should be with child during the class.
                </p>
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95"
              >
                <Home size={20} />
                Return to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {currentStep !== "confirmation" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between mt-8"
          >
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === "branch"}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all duration-300 ${
                currentStep === "branch"
                  ? "cursor-not-allowed bg-gray-200 text-gray-400"
                  : "border border-gray-300 bg-white text-gray-900 hover:border-[#eb0339] hover:text-[#eb0339]"
              }`}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={
                (currentStep === "branch" && !selectedBranchId) ||
                (currentStep === "class" && !selectedClass) ||
                (currentStep === "date" && !selectedDate) ||
                (currentStep === "time" && !selectedTime) ||
                (currentStep === "userInfo" && (!fullName || !email || !whatsapp || !numKids || !address))
              }
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all duration-300 ${
                (currentStep === "branch" && !selectedBranchId) ||
                (currentStep === "class" && !selectedClass) ||
                (currentStep === "date" && !selectedDate) ||
                (currentStep === "time" && !selectedTime) ||
                (currentStep === "userInfo" && (!fullName || !email || !whatsapp || !numKids || !address))
                  ? "cursor-not-allowed bg-gray-200 text-gray-400"
                  : "bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white shadow-md shadow-[#eb0339]/20 hover:shadow-lg"
              }`}
            >
              {currentStep === "userInfo" ? "Confirm booking — 0 AED" : "Next"}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
      </section>
    </div>
  );
}
