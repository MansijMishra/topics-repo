"use client"

export const InfoForm = ({ formData, handleInputChange, toggleNext }) => {
  return (
    <div>
      <form onSubmit={toggleNext} className="flex flex-col w-[400px]">
        <label
          className="text-2xl font-bold mb-2"
          htmlFor="name">Name</label>
        <input
          className="border-2 border-[#4C220A] p-2 pl-4 rounded-sm mb-5"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label
          className="text-2xl font-bold mb-2"
          htmlFor="email">Email</label>
        <input
          className="border-2 border-[#4C220A] p-2 pl-4 rounded-sm mb-5"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label
          className="text-2xl font-bold mb-2"
          htmlFor="password">Password</label>
        <input
          className="border-2 border-[#4C220A] p-2 pl-4 rounded-sm mb-5"
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <label
          className="text-2xl font-bold mb-2"
          htmlFor="password">Confirm Password</label>
        <input
          className="border-2 border-[#4C220A] p-2 pl-4 rounded-sm mb-5"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <div className="flex gap-2 items-center justify-center w-full mt-3">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
        </div>
        <button className="w-full mt-3 h-14 flex justify-center items-center rounded-md bg-customSecondary text-customPrimary hover:text-customPrimary hover:bg-customAccent transition-colors duration-300">
          <p className="font-poppins font-bold text-base md:text-xl">Next</p>
        </button>
      </form>
    </div>
  )
}