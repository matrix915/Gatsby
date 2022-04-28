module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ProjectBlue: "#00AEEF",
        ProjectBlack: "#F6F6F6",
        black: "#000000",
        grey: "#F6F6F6",
        dark: "#000000",
      },
      boxShadow: {
        project: "0px 2px 12px rgba(0, 0, 0, 0.09)",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}
