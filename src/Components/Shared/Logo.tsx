import logo from "../../assets/myAssets/logo.png"

const Logo = () => {
  return (
    <div className="flex justify-between items-end">
          <img  src={logo} alt="Logo" className="md:h-12 h-8" />
          <p className="font-bold md:text-3xl text-xl">PercelPilot</p>
    </div>
  )
}

export default Logo