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
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const classes = [
    { id: "kids", name: "Children (5-14 years)", description: "Fun and engaging classes for young martial artists" },
    { id: "adults", name: "Adults (15-60 years)", description: "Comprehensive training for teens and adults" },
    { id: "kubudo", name: "Kobudo (Martial Arts Weapons)", description: "Martial Arts Weapons" },
  ];

  const getAvailableDates = (): Array<{ id: string; display: string }> => {
    const dates: Array<{ id: string; display: string }> = [];
    for (let i = 1; i <= 6; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        id: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
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
    "Parents must attend kids' trial classes"
  ];

  const handleNext = () => {
    if (currentStep === "branch" && selectedBranchId) setCurrentStep("class");
    else if (currentStep === "class" && selectedClass) setCurrentStep("date");
    else if (currentStep === "date" && selectedDate) setCurrentStep("time");
    else if (currentStep === "time" && selectedTime) setCurrentStep("userInfo");
    else if (currentStep === "userInfo" && fullName && email && mobile && dob && address) setCurrentStep("confirmation");
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
    <div className="min-h-screen pt-[130px] bg-black text-white">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                        : "bg-gray-800 text-gray-500"
                  }`}>
                    {i + 1 < getStepNumber() ? <Check size={18} /> : i + 1}
                  </div>
                  <span className={`text-xs font-medium ${i + 1 <= getStepNumber() ? "text-white" : "text-gray-500"}`}>
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
                      : "bg-gray-800"
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
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center">
                  <MapPin className="text-[#FFD700]" size={28} />
                </div>
                <h2 className="text-3xl font-bold">Select Branch</h2>
              </div>

              <div className="mb-8 p-6 rounded-2xl bg-[#eb0339]/10 border border-[#eb0339]/30">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="text-[#FFD700]" size={20} />
                  Important Prerequisites
                </h3>
                <ul className="space-y-2">
                  {prerequisites.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#eb0339]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-[#eb0339]" size={12} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedBranchId === branch.id
                        ? "border-[#eb0339] bg-[#eb0339]/10"
                        : "border-white/10 hover:border-white/20 bg-white/5"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-2 text-white">{branch.name}</h3>
                    <p className="text-sm text-gray-400">{branch.address}</p>
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
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center">
                  <Users className="text-[#FFD700]" size={28} />
                </div>
                <h2 className="text-3xl font-bold">Select Class Type</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {classes.map((classType) => (
                  <button
                    key={classType.id}
                    onClick={() => setSelectedClass(classType.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 h-full ${
                      selectedClass === classType.id
                        ? "border-[#eb0339] bg-[#eb0339]/10"
                        : "border-white/10 hover:border-white/20 bg-white/5"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">{classType.name}</h3>
                    <p className="text-gray-400">{classType.description}</p>
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
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center">
                  <Calendar className="text-[#FFD700]" size={28} />
                </div>
                <h2 className="text-3xl font-bold">Select Date</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getAvailableDates().map((date) => (
                  <button
                    key={date.id}
                    onClick={() => setSelectedDate(date.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedDate === date.id
                        ? "border-[#eb0339] bg-[#eb0339]/10"
                        : "border-white/10 hover:border-white/20 bg-white/5"
                    }`}
                  >
                    <p className="font-bold text-lg text-white">{date.display}</p>
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
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center">
                  <Clock className="text-[#FFD700]" size={28} />
                </div>
                <h2 className="text-3xl font-bold">Select Time Slot</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selectedTime === time
                        ? "border-[#eb0339] bg-[#eb0339]/10"
                        : "border-white/10 hover:border-white/20 bg-white/5"
                    }`}
                  >
                    <p className="font-bold text-white">{time}</p>
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
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center">
                  <User className="text-[#FFD700]" size={28} />
                </div>
                <h2 className="text-3xl font-bold">Your Information</h2>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                      Mobile Number <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-300 mb-2">
                      Date of Birth <span className="text-[#eb0339]">*</span>
                    </label>
                    <input
                      type="date"
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                      Address <span className="text-[#eb0339]">*</span>
                    </label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      rows={3}
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all resize-none placeholder:text-gray-500"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all resize-none placeholder:text-gray-500"
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
              className="p-8 rounded-3xl bg-gradient-to-br from-[#eb0339] to-[#c70230] text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                <Check className="text-[#eb0339]" size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Booking Confirmed!</h2>
              <p className="text-xl mb-8 text-white/80">Your free trial class has been scheduled</p>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6 text-left">
                <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                  <Calendar size={18} />
                  Booking Details
                </h3>
                <div className="space-y-3 text-white/90">
                  <p><span className="font-semibold text-white">Branch:</span> {selectedBranch?.name}</p>
                  <p><span className="font-semibold text-white">Class:</span> {classes.find(c => c.id === selectedClass)?.name}</p>
                  <p><span className="font-semibold text-white">Date:</span> {getAvailableDates().find(d => d.id === selectedDate)?.display}</p>
                  <p><span className="font-semibold text-white">Time:</span> {selectedTime}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6 text-left">
                <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                  <User size={18} />
                  Your Information
                </h3>
                <div className="space-y-3 text-white/90">
                  <p><span className="font-semibold text-white">Full Name:</span> {fullName}</p>
                  <p><span className="font-semibold text-white">Email:</span> {email}</p>
                  <p><span className="font-semibold text-white">Mobile:</span> {mobile}</p>
                  <p><span className="font-semibold text-white">Date of Birth:</span> {dob ? new Date(dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</p>
                  <p><span className="font-semibold text-white">Address:</span> {address}</p>
                  {message && <p><span className="font-semibold text-white">Message:</span> {message}</p>}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 text-white/90">
                <p className="text-lg mb-2">
                  A confirmation message will be sent to you via WhatsApp shortly.
                </p>
                <p className="text-sm text-white/70">
                  Please arrive 10 minutes early and bring comfortable clothing.
                </p>
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-[#eb0339] px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-[#FFD700] hover:text-black"
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
              onClick={handleBack}
              disabled={currentStep === "branch"}
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === "branch"
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={
                (currentStep === "branch" && !selectedBranchId) ||
                (currentStep === "class" && !selectedClass) ||
                (currentStep === "date" && !selectedDate) ||
                (currentStep === "time" && !selectedTime) ||
                (currentStep === "userInfo" && (!fullName || !email || !mobile || !dob || !address))
              }
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                (currentStep === "branch" && !selectedBranchId) ||
                (currentStep === "class" && !selectedClass) ||
                (currentStep === "date" && !selectedDate) ||
                (currentStep === "time" && !selectedTime) ||
                (currentStep === "userInfo" && (!fullName || !email || !mobile || !dob || !address))
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white hover:shadow-lg hover:shadow-[#eb0339]/30"
              }`}
            >
              {currentStep === "userInfo" ? "Confirm Booking" : "Next"}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
