import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between container mx-auto items-center py-12">
      <h4 className="font-montserrat text-2xl mb-4 lg:mb-0">HCDC-ITS</h4>

      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
        <ul className="lg:flex space-x-12">
          <li>about</li>
          <li>learn</li>
          <li>contact</li>
        </ul>

        <Button className="text-sm md:text-base transition-opacity duration-300 ease-in-out hover:opacity-70">
          Browse Merch
        </Button>
      </div>
    </nav>
  );
};
