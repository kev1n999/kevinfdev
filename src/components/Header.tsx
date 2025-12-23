import image from "../assets/profile.jpg";

function Header() {
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div className="">
        <img
        className="rounded-full w-45 border-solid border-2 border-neutral-700"
        src={image} alt="" />
      </div>

      <div className="flex justify-center gap-1 p-6 flex-col">
        <h1 className="text-white text-center text-2xl">
          Kevin Fernando
        </h1>
        <p className="text-neutral-700 text-center">
          IT Student
        </p>
      </div>
      
    </div>
  );
}

export default Header;
